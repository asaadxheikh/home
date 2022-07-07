

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 

import Home from '../mindfull'  
import Stat from '../mindfull/mindfullWeek'  
import Dashboard from '../mindfull/dashboard'  

 
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
      <Stack.Screen name="stat" component={Stat} /> 
      <Stack.Screen name="Home" component={Home} />  
    </Stack.Navigator> 
    
  )
  
};


export default App;
 