import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation}/>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation}/>
  );
}

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}