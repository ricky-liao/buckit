import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Home ({navigation}) {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });
    
    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Text style={styles.title}>Hi,</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontFamily: "Roboto-Regular",
    },
});