import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

export default function SignUpButton(props) {
    return (
        <TouchableOpacity style={buttonStyles.button}>
            <Text style={[buttonStyles.buttonText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = {
    button: {
        backgroundColor: 'white',
        borderRadius: 63,
        width: 120,
        height: 40,
        padding: 5,
        margin: 0,
        borderWidth: 2,
        borderColor: '#FF6B6B',
        position: "absolute",
        top: 700,
        left: 34,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#FF6B6B',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
    }
}