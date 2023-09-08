import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import {mostView} from '../../../api/auth';
import {getBanner} from '../../../api/auth';
import {newArrival} from '../../../api/auth';
import {bestSeller} from '../../../api/auth';
import {featuredProduct} from '../../../api/auth';

import ImageSlider from 'react-native-image-slider';

const Index = () => {
  const [imgData, setimgData] = useState([]);
  const [mostViewData, setMostViewData] = useState([]);
  const [bestSellerData, setBestSellerData] = useState([]);
  const [newArrivalData, setNewArrivalData] = useState([]);
  const [featuredProductApi, setFeaturedProductApi] = useState([]);

  useEffect(() => {
    // Call the function and update the state with the result
    getBanner().then(result => {
      setimgData(result?.data?.result?.data);
    });
  }, []);

  useEffect(() => {
    featuredProduct().then(response => {
      setFeaturedProductApi(response);
    });
  }, []);

  useEffect(() => {
    newArrival().then(response => {
      setNewArrivalData(response);
    });
  }, []);

  useEffect(() => {
    mostView().then(response => {
      setMostViewData(response);
    });
  }, []);

  useEffect(() => {
    bestSeller().then(response => {
      setBestSellerData(response);
    });
  }, []);

  const images = [
    'http://103.127.29.85:3006/uploads/imagepexels-eric-mufasa-1350789.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200',
  ];

  return (
    <>
      <View>
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
          images={images}
          onPress={({index}) => alert(index)}
          customSlide={({index, item, style, width}) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                {backgroundColor: index % 2 === 0 ? 'yellow' : 'green'},
              ]}>
              <Image source={{uri: item}} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}>
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
      <ScrollView>
        <View
          style={{display: 'flex', flexDirection: 'column',}}>
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
              width: '100%',
              height: 50,
              flexDirection: 'row',
            }}>
            {imgData.map(item => (
              <>
                <View style={{height: '50px'}}>
                  <Text style={{fontSize: 5}}>{item.content}</Text>
                  <Text style={{fontSize: 5}}>{item.title}</Text>
                  <Image
                    style={{
                      width: 50,
                      height: 100,
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
        </View>
      </ScrollView>
    </>
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
    width:20,
    height:100 ,
    left:150,
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
  // titleSecond: {
  //   fontSize: 22,
  //   color: '#0E1133',
  //   textAlign: 'center',
  //   fontWeight: '800',
  //   top: 40,
  // },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 100,
    height: 100,
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
