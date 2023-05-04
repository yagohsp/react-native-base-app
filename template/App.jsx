import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';

import BaseApp from './src';
import store from './src/redux/store';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C0E3E3',
      200: '#9DD4CE',
      300: '#79C6B8',
      400: '#56B7A3',
      500: '#33a88d',
      600: '#26917C',
      700: '#1A796C',
      800: '#0D625B',
      900: '#004A4A'
    }
  }
});

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <BaseApp />
        </NativeBaseProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
