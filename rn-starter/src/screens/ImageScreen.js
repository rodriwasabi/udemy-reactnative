import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'
import { FlatList } from 'react-native-gesture-handler';

// const imageList = [
//     {title: 'Forest', 
//     imageSource: { require('../../assets/forest.jpg') },
//      score: 9 },
//     {title: 'Mountain', imageSource:{ require('../../assets/mountain.jpg') }, score: 9 },
//     {title: 'Beach', imageSource:{ require('../../assets/beach.jpg') }, score: 9 },
// ];

const ImageScreen = () => {
    // return ( <FlatList 
    //                 keyExtractor = { (img) => img.title }
    //                 data={imageList} 
    //                 renderItem={({ item }) => {
    //                     return <ImageDetail 
    //                                 title={item.title} 
    //                                 imageSource={item.imageSource} />
    //                 }}
    //                 />
    // );
    return <View>
        <ImageDetail title="Forest" imageSource={ require('../../assets/forest.jpg') } score="9"/>
        <ImageDetail title="Mountain" imageSource={ require('../../assets/mountain.jpg')} score="7"/>
        <ImageDetail title="Beach" imageSource={ require('../../assets/beach.jpg')} score="8" />
    </View> 
}

const styles = StyleSheet.create({});

export default ImageScreen;