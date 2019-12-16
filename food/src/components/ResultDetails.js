import React from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';
 
const ResultDetails = ({result}) => { 
 return (
 <View style={styles.container}>  
     <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
     <Text style={ styles.name}>{result.name}</Text>
     <Text style={styles.starsReviews}>{result.rating} Stars, {result.review_count} Reviews</Text>
 </View>
 );
};

const styles = StyleSheet.create({

    imageStyle: {
        width:250,
        height:120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    starsReviews: {
        
    },
    container: {
        marginLeft: 15
    }
});
export default ResultDetails;
