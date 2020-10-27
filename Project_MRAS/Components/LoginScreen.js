import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const Login = props => {
    return (
        <View style={{ padding: 30}}>
          <Text>Login Screen</Text>
          <TextInput placeholder="Username" style={styles.container}/>
          <TextInput placeholder="Password" style={styles.container}/>
          <Button title="Login"onPress={() => props.navigation.navigate('Home') }/>
          <Button title="Register"onPress={() => props.navigation.navigate('Register')}/>
        </View>
      );
}

export default Login;

const styles = StyleSheet.create({
    container: {
      borderBottomColor:'black',
      borderWidth:1, 
      padding: 10, 
      marginBottom: 5,
      marginTop: 5
    },
  });