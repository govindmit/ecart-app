import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {getBanner} from '../../../api/auth';

const Index = () => {
  const [imgData, setimgData] = useState([]);

  useEffect(() => {
    // Call the function and update the state with the result
    getBanner().then(result => {
      setimgData(result?.data?.result?.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.FirstView}>
        <Image
          style={styles.MainImage}
          source={require('../../../assets/mangopic.png')}
        />
      </View>

      <View style={styles.SecondView}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '200px',
          height: '90px',
         
        
        }}>
        {imgData.map(item => (
          <>
            {console.log('item', `http://103.127.29.85:3006${item.path}`)}
            <View style={{height:'50px'}}>
              <Text style={{fontSize: 5}}>{item.content}</Text>
              <Text style={{fontSize: 5}}>{item.title}</Text>
              <Image
                style={{
                  width: '90px',
                  height: 320,
                  
                }}
                key={item.id}
                source={{uri: `http://103.127.29.85:3006${item.path}`}}
              />
            </View>
          </>
        ))}
      </View>

      <View style={styles.ThirdView}>
        <Text style={styles.titleSecond}>Featured Products</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  FirstView: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '70%',
  },
  MainImage: {
    width: '25%',
    height: '25%',
    top: 10,
    left: 40,
  },
  SecondView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    top: 150,
    borderWidth: 2,
    width: '90%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'jos',
  },
  dropdown: {
    padding: 10,
  },
  ThirdView: {
    width: '100%',
    display: 'flex',
  },
  titleSecond: {
    fontSize: 22,
    color: '#0E1133',
    textAlign: 'center',
    fontWeight: '800',
    top: 40,
  },
});
