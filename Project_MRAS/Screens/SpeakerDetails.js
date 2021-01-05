import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, Platform, View, Text, ImageBackground } from 'react-native';
import publicStyles from "../Components/styles";
import Subheading from "../Components/Subheading";

function SpeakerDetails(props) {
    return (
        //<ImageBackground blurRadius={10} style={styles.background} source={require("../assets/hintergrund2.jpg")}>
        <SafeAreaView style={styles.overall}>
            <View style={styles.row}>
                <MaterialIcons name = "speaker" size={105} style={styles.image}></MaterialIcons>
                <View>
                    <Text numberOfLines={1} style={styles.titleText}>Rockster Air</Text>
                    <Subheading>Bens Rockster Air</Subheading>
                </View>
            </View>

            <View style={styles.desc}>
                <View style={styles.row}>
                    <Text style={styles.settingBez}>Raum: </Text>
                    <Text style={styles.settingVal}>Wohnzimmer</Text>
                </View>
                <View>

                </View>
            </View>
        </SafeAreaView>
        //</ImageBackground>
    );
}

const styles = StyleSheet.create({
    desc:{
        paddingTop: 30,
        paddingLeft: 25
    },
    titleText:{
        fontSize : 40,
        fontWeight : "bold",
        color: "teal"
    },

    settingBez:{
        fontSize: 30,
        fontWeight: "bold"
    },

    settingVal:{
        fontSize: 25,
        fontWeight: "bold",
        color: "tomato",
        paddingLeft: 15
    },

    overall:{
        paddingTop: Platform.OS === "android" ? 40 : 0
    },

    row:{
        alignItems: "center",
        flexDirection: "row"
    },
    background:{
        flex: 1
    }

})

export default SpeakerDetails;