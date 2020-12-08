import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Register = ({navigation}) => (

    
  <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/hintergrund2.jpg")}>
    

    <SafeAreaView style={styles.container}>

      <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
      <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
      <Text style={styles.frontpageheading}>MRAS</Text>
      <TextInput style={styles.textInput} placeholder="Username"/>
      <TextInput style={styles.textInput} placeholder="Password"/>  
      <TextInput style={styles.textInput} placeholder="Confirm Password" />
     
      
      <AppButton title="Register" onPress={() => navigation.navigate("Home")}/>


    </SafeAreaView>

    
  
  
  </ImageBackground>
);

export default Register;

