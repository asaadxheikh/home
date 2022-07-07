import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,TouchableOpacity,
    Button, 
    View,FlatList,
    Dimensions, Image, Switch, TextInput
} from 'react-native';
import Animated, {
    useSharedValue,  
    useAnimatedScrollHandler, Extrapolate, useAnimatedProps, interpolate, multiply,
    useAnimatedStyle, Easing, withTiming, withRepeat, withSpring, withDelay, withSequence
} from 'react-native-reanimated';
 
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {
    Canvas, Oval,
    useCanvas, BlurMask, Group, vec, Paint, useValue, useClockValue, interpolateColors,
    useSharedValueEffect, Path, Skia, SweepGradient, Circle, useFont, polar2Canvas,
    Shadow, LinearGradient, Rect, useDerivedValue, useTiming, Text as Texto, mix
} from "@shopify/react-native-skia";
const { width, height } = Dimensions.get('window');


const App = ({navigation}) => {

     
    const r1 = 120;

    const progress = useValue(1); 
    const path = Skia.Path.Make();
    path.addCircle(width*0.5-20, height * 0.25, r1);
 
    return (
        <>
            <StatusBar barStyle='light-content' />

 
 
                <SafeAreaView style={{
                    width: '100%',
                    height: '100%', 
                    backgroundColor:'rgb(20,19,24)'
                }}>

                    <View style={{
                        width:'100%',
                        height:'100%',
                        backgroundColor:'rgb(20,19,24)',
                        paddingHorizontal:20
                    }
                    }>
                        <View style={{
                            height:60,
                            width:'100%',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between', 
                        }}>

                            <AntDesign
                            name='left'
                            size={20}
                            color="#fff"

                            onPress={()=>navigation.goBack()}
                            />

                            <Text style={{
                                color:'#bbb',
                                fontSize:20,
                                fontWeight:'300'
                            }}>
                                Statistics
                            </Text>

                        <AntDesign
                            name='setting'
                            size={20}
                            color="#fff"

                            />

                        </View>

                            <View style={{
                                paddingHorizontal:10,
                                width:'100%',
                                height:50,
                                marginTop:20, 

                            }}>


                            <Text style={{
                                color:'#ddd',
                                fontSize:22,
                                fontWeight:'300'
                            }}>
                                Activity Types
                            </Text>


                            </View>

                            <View style={{
                                width:'100%',
                                height:'80%',
                                backgroundColor:'rgb(33,31,40)',
                                borderRadius:20
                            }}>


                            <View style={{
                                height:'70%',
                                width:'100%', 
                            }}>
 
                <Canvas style={{
                        flex: 1
                    }}>
                        <Group>  
                            <Path
                                path={path}
                                style="stroke"
                                strokeWidth={15}
                                end={0.64} 
                                strokeCap='round'
                                start={0.18}
                                color='rgb(220,166,212)'
                            >

                        <BlurMask blur={20} style="solid"/> 
                            </Path>
                               <Path
                                path={path}
                                style="stroke"
                                strokeWidth={15}
                                end={0.14} 
                                strokeCap='round'
                                start={0}
                                color='rgb(142,242,216)'
                            >
                        <BlurMask blur={20} style="solid"/> 
                                
                                </Path>    
                              <Path
                            path={path}
                            style="stroke"
                            strokeWidth={15}
                            end={0.96} 
                            strokeCap='round'
                            start={0.68}
                            color='rgb(246,213,162)'
                        >
                        <BlurMask blur={20} style="solid"/> 

                        </Path>
                        </Group>
 
                    

                       
                    </Canvas>
  



                    </View>

                    <View style={{
                        height:'30%',
                        width:'100%', 
                        paddingHorizontal:50
                    }}>
                        <View style={{
                            height:20,
                            width:'100%',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            marginVertical:5
                        }}>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                             <View
                            style={{
                                width:16,
                                height:16,
                                borderRadius:10,

                                backgroundColor:'rgb(220,166,212)'
                                 
                            }}
                            />
                            <Text style={{
                                color:"#bbb",
                                fontSize:16,
                                fontWeight:'400',
                                paddingHorizontal:10,
                                letterSpacing:1
                            }}>
                           Mediation 
                            </Text>

                        </View>
                            
                        <Text style={{
                                color:"#fff",
                                fontSize:16,
                                fontWeight:'400', 
                            }}>
                                48%
                            </Text>

                        </View>


                        <View style={{
                            height:20,
                            width:'100%',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            marginVertical:5
                        }}>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                             <View
                            style={{
                                width:16,
                                height:16,
                                borderRadius:10,
                                
                                backgroundColor:'rgb(246,213,162)'
                            }}
                            />
                            <Text style={{
                                color:"#bbb",
                                fontSize:16,
                                fontWeight:'400',
                                paddingHorizontal:10,
                                letterSpacing:1
                            }}>
                           Breath Work 
                            </Text>

                        </View>
                            
                        <Text style={{
                                color:"#fff",
                                fontSize:16,
                                fontWeight:'400', 
                            }}>
                                35%
                            </Text>

                        </View>


                        <View style={{
                            height:20,
                            width:'100%',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            marginVertical:5
                        }}>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                             <View
                            style={{
                                width:16,
                                height:16,
                                borderRadius:10,
                                
                                backgroundColor:'rgb(142,242,216)'
                            }}
                            />
                            <Text style={{
                                color:"#bbb",
                                fontSize:16,
                                fontWeight:'400',
                                paddingHorizontal:10,
                                letterSpacing:1
                            }}>
                           Yoga
                            </Text>

                        </View>
                            
                        <Text style={{
                                color:"#fff",
                                fontSize:16,
                                fontWeight:'400', 
                            }}>
                                17%
                            </Text>

                        </View>


                    </View>


                            </View>


                    </View>
                  
                 

                </SafeAreaView> 


        </>
    )
}

export default App