import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const Register = props => {
    return (
        <View style={{ padding: 30}}>
          <Text>Register Screen</Text>
          <TextInput placeholder="Username" style={styles.container}/>
          <TextInput placeholder="Password" style={styles.container}/>
          <TextInput placeholder="Confirm Password" style={styles.container}/>
    
          <Button title="Register"onPress={() => navigation.navigate('Home')}/>
        </View>
      );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      borderBottomColor:'black',
      borderWidth:1, 
      padding: 10, 
      marginBottom: 5,
      marginTop: 5
    },
  });