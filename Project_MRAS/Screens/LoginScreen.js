import * as React from 'react';
import { useState } from 'react';
import { StyleSheet,Button, View, Text,TextInput,ImageBackground,Image,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../Components/Buttons/AppButton';
import styles from "../Components/styles";






   const Login = ({navigation}) => {

    const [userName,setUsername] = useState("userName");
    const [userPassword,setuserPassword] = useState("userPassword");

    return(
          <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/hintergrund.jpg")}>
            

            <SafeAreaView style={styles.container}>
      
              <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
              <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
              <Text style={styles.frontpageheading}>MRAS</Text>
              <TextInput style={styles.textInput} placeholder="Username" onChangeText={text=>setUsername(text)}/>
              <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password" onChangeText={text=>setuserPassword(text)}/>  

             

              <AppButton color = "secondary" title="Login" onPress={() => tryToLogin(navigation,userName,userPassword)}/>
              
              
              <AppButton title="Register" onPress={() => navigation.navigate("Register")}/>

    
            </SafeAreaView>

            
          
          
          </ImageBackground>
   );
  }



export default Login;

const tryToLogin = (navigation,userName,userPassword) =>{
  if((userName=="Test")&&(userPassword=="Cisco"))
  {
    navigation.navigate("Home");
  
  }
  else
  {
    alert("Wrong Username or Password");
  }
}












