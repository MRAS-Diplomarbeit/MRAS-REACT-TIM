import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';


export const ApiRegister = (props) => {

    


  const [isLoading, setLoading] = useState(true);
  const [isNotOk, setNotOk] = useState(true);
  const [data, setData] = useState([]);
   


  useEffect(() => {
    console.log(props.route.params.UserDetail.userName);
    fetch('http://schuessling.com:3000/api/v1/user/register', {
        method: 'POST',
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
      {isLoading ? <Text>Loading...</Text> : (isNotOk ? (props.navigation.navigate("Register")) : (props.navigation.navigate("Login")))} 
    </View>
  );

  function checkData  (jsonObject){

    console.log(jsonObject);

    if(jsonObject.code != null) 
    {
        setNotOk(true);
        setData(jsonObject);
    }else{
        setNotOk(false);
        setData(jsonObject);
    }
       
  

}


};

