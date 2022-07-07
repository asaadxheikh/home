import React, { useState } from "react";
import { SafeAreaView, View ,Text,ImageBackground, TouchableOpacity} from "react-native";

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {Canvas, Fill, Circle, BlurMask, vec, Rect} from "@shopify/react-native-skia";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
  } from 'react-native-reanimated';


const App=({navigation})=>{


    const colors={
        dark:'#1e1e1e',
        light:'#fafafa',
        shade:'#2fccc9',
        black:'#000'
    }
 
    const rotateY_l = useSharedValue(-10);
    const rotateY_b = useSharedValue(0);
    const rotateY_k = useSharedValue(0);
    const rotateY_ba = useSharedValue(0);

    const [switches,setSwitch]=useState(
       [true,false,false,false]
    )

    const rStyle_l = useAnimatedStyle(() => { 
        const rotateYvalue = `${rotateY_l.value}deg`;
        return {
          transform: [  
            { rotateZ: rotateYvalue},
            {translateY:rotateY_l.value}
            
          ],
        };
      }, []);
      const rStyle_b = useAnimatedStyle(() => { 
        const rotateYvalue = `${rotateY_b.value}deg`;
        return {
          transform: [  
            { rotateZ: rotateYvalue},
            {translateY:rotateY_b.value}
            
          ],
        };
      }, []);
      const rStyle_k = useAnimatedStyle(() => { 
        const rotateYvalue = `${rotateY_k.value}deg`;
        return {
          transform: [  
            { rotateZ: rotateYvalue},
            {translateY:rotateY_k.value}
            
          ],
        };
      }, []);
      const rStyle_ba = useAnimatedStyle(() => { 
        const rotateYvalue = `${rotateY_ba.value}deg`;
        return {
          transform: [  
            { rotateZ: rotateYvalue},
            {translateY:rotateY_ba.value}
            
          ],
        };
      }, []);


      const operate=(index)=>{
        'worklet';
        if(index==1){
        rotateY_l.value=withTiming(rotateY_l.value==-10?0:-10,{duration:300})
        
        }
        else if(index==2){       
            rotateY_b.value=withTiming(rotateY_b.value==-10?0:-10,{duration:300})
        }

        else if(index==3){
            rotateY_k.value=withTiming(rotateY_k.value==-10?0:-10,{duration:300})
        }
        else if(index==4){
            rotateY_ba.value=withTiming(rotateY_ba.value==-10?0:-10,{duration:300})
        }
        let a=[...switches]; 
        a[index-1]?a[index-1]=false:a[index-1]=true
        setSwitch(a)
      }


    return(
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor:colors.black
        }}>
            <View style={{
    width:'100%',
    height:'100%',
    position:'absolute',
    borderWidth:2,
    borderColor:switches[0]||switches[1]||switches[2]||switches[3]? colors.shade:null,
    borderRadius:50
    
}}>

</View>
            <SafeAreaView  >


