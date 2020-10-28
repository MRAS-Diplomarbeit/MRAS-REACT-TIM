import * as React from 'react';
import { Component } from 'react';
import { StyleSheet,Button, View, Text,TextInput } from 'react-native';


class User extends Component{
  state = {
    userName: '',
    password: ''
  }

  handleUserName = (text) => {
    alert(text);
    this.setState({userName: text });
  }
  handlePassword = (text) => {
    this.setState({password: text });
  }
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
 }
}


   function Login ({navigation}) {


    return (
        <View style={{ padding: 30}}>
          <Text>Login Screen</Text>
          <TextInput onChangeText = {User.handleUserName} placeholder="Username" style={styles.container}/>
          <TextInput onChangeText = {User.handlePassword} placeholder="Password" style={styles.container}/>
          <Button title="Login" onPress = {() => User.login(User.state.email, User.state.password)}/>
          <Button title="Register" onPress={() => navigation.navigate('Register')}/>
        </View>
      );

      
}


const styles = StyleSheet.create({
    container: {
      borderBottomColor:'black',
      borderWidth:1, 
      padding: 10, 
      marginBottom: 5,
      marginTop: 5
    },
  });

export default Login;









