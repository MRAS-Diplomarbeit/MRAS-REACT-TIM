import React, { useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, TouchableHighlight, TouchableOpacity, View, Alert } from 'react-native';
import Card from "../components/Card";
import CardDeleteAction from '../components/CardDeleteAction';
import styles from "../components/styles";
import Screen from './Screen';

const initSpeakers = [
    {
        id: 1,
        title: "Speaker 1",
        describtion: "Bens Rockster Air",
        room: "Bens Zimmer"
    },
    {
        id: 2,
        title: "Speaker 2",
        describtion: "Jonis Rockster Air",
        room: "Jonis Zimmer"
    },
    {
        id: 3,
        title: "Speaker 3",
        describtion: "Bens Rockster Air",
        room: "Bens Zimmer"
    }
]

function ViewImageScreen(props) {
    const [speakers, setSpeakers] = useState(initSpeakers);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = speaker => {
        setSpeakers(speakers.filter(s => s.id !== speaker.id));
    }

    const deleteAbfrage = speaker => {
        Alert.alert("Delete", "Wollen Sie " + speaker.title + " wirklich entfernen?", [
            {text: "Ja", onPress: () => handleDelete(speaker)},
            {text: "Nein"}
            ])
    }

    return (
        <ImageBackground blurRadius={12} style={styles.background} source={require("../assets/hintergrund.jpg")}>
            <Screen style={{padding: 20, paddingTop: 40}}>
                <FlatList 
                    data={speakers}
                    keyExtractor={speaker => speaker.id.toString()}
                    renderItem={({item}) => (
                        <Card 
                            title = {item.title} 
                            describtion = {item.describtion} 
                            room = {item.room} 
                            onPress={() => console.log()}
                            renderRightActions={() => (<CardDeleteAction onPress={() => deleteAbfrage(item)}/>
                            )}
                        />
                    )
                }
                refreshing={refreshing}
                onRefresh={() =>{
                    setSpeakers([
                        {
                            id: 3,
                            title: "Speaker 3",
                            describtion: "Bens Rockster Air",
                            room: "Bens Zimmer"
                        }
                    ])
                }}
            />
            </Screen>
        </ImageBackground>
    );
}

export default ViewImageScreen;