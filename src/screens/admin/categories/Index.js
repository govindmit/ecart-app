import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import MyTabs from '../../../components/Bottomnavigation';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(Select);

  const [categoryList, setCategoryList] = useState([]);
  console.log('Data', categoryList);

  const Data = ['Women', 'Men', 'Kids'];
  const Select = 'Women';

  const handleSearch = async () => {
    try {
      const response = await fetch(
        'http://103.127.29.85:3006/api/user-product/get-categories',
      );
      const data = await response.json();
      setCategoryList(
        data.result?.data?.rows.map(item => item.categoryTranslations).flat()
      );
    } catch (error) {
      console.error('err', error);
    }
  };

  return (
    <>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Icon
            style={{ marginLeft: 13 }}
            name="arrow-back-ios"
            color="black"
            size={40}
          />
          <Text style={{ marginTop: 5, fontSize: 25, color: 'black' }}>
            Categories
          </Text>
          <TouchableOpacity onPress={handleSearch}>
            <Icon
              style={{ marginRight: 10 }}
              name="search"
              color="black"
              size={40}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          style={[styles.flatlist]}
          horizontal
          data={Data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[Select ? styles.selectedItemContainer : {}]}>
                <Text
                  style={[
                    styles.text,
                    selectedCategory ? styles.selectedItemContainer : {},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <View style={[styles.saleView]}>
          <Text style={[styles.saleText]}>SUMMER SALES</Text>
          <Text style={[styles.discount]}>Up to 50% off</Text>
        </View>

        <View style={[styles.card, styles.elevation, styles.similarView]}>
          <View>
            <Text style={styles.heading}>New</Text>
          </View>
          <View style={[styles.imgView]}>
            <Image
              style={[styles.img]}
              source={require('../../../assets/image1.png')}
            />
          </View>
        </View>

        <View style={[styles.card, styles.elevation, styles.similarView]}>
          <View>
            <Text style={styles.heading}>Clothes</Text>
          </View>
          <View style={[styles.imgView]}>
            <Image
              style={[styles.img]}
              source={require('../../../assets/image.png')}
            />
          </View>
        </View>

        <View style={[styles.card, styles.elevation, styles.similarView]}>
          <View>
            <Text style={styles.heading}>Shoes</Text>
          </View>
          <View style={[styles.imgView]}>
            <Image
              style={[styles.img]}
              source={require('../../../assets/image2.png')}
            />
          </View>
        </View>

        <View style={[styles.card, styles.elevation, styles.similarView]}>
          <View>
            <Text style={styles.heading}>Accesories</Text>
          </View>
          <View style={[styles.imgView]}>
            <Image
              style={[styles.img]}
              source={require('../../../assets/image3.png')}
            />
          </View>
        </View>
        <MyTabs />
      </ScrollView>
    </>
  );
};
export default Categories;

const styles = StyleSheet.create({
  flatlist: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxHeight: 110,
  },
  text: {
    fontSize: 25,
    padding: 30,
    marginLeft: 5,
    color: 'black',
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: '#DB3022',
    borderBottomWidth: 3,
    margin: 2.5,
  },
  saleView: {
    width: '80%',
    height: 150,
    borderRadius: 15,
    marginHorizontal: 30,
    marginTop: 15,
    backgroundColor: '#DB3022',
  },
  saleText: {
    color: 'white',
    padding: 50,
    fontSize: 28,
  },
  discount: {
    fontSize: 25,
    color: 'white',
    top: -50,
    left: 75,
  },
  similarView: {
    width: '80%',
    height: 150,
    borderRadius: 15,
    marginHorizontal: 30,
    marginTop: 15,
    elevation: 2,
    shadowColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    fontFamily: 'Metropolis',
    top: 20,
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  img: {
    width: '145%',
    height: '112%',
    borderRadius: 15,
  },
  imgView: {
    width: '50%',
    marginTop: -60,
    left: 100,
    top: -22.5,
  },
});
