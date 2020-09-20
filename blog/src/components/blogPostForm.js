import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button } from 'react-native';
 
const BlogPostForm = ( { onSubmit, actionTitle, initValues } ) => { 

    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

    return <View>
    <Text style={styles.label}>Enter Title:</Text> 
    <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}></TextInput>

    <Text style={styles.label}>Enter Content:</Text> 
    <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}></TextInput>

    <Button 
        title={ actionTitle }
        onPress={ () => { onSubmit(title, content) } }
    />
</View>;
};

BlogPostForm.defaultProps = {
    initValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});
export default BlogPostForm;