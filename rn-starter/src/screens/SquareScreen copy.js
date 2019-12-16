import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';


const step = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    //console.log(`Red: ${red}; Green: ${green}; Blue: ${blue}`);

    const setColor = (color, change) => {
        // 'color' === 'red', 'green', 'blue'
        // change === +15 -15
        switch(color) {
            case "red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                break;
            case "green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                break;
            case "blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                break;
        }
    };

    return <View>
        <ColorCounter 
            onIncrease={ () => setColor('red', step) }  
            onDecrease={ () => setColor('red', -1 * step) } 
            color="Red" />
        <ColorCounter 
            onIncrease={ () => setColor('green', step) }  
            onDecrease={ () => setColor('green', -1 * step) }
            color="Green"/>
        <ColorCounter
            onIncrease={ () => setColor('blue', step) }  
            onDecrease={ () => setColor('blue', -1 * step) }
            color="Blue"/>
        <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>;
};

const style = StyleSheet.create({});

export default SquareScreen;