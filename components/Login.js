import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Login ({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Go to Prompt"
            onPress={() => navigation.navigate('Prompt')}
          />
        </View>
      );
}