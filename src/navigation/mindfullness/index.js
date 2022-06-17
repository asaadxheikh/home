

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 

import Home from '../../views/mindfull'  
import Stat from '../../views/mindfull/mindfullWeek'  
import Dashboard from '../../views/mindfull/dashboard'  

 
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

      <Stack.Screen name="dashboard" component={Dashboard} /> 
      <Stack.Screen name="stat" component={Stat} /> 
      <Stack.Screen name="Home" component={Home} />  
    </Stack.Navigator>
      </NavigationContainer>
    
  )
  
};


export default App;
 