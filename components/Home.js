import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import SignUpButton from "./SignUpButton";
import LoginButton from "./LoginButton";
import {GradientText} from '../screens/GradientText';

export default function Home ({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{top: "70%", left: 34}}>
                <GradientText text="Hello," style={{fontSize: 48, fontFamily: 'Roboto Bold'}} />
            </View>
            <View>
                <Image style={styles.picture}
                source={require('../assets/buckett.png')} />
            </View>
            <View>
                <Image style={styles.picture2}
                source={require('../assets/gradientBack.png')} />
            </View>
            <Text style={styles.text}>Welcome to <Text style={styles.buck}>Buck</Text><Text style={styles.it}>it</Text>, {"\n"}
                                       the AI-driven activity planner.</Text>
            <SignUpButton title="SIGN UP" />
            <LoginButton title="LOGIN" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    text: {
        color: "black",
        fontSize: 24,
        fontFamily: 'Roboto',
        position: "absolute",
        top: "78%",
        left: 34,
        transform: [{translateX:0}, {translateY:0}]
    },

    picture: {
        width: 320,
        height: 450,
        top: 20,
        left: 0,
    },

    picture2: {
        width: 450,
        height: 600,
        top: -510,
        left: 0,
    },

    buck: {
        fontFamily: 'Roboto Bold',
    },

    it: {
        fontFamily: 'Roboto Bold',
        color: "#FF6B6B",
    },
});