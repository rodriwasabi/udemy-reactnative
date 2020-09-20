import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location':
            return { ... state, currentLocation: action };
        default: 
            return state;
    }
};

const startRecording = dispatch => () => {};
const stoptRecording = dispatch => () => {};
const addLocation = dispatch => (location) => {
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stoptRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);