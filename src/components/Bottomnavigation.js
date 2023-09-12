import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bag from './Bag';
import Shop from './Shop';
import Profile from './Profile';
import Favourite from './Favourite';

const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator sceneContainerStyle={{ position: 'absolute', bottom: 0 }}>
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="shoppingcart" size={35} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => <Icon name="user" size={35} color="black" />,
                }}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Icon name="shoppingcart" size={35} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Profile',
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
        </Tab.Navigator>
    );
}

export default MyTabs;
