import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

export default function RerollButton(props) {
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
        width: 110,
        height: 38,
        padding: 10,
        margin: 0,
        borderWidth: 2,
        borderColor: '#FF6B6B',
        position: "absolute",
        top: 735,
        left: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#FF6B6B',
        fontFamily: 'Roboto Medium',
        fontSize: 12,
    }
}