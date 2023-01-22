import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.text}>Welcome to Buckit {"\n"}
                                       the AI-driven activity planner</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
                style={styles.loginButton}
                titleStyle={styles.buttonText}
            />
            <Button
                title="Go to Sign Up"
                onPress={() => navigation.navigate('SignUp')}
                style={styles.signUpButton}
                titleStyle={styles.buttonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },

    title: {
        color: "green",
        fontSize: 48,
        position: "absolute",
        top: 277,
        left: 40,
        transform: [{translateX:0}, {translateY:0}]
    },

    text: {
        color: "green",
        fontSize: 24,
        position: "absolute",
        top: 344,
        left: 40,
        transform: [{translateX:0}, {translateY:0}]
    },

    loginButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 50,
        padding: 10,
        margin: 10,
        position: "absolute",
        bottom: 0,
        left: 50,
    },

    signUpButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 50,
        padding: 10,
        margin: 10,
        position: "absolute",
        bottom: 200,
        left: 100,
    },

    buttonText: {
        color: 'white',
    },
});