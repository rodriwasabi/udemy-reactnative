import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
 
const SearchScreen = ( { term, onTermChange, onTermSubmit } ) => { 
 return <View style={styles.backgroundStyle}>
     <Feather name="search" style={styles.iconStyle}></Feather>
     <TextInput style={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            // onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing = { onTermSubmit }
            // onEndEditing = { () => { onTermSubmit() } }            
            />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        marginTop:10,
        marginBottom: 10,
        padding: 3,
        borderRadius: 5,
        flexDirection: 'row'

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle : {
        fontSize: 45,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchScreen;