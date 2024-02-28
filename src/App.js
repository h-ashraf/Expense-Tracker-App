import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppNavigator from './navigation/AppNavigator';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
        <AppNavigator />
        </Provider>
    );
};

export default App;