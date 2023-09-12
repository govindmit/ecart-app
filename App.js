import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login';
import Index from './src/screens/admin/home';
import Product from './src/screens/admin/product';
import MyTabs from './src/components/Bottomnavigation';
import ForgotPassword from './src/screens/forgotpassword';
import Categories from './src/screens/admin/categories/Index';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
          options={{headerShown: false}}
          name="Tab"
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen options={{headerShown: false}} name="Forgotpassword" component={ForgotPassword} />
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Index} />
        <Stack.Screen options={{headerShown: false}} name="Product" component={Product}  />
        <Stack.Screen options={{headerShown: false}} name="Categories" component={Categories}  />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
