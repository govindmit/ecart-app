import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login';
import Index from './src/screens/admin/home';
import ForgotPassword from './src/screens/forgotpassword';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
