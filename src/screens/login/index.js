import axios from 'axios';
import * as yup from 'yup';
import {Formik} from 'formik';
import React, {useState} from 'react';
import DropShadow from 'react-native-drop-shadow';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [data, setData] = useState();
  // console.log('data', data);
  const navigate = useNavigation();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters long')
      .max(40, 'Username cannot exceed 20 characters')
      .matches(
        /^[a-zA-Z0-9_.-]/,
        'Username can only contain letters, numbers, underscores, dots, and dashes',
      ),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#%^&()]).{8,}$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    // ),
  });

  const handleLogin = async values => {
    console.log(values);
    try {
      const {username, password} = values;
      const response = await axios.post(
        'http://103.127.29.85:3006/api/user-auth/login',
        {
          email: username,
          password: password,
        },
      );
      setData(response.data);

      if (data.result.message === 'Logged In Success') {
        navigate.navigate('Dashboard');
      }

      // Handle the successful response here
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('err', error.response.data);
        console.log('err 2', error.response.status);
        console.log('err 3', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('err 4', error.request);
      } else {
        // Other errors
        console.log('Error', error.message);
      }
      console.log('err 5', error.config);
    }
  };

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.textview}>
            <TouchableOpacity style={styles.Backicon}>
              <Icon name="angle-left" size={50} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={styles.text}>Login</Text>
            </View>
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('../../assets/mangopic.png')}
              />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <View style={{width: '100%'}}>
                      <DropShadow
                        style={{
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 12,
                          },
                          shadowOpacity: 0.58,
                          shadowRadius: 16.0,

                          elevation: 24,
                        }}>
                        <TextInput
                          style={styles.input}
                          placeholder="Email"
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                          value={values.username}
                        />
                        {touched.username && errors.username && (
                          <Text style={styles.error}>{errors.username}</Text>
                        )}

                        <TextInput
                          style={styles.input}
                          placeholder="Password"
                          secureTextEntry={true}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                        />
                        {touched.password && errors.password && (
                          <Text style={styles.error}>{errors.password}</Text>
                        )}
                      </DropShadow>
                    </View>

                    <TouchableOpacity
                      onPress={() => navigate.navigate('Forgotpassword')}>
                      <Text style={styles.forgotPassword}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>

                    <View style={styles.btn}>
                      <Button color='red' title="Login" onPress={() => handleSubmit()} />
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default Home;
