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

import { getCategoriesApi } from '../../../api/auth';
import MyTabs from '../../../components/Bottomnavigation';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(Select);
  const [categoryList, setCategoryList] = useState([]);
  const [onClick, setOnClick] = useState(false);
  // console.log('Data', categoryList);

  useEffect(() => {
    getCategoriesApi().then(result => {
      setCategoryList(result?.result?.data?.rows);
    });
  }, []);

  const Select = 'Apparels';
  const ab = categoryList.filter(val => val && val.parentId === null);

  const parIdNotNull = categoryList
    .filter(val => val && val.parentId !== null)
    .map(val => val.categoryTranslations).flat()
    .map(val => val.name)

  const firstFive = parIdNotNull.slice(0, 12);

  const catData = ab
    .map(val => val.categoryTranslations)
    .flat()
    .map(newdata => newdata.name);


  const handlePress = () => {
     setOnClick(true)
  }

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
          <TouchableOpacity>
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
          data={catData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity onPress={handlePress}
                  style={[Select ? styles.selectedItemContainer : {}]}>
                  <Text
                    style={[
                      styles.text,
                      selectedCategory ? styles.selectedItemContainer : {},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </>
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

// seeData.map((item) => (
//   <FlatList
//     data={item}
//     renderItem={({ item }) => {
//       console.log("data", item);
//       return (
//           <ul>
//             <li>{item.name}</li>
//           </ul>
//       );
//     }}
//   />
// )

// const categoriArray = [];

// const filteredData = categoryList.map(
//   product => product && product.parentId);
// // console.log("fff", filteredData);

// const parentIds = categoryList.map(item => ({
//   data: {
//     parentId: item.parentId,
//     id: item.id
//   },
// }));

// console.log("pppp",parentIds);

//   const newData = parentIds.map((item, index) => ({
//     [`data${index + 1}`]: item.data
//   }));
//  console.log("newnewe", newData);

// const category = categoryList.map(res =>(res.categoryTranslations)).flat()
// console.log("rerere", category);

// const parentIdsSet = new Set(parentIds);
// const parentIds = categoryList.reduce((result, item) => {
//   if (!parentIdsSet.has(item.parentId)) {
//     parentIdsSet.add(item.parentId);
//     result.push({
//       data: {
//         parentId: item.parentId,
//         id: item.id
//       }
//     });
//   }
//   return result;
// }, []);
// console.log("afafaf", parentIds);

// console.log("pppp",parentIdsSet);
// const cateArr = [];
// console.log('newArray', cateArr);

// const getData = categoryList.map(item => ({
//   parent: item.parentId,
//   id: item.id,
// }));

// const fetchId = getData
//   .filter(item => item.parent === null)
//   .map(item => item.id);
// console.log('newId', fetchId);

// const getName = fetchId.map(id => {
//   const category = Object.values(categoryList).find(product => {
//     return (
//       product.categoryTranslations &&
//       product.categoryTranslations.some(
//         translation => translation.categoryId === id,
//       )
//     );
//   });
//   return {
//     id: id,
//     name:
//       category && category.categoryTranslations
//         ? category.categoryTranslations[0].name
//         : null,
//   };
// });
// console.log("ssddsdsd", getName);

// console.log("dsdsf", getData);
// const cateData = categoryList.map(item => item.categoryTranslations)
//   .flat()
//   .map((item) => {
//     if (item.categoryId && getData.id == 72 ) {
//       cateArr = item
//       console.log("aaaaaaa",cateArr);
//     }
//     return item
//   }
//   )
// console.log("cateData", cateData);

// ------------ Get the parentId

//---- Seperated the parentId in two variables Null and Numbers
// const nullValues = [];
// const numberValues = [];

// getData.forEach(value => {
//   if (value.parent === null) {
//     nullValues.push(value);
//   } else {
//     numberValues.push(value);
//   }
// });

// const data = categoryList.map((item) => {
//   if (item.parentId === null) {
//     if(item.categoryTranslations){
//       return item;
//     }
//   }
// });
// console.log("dssdsf", data);

// const matchingNullValue = nullValues.find((nullValue) => nullValue.parent);
// console.log("dssdsf", matchingNullValue);

//  if(numberValues === 72 && categoryList === 72 ){
//   cateArr =  categoryList
// }

// categoryList.map(item => {
//   const data = item.categoryTranslations
//   // console.log('ssdsadsd', data);
//   for (let i = 0; i < data.length; i++) {
//     const obj = data[i];
//     // console.log("objData",obj);
//     // cateArr.push(obj)
//   }
// });

// const handlePress = () => {
//   setTab(!mytabs);
// };
