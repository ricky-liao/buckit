import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function SelectButton(props) {
    const [selected, setSelected] = useState(false);
    return (
        <TouchableOpacity style={ selected ? selectButton.button2 : selectButton.button } onPress={() => setSelected(!selected)}>
            <Text style={selected ? selectButton.buttonText2 : selectButton.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const selectButton = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 40,
        padding: 5,
        margin: 5,
        borderWidth: 2,
        borderColor: '#FF6B6B',
    },
    button2: {
        backgroundColor: '#FF6B6B',
        borderRadius: 20,
        height: 40,
        padding: 5,
        margin: 5,
        borderWidth: 2,
        borderColor: '#FF6B6B',
    },
    buttonText: {
        color: '#FF6B6B',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
        margin: 4,
    },
    buttonText2: {
        color: 'white',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
        margin: 4,
    },
});


