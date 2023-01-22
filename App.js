import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import SignUp from './components/signUp';
import Login from './components/Login';
import Prompt from './components/Prompt';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation}/>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <SignUp navigation={navigation}/>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation}/>
  );
}

function PromptScreen({ navigation }) {
    return (
      <Prompt navigation={navigation}/>
    );
  }

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Prompt" component={PromptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}