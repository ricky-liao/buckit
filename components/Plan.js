import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import RerollButton from "./RerollButton";
import AddButton from "./AddButton";
import { LinearGradient } from 'expo-linear-gradient';

export default function Plan({ navigation }) {

    return (
      <LinearGradient colors={["#FF6B6B", "#FF9776"]} style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={styles.text}>Here's your plan.</Text>
            </View>
            <View style={{
                width: 360,
                height: 580,
                backgroundColor: 'white',
                position: "absolute",
                top: 210,
                left: 35,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 108,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }} />
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: "#d9d9d9",
                borderBottomStyle: 'solid',
                position: "absolute",
                top: 318,
                left: 60,
                width: 300,
            }} />
            <RerollButton navigation={navigation} title="REROLL" />
            <AddButton navigation={navigation} title="ADD" />
      </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 36,
        position: "absolute",
        top: 132,
        left: 35,
        fontFamily: "Roboto Bold",
    },
    });