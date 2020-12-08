import * as React from 'react';
import { StyleSheet,Image, SafeAreaView, Text, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from "../Components/styles";
import AppButton from '../Components/Buttons/AppButton';
import { useState } from 'react';
import DeviceInfo from 'react-native-device-info';






const Register = ({navigation}) => {

    const [userName,setUsername] = useState("userName");
    const [userPassword,setuserPassword] = useState("userPassword");
    const [userPasswordConf,setuserPasswordConf] = useState("userPasswordConf");


    return(
    <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/hintergrund2.jpg")}>
    

      <SafeAreaView style={styles.container}>

        <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
      
      
        <TextInput style={styles.textInput} placeholder="Username" onChangeText={text=>setUsername(text)}/>
        <TextInput style={styles.textInput} placeholder="Password" onChangeText={text=>setuserPassword(text)}/>  
        <TextInput style={styles.textInput} placeholder="Confirm Password" onChangeText={text=>setuserPasswordConf(text)}/>
     
      
        <AppButton title="Register" onPress={() => tryToRegister(navigation,)}/>


      </SafeAreaView>
    </ImageBackground>
    );
    
  
}

export default Register;

const tryToRegister = (navigation,userName,userPassword,userPasswordConf) =>{
  if(userName!="Test")
  {
    if(userPassword==userPasswordConf)
    {
      navigation.navigate("Home");
    }
  
  }
  else
  {
    alert(DeviceInfo.getMacAddress());
  }
}
