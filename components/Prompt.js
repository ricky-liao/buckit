import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { getGoogleQuery } from "../utils/getGoogleQuery";
import { getGPTQuery } from "../utils/getGPTQuery";

export default function Prompt({ navigation }) {
    const [userInput, setUserInput] = React.useState("");

    const handleSubmit = async () => {
        console.log(userInput);
        const data = await getGPTQuery(userInput);
        setUserInput("clicked!");
        console.log(data);
    }

    return (
        <View style={styles.container}>
        {/* Scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
        >
            <Text>What's on your bucket list?</Text>
            <TextInput
                style={styles.input}
                placeholder={""}
                value={userInput}
                onChangeText={(text) => setUserInput(text)}
            />
            <Button title="submit" onPress={() => handleSubmit()} />
        </ScrollView>

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
        </KeyboardAvoidingView>
        </View>
    );
    }
		
  return (
    <View>
      {/* Scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text>What's on your bucket list?</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder={""}
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});