import React, { useReducer } from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const reduce = (state, action) => {
    // action === { type: string , payload: number }
    return { ...state, count: state.count + action.payload }; 
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reduce, { count: 0 });

    return <View>
        <Button title="Increase" onPress={() => {  
            // don't do this!
            //counter ++;
            dispatch({ payload: 1 });
            
        }} />
        <Button title="Decrease" onPress={() => {
            dispatch({ payload: -1 });
        }} />
        <Text>Current count: { state.count }</Text>
    </View>
} ;

const styles = StyleSheet.create({});

export default CounterScreen;