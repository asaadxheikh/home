import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme, 
    Button,
    View,FlatList,TouchableOpacity,
    Dimensions, Image, Switch, TextInput
} from 'react-native';

import Slider from '@react-native-community/slider';
const App=({changeTemp,changeSpeed,speed})=>{

    return(
        <View style={{
            width:'100%',
            height:'30%', 
            paddingHorizontal:20,
            justifyContent:'space-between'
        }}>
            <View style={{
               width:'100%',
               height:'48%' ,
               flexDirection:'row',
               justifyContent:'space-between'
            }}>
                <View style={{
                    width:'47%',
                    height:'100%',  
                    backgroundColor:'#11111140',
                    paddingHorizontal:16,
                    borderRadius:14
                }}>
                    <Text
                    style={{
                        color:'#fff',
                        marginVertical:14,
                        fontSize:16
                    }}
                    >Speed</Text>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>

                     {new Array(3).fill(0).map((_, index) => {
                    return   <TouchableOpacity style={{
                        height:36,
                        width:36,
                        borderRadius:18,
                        borderWidth:1,
                        borderColor:'#fff',
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:speed==index+1?'#fff':null
                    }}
                    onPress={
                        ()=>changeSpeed(index+1)
                    }
                    >
                        <Text style={{
                            color:speed==index+1?"#000":'#fff',
                            fontSize:16
                        }}>
                            {index+1}
                        </Text>
                        </TouchableOpacity>
                    
                    })}

                    </View>

                </View>
                <View style={{
                    width:'47%',
                    height:'100%', 
                    backgroundColor:'#11111140',
                    paddingHorizontal:16, 
                    borderRadius:14
                }}>
                      <Text
                    style={{
                        color:'#fff',
                        marginVertical:14,
                        fontSize:16
                    }}
                    >Power</Text>

        <View style={{
              flexDirection:'row',
             justifyContent:'space-between',
             height:36,
             alignItems:'center'
           }}>
               <View style={{
                   flexDirection:'row', 
               }} >
               <Text style={{
                   color:"#ddd",
                   fontWeight:'500'
               }} >
                   OFF 
               </Text>
               <Text style={{
                   color:"#ddd"
               }} > / </Text> 
              <Text style={{
                   color:"#fff",
                   fontWeight:'500'
               }} >
                   ON
               </Text>
               </View>
               <Switch
                                    value={false}
                                    trackColor={{true:'red'}}
                                    onValueChange={
                                        (value)=>{
                                             
                                           
                                        }
                                    }
                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} 
                                    />

        </View>

                </View>

            </View>
            <View style={{
               width:'100%',
               height:'45%' , 

               backgroundColor:'#11111140',
               paddingHorizontal:16, 
               borderRadius:14

            }}>
                <View style={{
                    paddingTop:16
                }}>
                    <Text style={{
                           color:'#fff', 
                           fontSize:16
                    }}>
                        Temp
                    </Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop:5
                }}>
                    <Text style={{
                            color:'#fff',
                            fontSize:16,
                            width:'15%'
                        }}>
                          16℃
                        </Text>
                        <View style={{
                            width:'70%',
                            justifyContent:'center'
                        }}>
                    <Slider
                    style={{width: '100%', }}
                    minimumValue={0.5}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    value={0.5}
                        onValueChange={(value)=>{
                            
                            changeTemp(value)
                        }}
                    />
                        </View>
                        <Text style={{
                            color:'#fff',
                            fontSize:16,
                            width:'15%',
                            textAlign:'right'
                        }}>
                          30℃
                        </Text>

                </View>

                

            </View>



        </View>

    )

}

export default App