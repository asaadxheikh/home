

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 

import Home from '../../views/liquidSwipe'   

 
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

      <Stack.Screen name="home" component={Home} />  
    </Stack.Navigator>
      </NavigationContainer>
    
  )
  
};


export default App;
 