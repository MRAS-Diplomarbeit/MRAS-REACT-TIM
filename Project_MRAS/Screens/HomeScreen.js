import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainTabNavigator from '../routes/MainTabNavigator';
import React, { useEffect, useState } from 'react';








const HomeScreen = (props) => {




    return (
      <MainTabNavigator userInfo={props.route.params.userData}/>
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
  