import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ApiLogin = (props) => {

    


  const [isLoading, setLoading] = useState(true);
  const [isNotOk, setNotOk] = useState(true);
  const [data, setData] = useState([]);

   


  useEffect(() => {

    fetch('http://schuessling.com:3000/api/v1/user/login', {
        method: 'POST',
     
        //del
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            
            "username": props.route.params.UserDetail.userName,
            "password": props.route.params.UserDetail.password,
            "device_id": "<strfjfdlkjfdkjfjlkdlkjing>"
        })
      })

      .then((response) => response.json())
      .then((json) => checkData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

   
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : (isNotOk ? ( props.navigation.navigate("Login")) : (props.navigation.navigate("Home",{userData: data})))} 
    </View>
  );

  function checkData  (jsonObject){

    //console.log(jsonObject);

    if(jsonObject.code != null) 
    {
        setNotOk(true);
        setData(jsonObject);
    }else{
        setNotOk(false);
        setData(jsonObject);
       // storeUserData(jsonObject);


    }
       
  

}

};

const storeUserData = async (userObject) =>{
  try {
    const jsonValue = JSON.stringify(userObject)
    await AsyncStorage.setItem('userKey', jsonValue);
  } catch (e) {
    console.log(e);
  }
} 
 