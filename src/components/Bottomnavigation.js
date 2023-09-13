import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bag from './Bag';
import Shop from './Shop';
import Home from './Home';
import Profile from './Profile';
import Favourite from './Favourite';

const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator sceneContainerStyle={{ position: 'absolute', bottom: 0 }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon
                            onPress={() => navigation.navigate('Dashboard')}
                            name="home"
                            size={35}
                            color="black"
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: () => (
                        <Icon name="shoppingcart" size={35} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={{
                    tabBarLabel: 'Bag',
                    tabBarIcon: () => (
                        <Feather name="shopping-bag" size={35} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: () => (
                        <MaterialIcons name="favorite-border" size={35} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => <FontAwesome name="user-o" size={35} color="black" />,
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
