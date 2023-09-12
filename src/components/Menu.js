import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  const [value, setValue] = useState(null);

  const data = [
    {label: 'HOME', value: '1'},
    {label: 'PRODUCTS', value: '2'},
    {label: 'APPARELS', value: '3'},
    {label: 'FURNITURE', value: '4'},
    {label: 'APPLIANCES', value: '5'},
    {label: 'MOBILE ACCESSORIES', value: '1'},
    {label: 'VIRTUAL PRODUCTS', value: '2'},
    {label: 'TESTING', value: '3'},
    {label: 'ABOUT US', value: '4'},
    {label: 'CONTACT', value: '5'},
  ];

  return (
    <>
      <View style={{marginTop: 170, backgroundColor: '#333', width: '95%'}}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder="Menu"
          // searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderRightIcon={() => <Icon name="bars" size={24} color="white" />}
        />
      </View>
    </>
  );
};

export default Menu;


const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    // borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    // backgroundColor:'#333'
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 29,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
