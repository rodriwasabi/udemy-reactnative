import React, {useContext} from 'react';
import {StyleSheet } from 'react-native';
import {Context as blogContext} from '../context/BlogContext';
import BlogPostForm from '../components/blogPostForm';

const EditScreen = ({navigation }) => { 
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(blogContext);

    const blogPost = state.find(blogPost =>
         blogPost.id === id 
         );
    return <BlogPostForm onSubmit={ (title, content) => {

        editBlogPost(id, title, content, () => navigation.pop());
        
    } } 
    actionTitle="Edit post"
    initValues={ { title: blogPost.title, content: blogPost.content } }
    />
};

const styles = StyleSheet.create({});
export default EditScreen;