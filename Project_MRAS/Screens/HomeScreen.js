import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const HomeScreen = ({navigation}) => {
    return (
        <View style={{ padding: 30}}>
          <Text>Home Screen</Text>
        </View>
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      borderBottomColor:'black',
      borderWidth:1, 
      padding: 10, 
      marginBottom: 5,
      marginTop: 5
    },
  });
  