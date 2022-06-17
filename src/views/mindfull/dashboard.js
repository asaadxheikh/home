import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme, TouchableOpacity,
    Button,
    View, FlatList,
    Dimensions, Image, Switch, TextInput
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler, Extrapolate, useAnimatedProps, interpolate, multiply,
    useAnimatedStyle, Easing, withTiming, withRepeat, withSpring, withDelay, withSequence
} from 'react-native-reanimated';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Canvas, Oval,
    TwoPointConicalGradient, RoundedRect,RadialGradient,
    useCanvas, BlurMask, Group, vec, Paint, useValue, useClockValue, interpolateColors,
    useSharedValueEffect, Path, Skia, SweepGradient, Circle, useFont, polar2Canvas,
    Shadow, LinearGradient, Rect, useDerivedValue, useTiming, Text as Texto, mix
} from "@shopify/react-native-skia";
const { width, height } = Dimensions.get('window');


const App = ({ navigation }) => {


    const r1 = 120;

    const progress = useValue(1);
    const path = Skia.Path.Make();
    path.addCircle(width * 0.5 - 20, height * 0.25, r1);
    const font = useFont(require("./PlayfairDisplay-Regular.ttf"), 26);
    return (
        <>
            <StatusBar barStyle='light-content' />



            <SafeAreaView style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgb(20,19,24)'
            }}>

                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(20,19,24)', 
                }
                }>
                    <View style={{
                        height: 60,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                    }}>

                        <Ionicons
                            name='ios-person-outline'
                            size={20}
                            color="#fff"

                        />

                        <Text style={{
                            color: '#bbb',
                            fontSize: 20,
                            fontWeight: '300'
                        }}>
                             
                        </Text>

                        <AntDesign
                            name='search1'
                            size={20}
                            color="#fff"

                        />

                    </View>


                    <View style={{
                        width:'100%',
                        height:220, 
                        marginTop:40, 
                    }}>
                               <Canvas style={{
                                flex: 1,
                                
                            }} >

                                <RoundedRect x={-60} y={0} width={width+60} height={220}
                                   r={60} >
                                    <TwoPointConicalGradient
                                        start={vec(0, 128)}
                                        startR={288}
                                        end={vec(0, 128)}
                                        endR={20}
                                        colors={['rgb(251,230,160)','rgb(250,234,224)', 'rgb(251,230,160)']}

                                    /> 
                                </RoundedRect>
                                <Texto
                                    x={30}
                                    y={60}
                                    text="Nature Sounds"
                                    font={font} 
                                    color="#000"
                                />
                            </Canvas>

                    </View>

                    <View style={{
                        width:'100%',
                        height:220,   
                        top:-120
                    }}>
                               <Canvas style={{
                                flex: 1,
                                
                            }} >

                                <RoundedRect x={-60} y={0} width={width+60} height={220}
                                   r={60} > 
                                       <LinearGradient
                                       start={vec(-100, -100)}
                                       end={vec(width*0.2, 210)}
                                        colors={['rgb(149,113,246)','rgb(222,176,250)','rgb(207,158,250)','rgb(149,113,246)']}

                                    /> 
                                </RoundedRect>
                                <Texto
                                    x={30}
                                    y={60}
                                    text="Music"
                                    font={font} 
                                    color="#000"
                                />
                                
                            </Canvas>

                    </View>
                  
 

                    <View style={{
                        width:'100%',
                        height:460,   
                    backgroundColor: 'rgb(20,19,24)', 
                    top:-240,
                    borderTopRightRadius:60,
                    paddingHorizontal:20


                    }}>
                     
                        <View style={{
                            height:100,
                            width:'100%',
                            
                        }}>
                                <Canvas style={{
                            flex:1
                        }}>
                        <Texto
                                    x={10}
                                    y={60}
                                    text="Nature Sounds"
                                    font={font} 
                                    color="#fff"
                                />
                        </Canvas>

                        </View>

                        <View style={{
                            height:280,
                            width:'100%',  
                        }}>
                              <Canvas style={{
                                flex: 1,
                                
                            }} >

                                <RoundedRect x={0} y={0} width={width-40} height={250}
                                   r={20} >
   
                                     <RadialGradient
                                            c={vec(306, 228)}
                                            r={228}
                                        colors={[   'rgb(199,193,160)','rgb(170,132,169)',
                                        'rgb(111,107,149)','rgb(33,31,40)']}

                                    >

                        
                                    </RadialGradient>
                                     
                                </RoundedRect>
                                 <Texto
                                    x={30}
                                    y={50}
                                    text="Pink Noise"
                                    font={font} 
                                    color="#fff"
                                />
                            </Canvas>

                            <View style={{
                                width:'100%',
                                height:'100%',
                                position:'absolute'
                            }}>

                                <Text style={{
                                    fontSize:16,
                                    color:'#aaa',
                                    marginTop:60,
                                    marginLeft:34,
                                    fontWeight:'300'
                                }}>
                                    26 min
                                </Text>

                                <View style={{
                                    width:60,
                                    height:60,
                                    borderRadius:30,
                                    backgroundColor:'#fff',
                                    marginTop:70,
                                    marginLeft:30,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>

                                    <AntDesign
                                    name='caretright'
                                    size={20}
                                    color="#222"

                                    />

                                </View>


                            </View>

                        </View>
                               
                        <View style={{
                            height:80,
                            width:'100%', 

                        backgroundColor:'rgb(33,31,40)',
                        borderRadius:20,
                        flexDirection:'row',
                        justifyContent:'space-evenly'
                        }}>

                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:50
                            }}>
                                <Ionicons
                                name='home-outline'
                                color='#bbb'
                                size={22}

                                />
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:12
                                }}>
                                    Home
                                </Text>
                            </View>


                            <TouchableOpacity style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:50
                            }}
                            onPress={
                                ()=>navigation.navigate('Home')
                            }
                            >
                                <Entypo
                                name='circular-graph'
                                color='#bbb'
                                size={22}

                                />
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:12
                                }}>
                                    Stats
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:50
                            }}
                            onPress={
                                ()=>navigation.navigate('stat')
                            }
                            >
                                <Entypo
                                name='leaf'
                                color='#bbb'
                                size={22}

                                />
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:12
                                }}>
                                    Meditate
                                </Text>
                            </TouchableOpacity>


                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:50
                            }}>
                                <MaterialCommunityIcons
                                name='dots-circle'
                                color='#bbb'
                                size={22}

                                />
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:12
                                }}>
                                    Move
                                </Text>
                            </View>

                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:50
                            }}>

                                <Entypo
                                name='moon'
                                color='rgb(134,193,216)'
                                size={22}

                                />
                                <Text style={{
                                color:'rgb(134,193,216)',
                                    fontSize:12,
                                }}>
                                    Sleep
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