import * as React from 'react';
import { Component } from 'react';
import { StyleSheet,Button, View, Text,TextInput,ImageBackground,Image,SafeAreaView } from 'react-native';
import styles from "../Components/styles";






   function Login ({navigation}) {


    return (
          <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund.jpg")}>

            <SafeAreaView style={styles.container}>
      
              <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
              <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
              <Text style={styles.frontpageheading}>MRAS</Text>


    
            </SafeAreaView>
          
          
          </ImageBackground>

      );

      
}



export default Login;









