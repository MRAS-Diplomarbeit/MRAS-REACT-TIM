import * as React from 'react';
import { StyleSheet,Image, SafeAreaView, Text, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from "../Components/styles";
import AppButton from '../Components/Buttons/AppButton';
import { useState } from 'react';
//import DeviceInfo from 'react-native-device-info';


//const uniqueId = DeviceInfo.getUniqueID();


const Register = ({navigation}) => {
  const [userName,setUsername] = useState("userName");
  const [userPassword,setUserPassword] = useState("userPassword");
  const [userPasswordConfirmation,setUserPasswordConfirmation] = useState("userPasswordConfirmation");
 
 const user={
   userName: userName,
   password: userPassword,
   passwordConfirmation: userPasswordConfirmation
  }

    return(
    <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund2.jpg")}>
    

      <SafeAreaView style={styles.container}>

        <Text style={styles.frontpageheading}>Multiroom Audio Setup</Text>
      
        <Text>Username</Text>
        <TextInput style={styles.textInput} onChangeText={text=>setUsername(text)}/>
        <Text>Password</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={text=>setUserPassword(text)}/>  
        <Text>Password Confirmation</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={text=>setUserPasswordConfirmation(text)}/>
      
        <AppButton title="Register" onPress={() => tryToRegister(navigation,user)}/>


      </SafeAreaView>
    </ImageBackground>
    );
    
  
}

export default Register;

function tryToRegister(navigation,user) {


if (user.userName==""||user.userName==null) {
  alert("Please fill in all fields!");
}
else{
  if(user.password==user.passwordConfirmation){
    navigation.navigate("ApiRegister",{UserDetail: user});
  }
  else
  {
    alert("Passwords do not match!");
  }
}

  

  
 
} 


