import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Platform,
  Button,
  View
} from "react-native";
import { Modal } from 'react-native';
import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { getGoogleQuery } from "../utils/getGoogleQuery";
import { getGPTQuery } from "../utils/getGPTQuery";
import { checkGPTQuery } from "../utils/checkGPTQuery";

export default function Prompt({ navigation }) {
    const [userInput, setUserInput] = React.useState("");
    const [res, setRes] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [tab, setTab] = React.useState(0);
    const screenHeight = Dimensions.get('window').height;

    const handleSubmit = async () => {
        console.log(userInput);
        const category = await checkGPTQuery(userInput);
        let parse = category.generated_text;
        parse = parse.toLowerCase();
        if (!parse.includes("travel") && !parse.includes("education")
            && !parse.includes("recreation")) {
                console.log("actual text: " + category.generated_text)
                setUserInput("ERROR!")
                setRes("Sorry, we can't handle this bucket list goal.");
                return;
            }
        //const data = await getGPTQuery(userInput);
        setModalVisible(true);
        setUserInput("clicked!");
        console.log(data);
        if (data && data.generated_text) {
            setRes(data.generated_text);
        } else {
            setUserInput("ERROR!!!");
        }
    }

    return (
      <LinearGradient colors={["#FF6B6B", "#FF9776"]} style={styles.container}>
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.centerContainer}>
                <Text style={styles.text}>What's on your bucket list?</Text>
                <TextInput
                    style={styles.input}
                    placeholder={""}
                    value={userInput}
                    onChangeText={(text) => setUserInput(text)}
                />
                <Button title="submit" onPress={() => handleSubmit()} />
                <Text style={styles.text}>{res}</Text>
            </View>
        </ScrollView>

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
        </KeyboardAvoidingView>
        {modalVisible ? (<View style={styles.dimmingView} />) : ""}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 400, height: screenHeight, backgroundColor: "white", borderRadius: 20}}>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                    <Button title="Interests" onPress={() => setTab(0)} />
                    <Button title="Party Size" onPress={() => setTab(1)} />
                    <Button title="Budget" onPress={() => setTab(2)} />
                    <Button title="Date" onPress={() => setTab(3)} />

                </View>

              
              <Button title="close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        width: 300,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 8
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
    },
    dimmingView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    addText: {},
    });