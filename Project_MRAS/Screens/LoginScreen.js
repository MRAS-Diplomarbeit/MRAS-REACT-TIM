import * as React from 'react';
import { useState } from 'react';
import { StyleSheet,Button, View, Text,TextInput,ImageBackground,Image,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../Components/Buttons/AppButton';
import styles from "../Components/styles";
import { ApiLogin } from "../services/ApiLogin";





   const Login = ({navigation}) => {

    const [userName,setUsername] = useState("userName");
    const [userPassword,setUserPassword] = useState("userPassword");

   
   const user={
     userName: userName,
     password: userPassword
    }

    return(
          <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/hintergrund.jpg")}>
            

            <SafeAreaView style={styles.container}>
      
              <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
              <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
              <Text style={styles.frontpageheading}>MRAS</Text>

              
              <TextInput style={styles.textInput} placeholder="Username" onChangeText={text=>setUsername(text)}/>
              <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password" onChangeText={text=>setUserPassword(text)}/>  

             

              <AppButton color = "secondary" title="Login" onPress={() => tryToLogin(navigation,user)}/>
              
              
              
              <AppButton title="Register" onPress={() => navigation.navigate("Register")}/>

    
            </SafeAreaView>

            
          
          
          </ImageBackground>
   );
  } 



export default Login;

function tryToLogin(navigation,user) {

  //navigation.navigate("Home");
 navigation.navigate("ApiLogin",{UserDetail: user});

 
} 

















