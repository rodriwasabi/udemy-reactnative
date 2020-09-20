import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/blogPostForm';
 
const CreateScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const { addBlogPost } = useContext(Context);
   
    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate('index');
        });
    }}
    actionTitle="Add post"
    />
};

const styles = StyleSheet.create({
    
});
export default CreateScreen; 