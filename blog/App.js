import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
{
    index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
}, 
{
    initialRouteName: 'index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => {
    return <Provider>
         <App />
    </Provider>
};