{/* 
               Header
         
         
*/}
            <View style={{
                height:'25%',
                width:'100%', 
            }}>

                <View style={{
                    width:'100%',
                    paddingHorizontal:'10%',
                    paddingVertical:20
                }}>
                    <Text style={{
                        color:'#fff',
                        fontSize:22,
                        fontWeight:'300'
                    }}>
                        Hello, Asaad
                    </Text>
                </View>

                <View style={{
                    justifyContent:'space-between',
                    height:'60%',
                    paddingVertical:8
                }}>
                     
                <View style={{
                    width:'100%',
                    paddingHorizontal:'6%',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>

                    <Animated.View style={[{
                        height:44,
                        width:'48%', 
                        backgroundColor:switches[0]?colors.shade:colors.dark,
                        borderRadius:18, 
                    },rStyle_l]}
                    >
                        <TouchableOpacity style={{
                            width:'100%',
                            height:'100%',
                            justifyContent:'center',
                            flexDirection:'row',
                            alignItems:'center', 
                        }}
                        onPress={
                            ()=>operate(1)
                        }
                        >
                             
                          <FontAwesome5
                name="couch"
                size={18}
                
                color= {switches[0]?'#333':'#aaa'}

                />
                <Text style={{
                    paddingHorizontal:8,
                    color:switches[0]?colors.dark:colors.light
                }}>
                    Living room
                </Text>
               

                </TouchableOpacity>
                <Canvas style={{ flex: 1,position:'absolute'}}>
                <Rect x={0} y={0} width={160} height={54} color="red" >


        <BlurMask blur={50} style="normal" />
                </Rect>
  
    </Canvas>

                    </Animated.View>
                    <Animated.View style={[{
                        height:44,
                        width:'48%',
                        backgroundColor:switches[1]?colors.shade:colors.dark,
                        borderRadius:18, 
                    },rStyle_b]}
                    >
                        <TouchableOpacity style={{
                            width:'100%',
                            height:'100%',
                            justifyContent:'center',
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                        onPress={
                            ()=>operate(2)
                        }
                        >
                             
                          <Ionicons
                name="bed"
                size={18} 

                color= {switches[1]?'#333':'#aaa'}
                />
                <Text style={{
                    paddingHorizontal:8,
                    color:switches[1]?colors.dark:colors.light
                }}>
                    Bedroom
                </Text>

                </TouchableOpacity>

                    </Animated.View>
                    

                </View>
                <View style={{
                    width:'100%',
                    paddingHorizontal:'6%',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>

<Animated.View style={[{
                        height:44,
                        width:'48%', 
                        backgroundColor:switches[2]?colors.shade:colors.dark,
                      
                        borderRadius:18, 
                    },rStyle_k]}
                    >
                        <TouchableOpacity style={{
                            width:'100%',
                            height:'100%',
                            justifyContent:'center',
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                        onPress={
                            ()=>operate(3)
                        }
                        >
                             
                          <FontAwesome5
                name="chair"
                size={18} 

                color= {switches[2]?'#333':'#aaa'}

                />
                <Text style={{
                    paddingHorizontal:8,
                    color:switches[2]?colors.dark:colors.light
                }}>
                   Kitchen
                </Text>

                </TouchableOpacity>

                    </Animated.View>
                    <Animated.View style={[{
                        height:44,
                        width:'48%', 
                        backgroundColor:switches[3]?colors.shade:colors.dark,
                      
                        borderRadius:18, 
                    },rStyle_ba]}
                    >
                        <TouchableOpacity style={{
                            width:'100%',
                            height:'100%',
                            justifyContent:'center',
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                        onPress={
                            ()=>operate(4)
                        }
                        >
                             
                          <FontAwesome5
                name="bath"
                size={18}
                color= {switches[3]?'#333':'#aaa'}

                />
                <Text style={{
                    paddingHorizontal:8,
                    color:switches[3]?colors.dark:colors.light
                }}>
                    Bathroom
                </Text>

                </TouchableOpacity>

                    </Animated.View>

                </View>
                </View>

            </View>



         {/* Body */}


         <View style={{
            height:'45%',
            width:'100%', 
         }}>

          
          <View style={{
            height:'10%',
            paddingHorizontal:'8%',
            width:'100%',  
          }}>
            <Text style={{
                color:'#999',
                fontSize:16
            }}>
                Real time
            </Text>

          </View>


          <View style={{
            height:'90%',
            width:'100%',
            justifyContent:'space-between',
            paddingHorizontal:"6%"
          }}>

          <View style={{
            height:'46%',
            width:'100%', 
            flexDirection:'row',
            justifyContent:'space-between'
          }}>

            <View style={{
                width:'46%',
                height:'100%', 
                borderRadius:18
            }}>
                  <ImageBackground style={{
                width:'100%',
                height:'100%',  
                justifyContent:'flex-end', 
                alignItems:'center'
            }}
            source={require('./assets/livingroom.jpeg')}
            resizeMode="cover"
            imageStyle={{

                borderRadius:18
            }}
            >
                <TouchableOpacity style={{
                    width:'100%',
                    height:'100%',
                    opacity:0.4,
                    backgroundColor:colors.dark,
                    position:'absolute'
                }}
                onPress={
                    ()=>{ 
                        navigation.navigate('room')}
                }
                >
                
                </TouchableOpacity>
               
                <Text style={{
                    color:'#fff',
                    opacity:1,
                    fontSize:25, 
                    marginBottom:15,
                    fontWeight:'500'
                }}
               
                >
                    Living room
                </Text>
            </ImageBackground>

            </View>
            <View style={{
                width:'46%',
                height:'100%', 
            }}>
                 <ImageBackground style={{
                width:'100%',
                height:'100%', 
                justifyContent:'flex-end', 
                alignItems:'center'
            }}
            source={require('./assets/bedroom.jpeg')}
            resizeMode="cover"
            imageStyle={{

                borderRadius:18
            }}
            >
  <View style={{
                    width:'100%',
                    height:'100%',
                    opacity:0.4,
                    backgroundColor:colors.dark,
                    position:'absolute'
                }}>
                
                </View>
               
                <Text style={{
                    color:'#fff',
                    opacity:1,
                    fontSize:25, 
                    marginBottom:15,
                    fontWeight:'500'
                }}>
                    Bedroom
                </Text>
            </ImageBackground>

            </View>


          </View>

          <View style={{
            height:'46%',
            width:'100%', 
            flexDirection:'row',
            justifyContent:'space-between'
          }}> 
 <View style={{
                width:'46%',
                height:'100%', 
            }}>
                 <ImageBackground style={{
                width:'100%',
                height:'100%', 
                justifyContent:'flex-end', 
                alignItems:'center'
            }}
            source={require('./assets/kitchen.jpeg')}
            resizeMode="cover"
            imageStyle={{

                borderRadius:18
            }}
            >
  <View style={{
                    width:'100%',
                    height:'100%',
                    opacity:0.4,
                    backgroundColor:colors.dark,
                    position:'absolute'
                }}>
                
                </View>
               
                <Text style={{
                    color:'#fff',
                    opacity:1,
                    fontSize:25, 
                    marginBottom:15,
                    fontWeight:'500'
                }}>
                    Kitchen
                </Text>
            </ImageBackground>

            </View>

            <View style={{
                width:'46%',
                height:'100%', 
            }}>
                 <ImageBackground style={{
                width:'100%',
                height:'100%', 
                justifyContent:'flex-end', 
                alignItems:'center'
            }}
            source={require('./assets/bathroom.jpeg')}
            resizeMode="cover"
            imageStyle={{

                borderRadius:18
            }}
            >
  <View style={{
                    width:'100%',
                    height:'100%',
                    opacity:0.4,
                    backgroundColor:colors.dark,
                    position:'absolute'
                }}>
                
                </View>
               
                <Text style={{
                    color:'#fff',
                    opacity:1,
                    fontSize:25, 
                    marginBottom:15,
                    fontWeight:'500'
                }}>
                   Bathroom
                </Text>
            </ImageBackground>

            </View>

          </View>

          </View>

         </View>


                {/* bottom   */}

         <View style={{
            height:'30%',
            width:'100%',
            paddingHorizontal:'6%',
            justifyContent:'center',
            justifyContent:'space-evenly'
         }}>

            <View style={{
                width:'100%',
                height:55,
                backgroundColor:colors.shade,
                borderRadius:20,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingHorizontal:20,  
                marginVertical:10
            }}>
                <View style={{width:22}}/>
                <Text style={{
                    fontSize:18,
                    fontWeight:'400'
                }}>
                    Add Camera
                </Text>

                <Entypo
                name="plus"
                size={22}
                color={colors.black}

                />

            </View>
            <View style={{
                width:'100%',
                height:80,
                backgroundColor:colors.dark,
                borderRadius:40,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingHorizontal:40
            }}>
              <Entypo
                name="home"
                size={22}
                color={colors.light}

                />
               <Ionicons
                name="ios-settings"
                size={22}
                color='#999'

                />

                <Ionicons
                name="person"
                size={22}
                color='#999'

                />

            </View>

         </View>


</SafeAreaView>
 

        </View>
    )
}

 

export default App