import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL: 'http://a781898f49a5.ngrok.io' // generated using ngrok
});

instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;