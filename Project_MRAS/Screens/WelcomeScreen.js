import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Platform, Alert, ImageBackground} from 'react-native';
//import AppText from '../Components/FrontPageHeading';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from '../Components/Buttons/AppButton';
import FrontPageHeading from '../Components/FrontPageHeading';
import styles from "../Components/styles";


function WelcomeScreen(props) {
    //const handlePress = () => console.log("Text pressed"); <MaterialCommunityIcons name = "email" size={60} color="dodgerblue"/>
  return (
    <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund.jpg")}>
    <SafeAreaView style={styles.container}>
      
      <FrontPageHeading>Multiroom Audio Software</FrontPageHeading>
      <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
      <FrontPageHeading>MAS</FrontPageHeading>

    
    </SafeAreaView>
    </ImageBackground>

  );
}

export default WelcomeScreen;
