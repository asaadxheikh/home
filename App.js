/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Main from './src/navigation/home'
 import { LogBox } from 'react-native';
 
const App= () => {  // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return (
    <Main/>
  );
};
 
export default App;
