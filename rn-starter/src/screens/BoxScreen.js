import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
 
const BoxScreen = () => { 
 return <View style={ styles.parentStyle }>
        <View style={ styles.ViewOneStyle }></View>
        <View style={ styles.ViewTwoStyle }></View>
        <View style={ styles.ViewThreeStyle }></View>
    </View>;
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 1,
        borderColor: 'black', 
        height: 250,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    ViewOneStyle: {
        borderWidth: 2,
        width: 80,
        height: 80,
        backgroundColor: 'red'
    },
    ViewTwoStyle: {
        borderWidth: 2,
        width: 80,
        height: 80,
        backgroundColor: 'green'
        , top: 80
    },
    ViewThreeStyle: {
        borderWidth: 3,
        width: 80,
        height: 80,
        backgroundColor: 'purple'
        
    }
    // Way 1:
    // parentStyle: {
    //     borderWidth: 1,
    //     borderColor: 'black', 
    //     height: 250,
    //     alignItems: 'stretch'
    // },
    // ViewOneStyle: {
    //     borderWidth: 2,
    //     width: 80,
    //     height: 80,
    //     backgroundColor: 'rgb(25,87,99)'
    // },
    // ViewTwoStyle: {
    //     borderWidth: 2,
    //     width: 80,
    //     height: 80,
    //     backgroundColor: 'rgb(65,24,233)'
    //     , alignSelf: 'center'
    // },
    // ViewThreeStyle: {
    //     borderWidth: 3,
    //     width: 80,
    //     height: 80,
    //     backgroundColor: 'rgb(155,156,33)'
    //     , position: 'absolute'
    //     , alignSelf: 'flex-end'
    // }
    
});
export default BoxScreen;