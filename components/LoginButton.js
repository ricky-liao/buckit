import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

export default function LoginButton(props) {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={() => props.navigation.navigate('Profile')}>
            <Text style={[buttonStyles.buttonText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = {
    button: {
        backgroundColor: '#FF6B6B',
        borderRadius: 63,
        width: 100,
        height: 40,
        padding: 10,
        paddingHorizontal: 0,
        margin: 0,
        position: "absolute",
        top: "87%",
        left: 167,
        alignItems: "center",
        justifyContent: "center",
    },
        button: {
        backgroundColor: '#FF6B6B',
        borderRadius: 63,
        width: 100,
        height: 40,
        padding: 10,
        paddingHorizontal: 0,
        margin: 0,
        position: "absolute",
        top: "87%",
        left: 167,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
    }
}