import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/LoginScreen';
import Register from './Components/RegisterScreen';
import Home from './Components/HomeScreen';


function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation}/>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <Register props={navigation}/>
  );
}

function HomeScreen({ navigation })
{
  return(
    <Home props={navigation}/>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    borderBottomColor:'black',
    borderWidth:1, 
    padding: 10, 
    marginBottom: 5,
    marginTop: 5
  },
});

