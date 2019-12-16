import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput } from 'react-native';
 
const TextScreen = () => {
    
    const [password, setPassword] = useState('');

    return <View>
        <Text>Enter password: </Text>
        <TextInput
            autoCapitalize="none"
            autoCorrect= {false} 
            autoCompleteType="password"
            style={ styles.input }
            value= { password }

            onChangeText = { (newValue) => setPassword(newValue)} />
        { password.length < 5  ? <Text style={ styles.errorInput }>You must type a value longer than 5 characters</Text> : null }
    </View>;
};

const styles= StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    errorInput :
    {
        color: 'red'
    }
});
export default TextScreen;