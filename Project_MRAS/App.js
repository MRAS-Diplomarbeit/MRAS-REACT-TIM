import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './routes/LoginNavigator';
import SpeakerDetails from './Screens/SpeakerDetails';
import SpeakerOverview from './Screens/SpeakerOverview';
import WelcomeScreen from './Screens/WelcomeScreen'









export default function App() {
  return (
    <NavigationContainer>
      
      <LoginNavigator />

   </NavigationContainer>
  );
}