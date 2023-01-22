import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

export default function AddButton(props) {
    return (
        <TouchableOpacity style={buttonStyles.button}>
            <Text style={[buttonStyles.buttonText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = {
    button: {
        backgroundColor: '#FF6B6B',
        borderRadius: 63,
        width: 95,
        height: 38,
        padding: 5,
        margin: 0,
        position: "absolute",
        top: 735,
        left: 280,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 63,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 63,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Roboto Medium',
        fontSize: 12,
    }
}