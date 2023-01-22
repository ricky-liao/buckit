import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hi,</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    },
});