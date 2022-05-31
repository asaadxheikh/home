

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 

import Home from '../../views/home' 
import SmartAc from '../../views/smartAc' 


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
   
  return(
    <NavigationContainer> 
      <Stack.Navigator  screenOptions={
        {
          headerShown:false
        }
      }>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="smartac" component={SmartAc} /> 
    </Stack.Navigator>
      </NavigationContainer>
    
  )
  
};


export default App;
 