import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './routes/LoginNavigator';
import LoadService from './services/LoadService';
import { StyleSheet, SafeAreaView, Platform, View, Text, ImageBackground } from 'react-native';



export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch('http://schuessling.com:3000/api/v1/user')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  

  render() {

    const { error, isLoaded, users } = this.state;

    if (error) {
      return (
        <Text className="col">
          Error: {error.message}
        </Text>
      );
    } else if (!isLoaded) {
      return (
        <Text className="col">
          Loading...
        </Text>
      );
    } else {
      return (
        <Text className="col">
         Stuff: {users.map(user=> <Text>{user.name}</Text>)}
        </Text>
      );
    }
  }
}



/*
<NavigationContainer>
        
         <LoginNavigator/>
        
      </NavigationContainer>
*/