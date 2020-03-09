import React, { useContext } from 'react';
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {  
 const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

 return <View>
        <Text>Index screen</Text>
        <Button onPress={ addBlogPost } title="Add new post" />
        <FlatList
            data={ state }
            keyExtractor = {(blogPost) => blogPost.title }
            renderItem = { ({item}) => {
                return (
                <TouchableOpacity onPress={ () => navigation.navigate('Show', { id: item.id }) }>     
                    <View style={styles.row}>
                        <Text style={styles.title} >{ item.title }</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
            }}
        />
    </View>;
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth:1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});
export default IndexScreen;