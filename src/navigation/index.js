

import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; 
 
import HomeSecurity from '../examples/securityCamera'
import Meditation from '../examples/mindfull/mindfullness'
import SmartHome from '../examples/smartHome'
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, SafeAreaView, StatusBar, View,Text, TouchableOpacity } from 'react-native';

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
      <Stack.Screen name="home_security" component={HomeSecurity} />  
      <Stack.Screen name="meditation" component={Meditation} />  
      <Stack.Screen name="smart_home" component={SmartHome} />  
    </Stack.Navigator>
      </NavigationContainer>
    
  )
  
};

const screens=
    [
        {
            name:'✌🏻 Home Security App',
            route:'home_security',
        },
        {
            name:'🙌 Meditaion App',
            route:'meditation',
        },
        {
            name:'🫠 Smart Home',
            route:'smart_home',
        }
    ]


const Home=({navigation})=>{

    return(
        <View style={{
            width:'100%',
            height:'100%',
        }}>
            <SafeAreaView >
                <StatusBar  barStyle='dark-content'/>

                <FlatList
                    data={screens}
                ListHeaderComponent={
                    ()=>{
                        return(
                            <View style={{
                                height:55,
                                width:'100%',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    fontSize:22,
                                    fontWeight:'300'
                                }}>
                                    React native examples designs
                                </Text>

                            </View>
                        )
                    }
                }
                ItemSeparatorComponent={
                    ()=>{
                        return(
                            <View style={{
                                width:'90%',
                                height:0.6,
                                backgroundColor:'#222',
                                alignSelf:'center'
                            }}>

                            </View>
                        )
                    }
                }
                renderItem={
                    ({item})=>{
                        return(

                            <TouchableOpacity style={{
                                width:'100%',
                                height:50,
                                paddingHorizontal:20,
                                justifyContent:'space-between',
                                flexDirection:'row',
                                alignItems:'center'
                            }}
                            onPress={
                                ()=>navigation.navigate(item.route)
                            }
                            >
                                <Text style={{
                                    fontSize:16
                                }}>
                                    {item.name}
                                </Text>

                                <Text>
                                    -->>
                                </Text>

                            </TouchableOpacity>
                        )
                    }
                }


                />

            </SafeAreaView>

        </View>
    )
}

export default App;
 