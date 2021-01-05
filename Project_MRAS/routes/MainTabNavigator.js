import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import WelcomeScreen from '../Screens/WelcomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SpeakerNavigator from './SpeakerDetailsNavigator';




const Tab = createBottomTabNavigator();



const TabNavigator = () => (
  <Tab.Navigator
  initialRouteName="Home"
  tabBarOptions={{
    activeBackgroundColor:"#2ECC71",
    activeTintColor: "white",
    inactiveBackgroundColor: "#eee",
    inactiveTintColor: "black",
    headerShown: false,
    
  }}
>
    
    
    <Tab.Screen name="Profile" 
    component={ProfileScreen} 
    options={{
      tabBarIcon: ({size, color}) => <AntDesign name="user" size={size} color={color} />,
      headerShown: false,
    }}/>
    <Tab.Screen name="Home" 
    component={WelcomeScreen}
    options={{
      tabBarIcon: ({size, color}) => <AntDesign name="home" size={size} color={color} />,
      headerShown: false,

    }}/>
    <Tab.Screen name="Speaker" 
    component={SpeakerNavigator} 
    options={{
      tabBarIcon: ({size, color}) => <AntDesign name="sound" size={size} color={color} />,
      headerShown: false,
    }}/>
  </Tab.Navigator>
)



export default TabNavigator;