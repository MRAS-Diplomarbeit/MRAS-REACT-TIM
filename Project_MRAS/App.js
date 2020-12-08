import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './Navigation/LoginNavigator';






export default function App() {
  return (
    <NavigationContainer>
      
      <LoginNavigator />

    </NavigationContainer>
  );
}