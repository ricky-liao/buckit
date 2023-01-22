import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font'
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
    useEffect(() => {
        async function loadFont() {
            try {
                await Font.loadAsync({
                    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
                    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
                });
            } catch (error) {
                console.log(error);
                Alert.alert("Error", error);
            }
        }
        loadFont();
    }, []);
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}