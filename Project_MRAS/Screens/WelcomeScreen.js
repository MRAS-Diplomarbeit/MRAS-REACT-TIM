import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Platform, Alert, ImageBackground} from 'react-native';
import AppText from '../components/FrontPageHeading';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from '../components/Button/AppButton';
import FrontPageHeading from '../components/FrontPageHeading';
import styles from "../components/styles";


function WelcomeScreen(props) {
    //const handlePress = () => console.log("Text pressed"); <MaterialCommunityIcons name = "email" size={60} color="dodgerblue"/>
  return (
    <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund.jpg")}>
    <SafeAreaView style={styles.container}>
      
      <FrontPageHeading>Multiroom Audio Software</FrontPageHeading>
      <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
      <FrontPageHeading>MAS</FrontPageHeading>


      <View style={styles.loginButton}>
      <View style={{right: 10}}><AppButton color = "secondary" title="Login" onPress={() => console.log("Login")}/></View>
      <View style={{left: 10}}><AppButton title="Register" onPress={() => console.log("Register")}/></View>
      </View>
    
    </SafeAreaView>
    </ImageBackground>

  );
}

export default WelcomeScreen;