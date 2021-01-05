import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainTabNavigator from '../routes/MainTabNavigator';




const HomeScreen = ({navigation}) => {
    return (

      
      
      <MainTabNavigator />

     
        
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      borderBottomColor:'black',
      borderWidth:1, 
      padding: 10, 
      marginBottom: 5,
      marginTop: 5
    },
  });
  