import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import {mostView} from '../../../api/auth';
import {getBanner} from '../../../api/auth';
import {newArrival} from '../../../api/auth';
import {bestSeller} from '../../../api/auth';
import {featuredProduct} from '../../../api/auth';

const Index = () => {
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0)
  const [thirdIndex, setThirdIndex] = useState(0)

  const [imgData, setimgData] = useState([]);
  const [mostViewData, setMostViewData] = useState([]);
  const [bestSellerData, setBestSellerData] = useState([]);
  const [newArrivalData, setNewArrivalData] = useState([]);
  const [featuredProductApi, setFeaturedProductApi] = useState([]);
  // console.log("ababab", featuredProductApi);

  const fetchPath = imgData.map(item => item.path);
  const fetchTitle = imgData.map(item => item.title);

  const productImage = featuredProductApi.map(img => img.path);
  const productPrice = featuredProductApi.map(img => img.name);
  const productName = featuredProductApi.map(img => img.price);


  useEffect(() => {
    // Call the function and update the state with the result
    getBanner().then(result => {
      setimgData(result?.data?.result?.data);
    });
  }, []);


  useEffect(() => {
    featuredProduct().then(response => {
      setFeaturedProductApi(response.data?.result?.productData);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % imgData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imgData]);

  useEffect(() => {
    const newInterval = setInterval(() => {
      setSecondIndex(prevIndex => (prevIndex + 1) % featuredProductApi.length);
    }, 3000);
    return () => clearInterval(newInterval);
  }, [featuredProductApi]);

  return (
    <>
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'column'}}>
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

          <ScrollView
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const {contentOffset} = event.nativeEvent;
              const viewSize = event.nativeEvent.layoutMeasurement.width;
              const pageNum = Math.floor(contentOffset.x / viewSize);
              setIndex(pageNum);
            }}>
            <Image
              style={styles.image}
              source={{uri: `http://103.127.29.85:3006${fetchPath[index]}`}}
            />
            <Text
              style={{
                left: -380,
                top: 130,
                fontSize: 20,
                fontWeight: '900',
                fontFamily: 'Josefin Sans',
              }}>
              {fetchTitle[index]}
            </Text>
          </ScrollView>

          <View style={styles.ThirdView}>
            <Text style={styles.titleSecond}>Featured Products</Text>
          </View>

          <ScrollView
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 350,
              height: 290,
              left: 30,
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const {contentOffset} = event.nativeEvent;
              const viewSize = event.nativeEvent.layoutMeasurement.width;
              const pageNum = Math.floor(contentOffset.x / viewSize);
              setIndex(pageNum);
            }}>
            <Image
              style={[styles.image, styles.newImage]}
              source={{uri: `http://103.127.29.85:3006${productImage[secondIndex]}`}}
            />

            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 200,
                zIndex: 1,
              }}>
              {productPrice[index]}
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 120,
                left: 50
              }}>
              {productName[index]}
            </Text>
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: 80,
                left: 30,
              }}>
              <Button color="#FB9400" title="New" />
            </View>
          </ScrollView>

          <ScrollView
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 350,
              height: 250,
              left: 30,
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const {contentOffset} = event.nativeEvent;
              const viewSize = event.nativeEvent.layoutMeasurement.width;
              const pageNum = Math.floor(contentOffset.x / viewSize);
              setIndex(pageNum);
            }}>
            <Image
              style={[styles.image, styles.newImage]}
              source={{uri: `http://103.127.29.85:3006${productImage[index]}`}}
            />

            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 100,
              }}></Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 120,
              }}></Text>
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: 80,
                left: 30,
              }}></View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  FirstView: {
    flex: 1,
    justifyContent: 'center',
    width: 30,
    height: 50,
  },
  SecondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    top: 100,
    width: '94%',
    left: 0,
    zIndex: 1,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleSecond: {
    fontSize: 22,
    color: '#0E1133',
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 18,
  },
  image: {
    width: 411.5,
    height: 400,
    top: 100,
  },
  newImage: {
    marginTop: -50,
  },
  MainImage: {
    position: 'relative',
    width: 150,
    height: 150,
    marginTop: 80,
    marginLeft: 20,
  },
});
