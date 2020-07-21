/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src';

const theme = {
  ...DefaultTheme,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
