import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
{
    index: IndexScreen,
    Show: ShowScreen
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