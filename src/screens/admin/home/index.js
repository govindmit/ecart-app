import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

import { mostView } from '../../../api/auth';
import { getBanner } from '../../../api/auth';
import { newArrival } from '../../../api/auth';
import { bestSeller } from '../../../api/auth';
import { featuredProduct } from '../../../api/auth';

const Index = () => {
  //---------------- All Index Stats -------------
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [thirdIndex, setThirdIndex] = useState(0);
  const [fourthIndex, setFourthIndex] = useState(0);
  const [fifthIndex, setFifthIndex] = useState(0);

  //---------------- All Data stored in this stats --------
  const [imgData, setimgData] = useState([]);
  const [mostViewData, setMostViewData] = useState([]);
  const [bestSellerData, setBestSellerData] = useState([]);
  const [newArrivalData, setNewArrivalData] = useState([]);
  const [featuredProductApi, setFeaturedProductApi] = useState([]);

  const fetchPath = imgData.map(item => item.path);
  const fetchTitle = imgData.map(item => item.title);

  const productImage = featuredProductApi.map(img => img.path);
  const productPrice = featuredProductApi.map(img => img.name);
  const productName = featuredProductApi.map(img => img.price);

  const newArrivalImage = newArrivalData
    .map(item => item.ProductImages)
    .flat()
    .map(imgPath => imgPath.path);

  //GetBanner API response -----------------------------
  useEffect(() => {
    getBanner().then(result => {
      setimgData(result?.data?.result?.data);
    });
  }, []);

  //featuredProduct API response -------------------------
  useEffect(() => {
    featuredProduct().then(response => {
      setFeaturedProductApi(response.data?.result?.productData);
    });
  }, []);

  //   Get New Arrival API response ------------------
  useEffect(() => {
    newArrival().then(response => {
      setNewArrivalData(response.data?.result?.productData);
    });
  }, []);

  //  Most View API Response --------------------
  useEffect(() => {
    mostView().then(response => {
      setMostViewData(
        response.data?.result?.productData
          .map(item => item.ProductImages)
          .flat()
          .map(imgPath => imgPath.path),
      );
    });
  }, []);

  // Best Seller API response -------------------------
  useEffect(() => {
    bestSeller().then(response => {
      setBestSellerData(
        response.data?.result?.productData
          .map(item => item.ProductImages)
          .flat()
          .map(item => item.path),
      );
    });
  }, []);

  // Banner Index -----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % imgData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imgData]);

  // Product Index -----------------------
  useEffect(() => {
    const newInterval = setInterval(() => {
      setSecondIndex(prevIndex => (prevIndex + 1) % featuredProductApi.length);
    }, 3000);
    return () => clearInterval(newInterval);
  }, [featuredProductApi]);

  // newArrival Index ----------------------
  useEffect(() => {
    const newInterval = setInterval(() => {
      setThirdIndex(prevIndex => (prevIndex + 1) % newArrivalData.length);
    }, 3000);
    return () => clearInterval(newInterval);
  }, [newArrivalData]);

  // Most View Index --------------------
  useEffect(() => {
    const newInterval = setInterval(() => {
      setFourthIndex(prevIndex => (prevIndex + 1) % mostViewData.length);
    }, 3000);
    return () => clearInterval(newInterval);
  }, [mostViewData]);

  // Best Seller Index ---------
  useEffect(() => {
    const newInterval = setInterval(() => {
      setFifthIndex(prevIndex => (prevIndex + 1) % bestSellerData.length);
    }, 3000);
    return () => clearInterval(newInterval);
  }, [bestSellerData]);

  return (
    <>
      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
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
              const { contentOffset } = event.nativeEvent;
              const viewSize = event.nativeEvent.layoutMeasurement.width;
              const pageNum = Math.floor(contentOffset.x / viewSize);
              setIndex(pageNum);
            }}>
            <Image
              style={styles.image}
              source={{ uri: `http://103.127.29.85:3006${fetchPath[index]}` }}
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
              height: 400,
              left: 30,
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const { contentOffset } = event.nativeEvent;
              const viewSize = event.nativeEvent.layoutMeasurement.width;
              const pageNum = Math.floor(contentOffset.x / viewSize);
              setIndex(pageNum);
            }}>
            <Image
              style={[styles.image, styles.newImage]}
              source={{
                uri: `http://103.127.29.85:3006${productImage[secondIndex]}`,
              }}
            />

            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 200,
              }}>
              {productPrice[index]}
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                fontWeight: 'bold',
                top: 320,
                left: 50,
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

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 50,
              }}>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 30, fontWeight: '900', color: '#0E1133' }}>
                  Latest Product
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 350,
                height: 400,
                left: 30,
                marginTop: 30,
              }}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={event => {
                const { contentOffset } = event.nativeEvent;
                const viewSize = event.nativeEvent.layoutMeasurement.width;
                const pageNum = Math.floor(contentOffset.x / viewSize);
                setSecondIndex(pageNum);
              }}>
              <Image
                style={[styles.image, styles.newImage]}
                source={{
                  uri: `http://103.127.29.85:3006${productImage[index]}`,
                }}
              />
            </ScrollView>
          </View>

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 50,
              }}>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 30, fontWeight: '900', color: '#0E1133' }}>
                  New Arrivals
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 350,
                height: 400,
                left: 30,
                marginTop: 30,
              }}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={event => {
                const { contentOffset } = event.nativeEvent;
                const viewSize = event.nativeEvent.layoutMeasurement.width;
                const pageNum = Math.floor(contentOffset.x / viewSize);
                setThirdIndex(pageNum);
              }}>
              <Image
                style={[styles.image, styles.newImage]}
                source={{
                  uri: `http://103.127.29.85:3006${newArrivalImage[thirdIndex]}`,
                }}
              />
            </ScrollView>
          </View>

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 50,
              }}>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 30, fontWeight: '900', color: '#0E1133' }}>
                  Most Views
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 350,
                height: 400,
                left: 30,
                marginTop: 30,
              }}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={event => {
                const { contentOffset } = event.nativeEvent;
                const viewSize = event.nativeEvent.layoutMeasurement.width;
                const pageNum = Math.floor(contentOffset.x / viewSize);
                setFourthIndex(pageNum);
              }}>
              <Image
                style={[styles.image, styles.newImage]}
                source={{
                  uri: `http://103.127.29.85:3006${mostViewData[fourthIndex]}`,
                }}
              />
            </ScrollView>
          </View>

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 50,
              }}>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 30, fontWeight: '900', color: '#0E1133' }}>
                  Best Seller
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 350,
                height: 400,
                left: 30,
                marginTop: 30,
              }}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={event => {
                const { contentOffset } = event.nativeEvent;
                const viewSize = event.nativeEvent.layoutMeasurement.width;
                const pageNum = Math.floor(contentOffset.x / viewSize);
                setFifthIndex(pageNum);
              }}>
              <Image
                style={[styles.image, styles.newImage]}
                source={{
                  uri: `http://103.127.29.85:3006${bestSellerData[fifthIndex]}`,
                }}
              />
            </ScrollView>
          </View>

          <View
            style={{
              width: '100%',
              height: 550,
              padding: 20,
              marginTop: 80,
              backgroundColor: '#eeeeee',
              display: 'flex',
              shadowOffset: { width: 20, height: 30 },
              shadowRadius: 50,
              shadowOpacity: 2,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '900',
                lineHeight: 25,
                marginTop: 30,
                marginBottom: 15,
                textTransform: 'uppercase',
                color: 'black',
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
              }}>
              Contact US Updates
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 25,
                marginTop: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Address : -
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 25,
                marginTop: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Cell-Phone : 6589451236
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 25,
                marginTop: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Email : tp@email.com
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: '900',
                lineHeight: 25,
                marginTop: 30,
                marginBottom: 15,
                textTransform: 'uppercase',
                color: 'black',
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
              }}>
              Email Newsletters
            </Text>
            <TextInput
              style={{ elevation: 1, padding: 15 }}
              placeholder="Email"
            />
            <View style={{ width: 90, marginTop: 5 }}>
              <Button title="Subscribe" />
            </View>
            <View>
              <Text
                style={{
                  width: '100%',
                  marginTop: 20,
                  fontSize: 17,
                  padding: 15,
                  left: 4,
                }}>
                © MangoIT E-cart 2022. All Rights Reserved.
              </Text>
              <View
                style={{ display: 'flex', flexDirection: 'row', right: -180 }}>
                <Image
                  style={{ width: 50, height: 30 }}
                  source={require('../../../assets/paypalicon.png')}></Image>
                <Image
                  source={require('../../../assets/discovericon.png')}></Image>
                <Image source={require('../../../assets/visaicon.png')}></Image>
                <Image source={require('../../../assets/cardicon.png')}></Image>
              </View>
            </View>
          </View>
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
    marginTop: 25,
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
