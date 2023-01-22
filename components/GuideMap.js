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
  Image,
  TouchableOpacity
} from "react-native";
import { Modal } from 'react-native';
import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import SelectButton from "./SelectButton";
import { Path } from "react-native-svg";
import Svg from "react-native-svg";

export default function GuideMap({ navigation, route }) {
    const data = route.params.data;
    const input = route.params.input
    const numberedlist = data
   //const splits = numberedlist.split(/\s(?=\d+\.)/)
    const splits = data.split("\n")
    let realData = [];
    for (let i = 0; i < splits.length; i++) {
        if (splits[i].length >= 3) {
            realData.push(splits[i]);
        }
    }
    console.log(splits)
    const [userInput, setUserInput] = React.useState("");
    const [res, setRes] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState('');
    const screenHeight = Dimensions.get('window').height;

    const openModal = async (index) => {
        setModalVisible(true);
        setModalInfo(realData[index]);
    }

    return (
        <View style={styles.container}>
            <Image style={{ height: '100%', width: '100%', position: 'absolute' }} source={require('../assets/background.png')} />
            <Svg style={{ position: 'absolute' }}>
                <Path d={`M ${styles.nodes.left + 120} 
                ${styles.nodes.top + 100} L ${styles.nodes.left + 170} 
                ${styles.nodes.top + 160} L ${styles.nodes.left + 260} 
                ${styles.nodes.top + 250} L ${styles.nodes.left + 150} 
                ${styles.nodes.top + 350} L ${styles.nodes.left + 100} 
                ${styles.nodes.top + 460} L ${styles.nodes.left + 230} 
                ${styles.nodes.top + 550} L ${styles.nodes.left + 280} 
                ${styles.nodes.top + 600}`} 
                stroke="black" strokeWidth="2" strokeDasharray="5,5" />
            </Svg>
            <TouchableOpacity style={[styles.nodes, { top: 50, left: 60 }]} onPress={() => openModal(0)}>
                <Image style={{ height: '100%', width: '100%'}} source={require('../assets/redstar.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 50, left: 140 }]}  onPress={() => openModal(1)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/node1.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 60, left: 220}]}  onPress={() => openModal(2)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/node2.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 60, left: 120}]} onPress={() => openModal(3)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/node3.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 100, left: 60}]} onPress={() => openModal(4)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/node4.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 100, left: 160}]} onPress={() => openModal(5)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/node5.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.nodes, { top: 100, left: 250}]} onPress={() => openModal(6)}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../assets/whitestar.png')} />
            </TouchableOpacity>
        
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

                <Text style={{ margin: 20, fontSize: 24 }}>{modalInfo}</Text>
                
                <Button title="Save" onPress={() => {
                    setModalVisible(false);
                }} />
            </View>
            </View>
        </Modal>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nodes: {
        height: 80,
        width: 80,
        top: 0,
        left: 0
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