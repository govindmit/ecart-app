import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {userForgotPassword} from '../../api/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity, TextInput, Button} from 'react-native';

const ForgotPassword = () => {
  const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const handleForgotPassword = async values => {
    let res = await userForgotPassword(values.email);
    console.log(' handleForgotPassword ', res);
  };

  return (
    <>
      <View style={{width: '100%'}}>
        <TouchableOpacity style={{top: 10, left: 8}}>
          <Icon name="angle-left" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        <Text
          style={{
            color: '#222222',
            fontSize: 34,
            width: '100%',
            height: 100,
            top: 80,
            left: 30,
            fontWeight: 'bold',
            lineHeight: 34,
          }}>
          Forgot password
        </Text>
      </View>
      <View>
        <Text
          style={{
            width: 343,
            height: 40,
            top: 110,
            left: 15,
            fontFamily: 'Metropolis',
            fontSize: 17,
            lineHeight: 20,
            textAlign: 'left',
            letterSpacing: 1,
          }}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
      </View>
      <View>
        <Formik
          initialValues={{email: ''}}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleForgotPassword}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                style={{top: 200, borderWidth: 1, width: '80%', left: 33, }}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={{color: 'red', top: '195%', left: '5.5%'}}>
                  {errors.email}
                </Text>
              )}
              <View
                style={{
                  top: 220,
                  width: '90%',
                  left: 19,
                  borderRadius: 30,
                  borderColor:'red',
                  borderWidth: 10,
                  backgroundColor: 'red'
                }}> 
                <Button color='red' title="Reset Password" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default ForgotPassword;
