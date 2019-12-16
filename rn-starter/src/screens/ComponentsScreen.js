import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const myName = 'Rodrigo';
    return (  
    <View>
        <Text style = { styles.textStyle } > Getting started with React native! </Text> 
        <Text style = { styles.nameStyle } >My name is {myName}</Text>
    </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;