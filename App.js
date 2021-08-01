import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/routes';



export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>

  );
}

