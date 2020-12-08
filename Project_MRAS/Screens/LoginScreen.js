import * as React from 'react';
import { Component } from 'react';
import { StyleSheet,Button, View, Text,TextInput,ImageBackground,Image,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../Components/Buttons/AppButton';
import styles from "../Components/styles";






   const Login = ({navigation}) => (

    
          <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/hintergrund.jpg")}>
            

            <SafeAreaView style={styles.container}>
      
              <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
              <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
              <Text style={styles.frontpageheading}>MRAS</Text>
              <TextInput style={styles.textInput} placeholder="Username"/>
              <TextInput style={styles.textInput} placeholder="Password"/>  

             

              <AppButton color = "secondary" title="Login" onPress={() => navigation.navigate("Home")}/>
              
              
              <AppButton title="Register" onPress={() => navigation.navigate("Register")}/>

    
            </SafeAreaView>

            
          
          
          </ImageBackground>
   );



export default Login;









