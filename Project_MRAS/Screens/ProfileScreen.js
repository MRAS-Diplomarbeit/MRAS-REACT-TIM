import React, { useEffect, useState } from 'react';
import {Image, SafeAreaView,ImageBackground,Text} from 'react-native';
//import AppText from '../Components/FrontPageHeading';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from '../Components/Buttons/AppButton';
import FrontPageHeading from '../Components/FrontPageHeading';
import styles from "../Components/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfileScreen = (props) => {
    
const [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);
 
 
   
  

  useEffect(() => {
    
    getData().finally(() => setLoading(false));
    
  }, []);


 const getData = async () => {
  try { 
    const jsonValue = await AsyncStorage.getItem('userKey');
    const userProfile = JSON.parse(jsonValue);
    setData(userProfile);
    
  } catch(e) {
    // error reading value
  }
}
    

  return (
    <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund.jpg")}>
    


    {isLoading ? <Text>Loading...</Text> : (

      <SafeAreaView style={styles.container}>
      <FrontPageHeading> Welcome User </FrontPageHeading>
      <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
      <FrontPageHeading> Welcome back: {data.user.username}</FrontPageHeading>
      <FrontPageHeading> This is your Access_Token: </FrontPageHeading>
      <Text> {data.access_token} </Text>


{console.log(data)}



</SafeAreaView>
      
    ) } 
     
    </ImageBackground>



  );

 

  
};





export default ProfileScreen;




/*

class ProfileScreen extends Component{

  state ={
    user: []
  }

  constructor(props){
    super(props);
    this.getData();
  }

   getData = async () => {
    try { 
      const jsonValue = await AsyncStorage.getItem('userKey');
      const userProfile = JSON.parse(jsonValue);
      this.setState({user: userProfile})
      
    } catch(e) {
      // error reading value
    }
  } 

  render(){
    return(
      <ImageBackground blurRadius={4} style={styles.background} source={require("../assets/hintergrund.jpg")}>
      <SafeAreaView style={styles.container}>
        
        <FrontPageHeading>Welcome User</FrontPageHeading>
        <Image fadeDuration={2500} source={require('../assets/logo2.png')}/>
        <FrontPageHeading>User: {this.state.user}</FrontPageHeading>
        
  
      
      </SafeAreaView>
      </ImageBackground>
    );
  }

}

*/