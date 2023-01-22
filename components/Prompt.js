import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Platform,
  Button,
  View,
  TouchableOpacity
} from "react-native";
import { Modal } from 'react-native';
import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { getGoogleQuery } from "../utils/getGoogleQuery";
import { getGPTQuery } from "../utils/getGPTQuery";
import { checkGPTQuery } from "../utils/checkGPTQuery";
import SelectButton from "./SelectButton";

export default function Prompt({ navigation }) {
    const [userInput, setUserInput] = React.useState("");
    const [res, setRes] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [tab, setTab] = React.useState("Interests");
    const screenHeight = Dimensions.get('window').height;

    const openModal = async () => {
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
        setModalVisible(true);
    }

    const handleSubmit = async () => {
        const data = await getGPTQuery(userInput);
        if (data && data.generated_text) {
            setRes(data.generated_text);
            navigation.navigate("GuideMap", {
                data: data.generated_text,
                input: userInput
            });
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
                <TouchableOpacity style={styles.button} onPress={() => openModal()}>
                    <Text style={styles.buttonText}>Get my plan</Text>
                </TouchableOpacity>
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 }}>
                    <Button title="Interests" onPress={() => setTab("Interests")} />
                    <Button title="Party Size" onPress={() => setTab("Party Size")} />
                    <Button title="Budget" onPress={() => setTab("Budget")} />
                    <Button title="Date" onPress={() => setTab("Date")} />


                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>Select your {tab}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 25, flexWrap: 'wrap', marginVertical: 10 }}>
                    

                    {tab == "Interests" ? (
                        <>
                        {interests_data.map((interest, index) =>(
                            <SelectButton
                                key={index} 
                                title={interest.value} 
                            />
                        ))}
                        </>
                        
                    ) : ""}
                    {tab == "Party Size" ? (<Text>Party Size</Text>) : ""}
                    {tab == "Budget" ? (<Text>Budget</Text>) : ""}
                    {tab == "Date" ? (<Text>Date</Text>) : ""}
                </View>
              
              <Button title="Save" onPress={() => {
                setModalVisible(false);
                handleSubmit();
              }} />
            </View>
          </View>
        </Modal>
      </LinearGradient>
    );
}

const interests_data = [
    {
        label: "Adventure",
        value: 'adventure'
    },
    {
        label: "Education",
        value: 'education'
    },
    {
        label: "Culture",
        value: 'culture'
    },
    {
        label: "Nature",
        value: 'nature'
    },
    {
        label: "Personal Development",
        value: 'personal development'
    },
    {
        label: "Career",
        value: 'career'
    },
    {
        label: "Social",
        value: 'social'
    },
    {
        label: "Charity",
        value: 'charity'
    },
    {
        label: "Life-event",
        value: 'life-event'
    },
];


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
    button: {
        backgroundColor: 'white',
        borderRadius: 63,
        width: 120,
        height: 40,
        padding: 5,
        margin: 0,
        borderWidth: 2,
        borderColor: '#FF6B6B',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#FF6B6B',
        fontFamily: 'Roboto Medium',
        fontSize: 16,
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
        borderRadius: 8,
        marginBottom: 20
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