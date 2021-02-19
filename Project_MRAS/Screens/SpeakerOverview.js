import React, { useState,useEffect } from 'react';
import { FlatList, ImageBackground, SafeAreaView, TouchableHighlight, TouchableOpacity, Text, Alert } from 'react-native';
import Card from "../Components/Card";
import CardDeleteAction from '../Components/CardDeleteAction';
import styles from "../Components/styles";
import Screen from './Screen';
import { useNavigation } from '@react-navigation/native';







function ViewImageScreen(props) {

    const navigation = useNavigation();



    const [speakers, setSpeakers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isNotOk, setNotOk] = useState(true);
    const [data, setData] = useState([]);

    const handleDelete = speaker => {
        setSpeakers(speakers.filter(s => s.id !== speaker.id));
    }

    const deleteAbfrage = speaker => {
        Alert.alert("Delete", "Wollen Sie " + speaker.title + " wirklich entfernen?", [
            {text: "Ja", onPress: () => handleDelete(speaker)},
            {text: "Nein"}
            ])
    }
    




    
    
  
     
  
  
    useEffect(() => getSpeaker(), []);



    const getSpeaker=()=>{
        fetch('http://schuessling.com:3000/api/v1/speaker', {
        method: 'GET',
     
        headers: {
          'Authorization': "Bearer "+props.userInfo.access_token
        }

      
      })

      .then((response) => response.json())
      .then((json) => checkData(json))
      .catch((error) => console.error(error))
      .finally(()=>setLoading(false))
    }

      function checkData (jsonObject){
          try{
              
    
        if(jsonObject.code != null) 
        {
            setNotOk(true);
            setData(jsonObject);
        }else{
            setNotOk(false);
            setSpeakers(jsonObject.speakers);

    
    
        }
          }catch(e){
              console.log(e);
          }

           
      
    
    }





    return (

        
        <ImageBackground blurRadius={12} style={styles.background} source={require("../assets/hintergrund.jpg")}>
            <Screen style={{padding: 20, paddingTop: 40}}>
            {isLoading ? <Text>Loading...</Text> :
            
            (

                

                

                <FlatList 
                    data={speakers}
                    keyExtractor={speaker => speaker.id.toString()}
                    renderItem={({item}) => (
                        <Card 
                        name = {item.name} 
                        description = {item.description} 
                            room = {item.room_id} 
                            onPress={() => navigation.navigate("SpeakerDetails")}
                            renderRightActions={() => (<CardDeleteAction onPress={() => deleteAbfrage(item)}/>)}
                        />
                    )
                }
                refreshing={refreshing}
                onRefresh={() =>
                   getSpeaker()
                }
            />
            )}
            </Screen>
        </ImageBackground>
        
    );
}

export default ViewImageScreen;


