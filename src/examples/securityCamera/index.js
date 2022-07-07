

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 
 
import Dashboard from './dashboard'
import Room from './room'  

 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
   
  return( 
      <Stack.Navigator  screenOptions={
        {
          headerShown:false
        }
      }>

      <Stack.Screen name="dashboard" component={Dashboard} /> 
      <Stack.Screen name="room" component={Room} />  
    </Stack.Navigator> 
    
  )
  
};


export default App;
 