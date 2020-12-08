import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';



const Stack = createStackNavigator();

const LoginNavigator = () => (

<Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen}/>
</Stack.Navigator>

);

export default LoginNavigator;   

