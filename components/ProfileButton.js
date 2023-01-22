import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileButton({text, navigation}) {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={() => navigation.navigate('Profile')}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#FF6B6B', '#FF9776']}
                style={{width: 340, 
                        height: 100, 
                        padding: 10, 
                        margin: 10, 
                        position: "absolute",
                        top: 330,
                        left: 35,
                        borderRadius: 47.5,}}
            >   
                <View style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "#FF6B6B",
                    backgroundColor: 'white',
                    position: "relative",
                    top: -5,
                    left: -4,
                }} />
                <Text style={[buttonStyles.firstText]}>{text}</Text>
                <Text style={[buttonStyles.secondText]}>{"1/6 Steps Completed"}</Text>
                <Text style= {[buttonStyles.thirdText]}>{"Started on 02/14/2023"}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const buttonStyles = {
    firstText: {
        color: 'white',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
        position: "relative",
        top: -75,
        left: 95,
    },
    secondText: {
        color:'white',
        fontFamily: 'Roboto',
        fontSize: 12,
        position: "relative",
        top:-75,
        left: 95,
    },
    thirdText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 12,
        position: "relative",
        top: -75,
        left: 95,
    }
}