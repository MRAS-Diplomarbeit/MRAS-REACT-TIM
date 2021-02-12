import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './routes/LoginNavigator';
import LoadService from './services/LoadService';
import { StyleSheet, SafeAreaView, Platform, View, Text, ImageBackground } from 'react-native';




export default class App extends React.Component{



  render() {
    
    return(
      <NavigationContainer>
        
         <LoginNavigator/>
        
      </NavigationContainer>
    );

    

  }
}


/*
    
*/

