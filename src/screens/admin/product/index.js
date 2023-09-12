import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Footer from '../../../components/Footer';

const Product = () => {
  return (
    <>
      <ScrollView>
        <View style={{ width: '100%', marginTop: 70 }}>
          <Text
            style={{
              position: 'absolute',
              zIndex: 1,
              color: 'white',
              fontSize: 40,
              fontWeight: '600',
              padding: 90,
              left: 10,
            }}>
            PRODUCT
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              display: 'flex',
              zIndex: 1,
              flexDirection: 'row',
              marginTop: 180,
            }}>
            <Text style={{ fontSize: 30, color: 'white', paddingHorizontal: 13 }}>
              Home
            </Text>
            <Text style={{ fontSize: 30, color: 'white', paddingHorizontal: 13 }}>
              /
            </Text>
            <Text style={{ fontSize: 30, color: 'white' }}>Product</Text>
          </TouchableOpacity>
          <Image
            style={{
              width: '100%',
              height: 250,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              opacity: 0.7,
            }}
            source={require('../../../assets/imgproduct.jpg')}
          />
          <View
            style={{
              width: '90%',
              // borderWidth: 1,
              marginTop: 20,
              height: 130,
              shadowOffset: { width: 5, height: 5 },
              shadowRadius: 10,
              shadowOpacity: 10,
              elevation: 2,
              left: 20,
            }}>
            <TextInput
              style={{
                left: 20,
                fontSize: 20,
                top: 10,
              }}
              placeholder="Search"
            />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

export default Product;
