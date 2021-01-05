import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import SpeakerDetails from '../Screens/SpeakerDetails';
import SpeakerOverview from '../Screens/SpeakerOverview';



const Stack = createStackNavigator();

const SpeakerNavigator = () => (

<Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SpeakerOverview" component={SpeakerOverview}/>
    <Stack.Screen name="SpeakerDetails" component={SpeakerDetails} />
    
</Stack.Navigator>

);

export default SpeakerNavigator;   