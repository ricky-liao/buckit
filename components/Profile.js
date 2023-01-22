import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProfileButton from './ProfileButton';

export default function Profile({ navigation }) {

    return (
        <LinearGradient 
         colors={["#FF6B6B", "#FF9776"]} 
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}
         style={styles.container}
         >
            <View style={{
                width: 430,
                height: 690,
                backgroundColor: 'white',
                position: "absolute",
                top: 152,
                left: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            }} />
            <View style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    position: "absolute",
                    top: 30,
                    left: 386,
                }} />
            <View style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    position: "absolute",
                    top: 30,
                    left: 394,
                }} />
            <View style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    position: "absolute",
                    top: 30,
                    left: 402,
                }} />
            <View>
                <Text style={styles.title}>Your Bucket List</Text>
                <View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "#FF6B6B",
                    backgroundColor: 'white',
                    position: "absolute",
                    top: 105,
                    left: 165,
                }} />
            </View>
            <View>
                <Text style={styles.inProgress}>In Progress</Text>
            </View>
            <View>
                <Text style={styles.Completed}>Completed</Text>
            </View>
            <View>
                <Text style={styles.Saved}>Saved</Text>
            </View>
            <View>
                <Image style={styles.picture}
                source={require('../assets/person.png')} />
            </View>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: "#d9d9d9",
                borderBottomStyle: 'solid',
                position: "absolute",
                top: 310,
                left: 0,
                width: 430,
            }} />
            <View>
                <ProfileButton text='Skydiving in Hamburg' navigation={navigation}/>
            </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: 24,
        position: "absolute",
        top: 215,
        left: 125,
        fontFamily: "Roboto Bold",
    },
    picture: {
        width: 45,
        height: 58,
        position: "absolute",
        top: 125,
        left: 193,
    },
    inProgress: {
        color: "#BBBBBB",
        fontFamily: "Roboto Medium",
        fontSize: 16,
        position: "absolute",
        top: 285,
        left: 60,
    },
    Completed: {
        color: "#BBBBBB",
        fontFamily: "Roboto Medium",
        fontSize: 16,
        position: "absolute",
        top: 285,
        left: 175,
    },
    Saved: {
        color: "#BBBBBB",
        fontFamily: "Roboto Medium",
        fontSize: 16,
        position: "absolute",
        top: 285,
        left: 300,
    },
});
