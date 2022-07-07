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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import {
    Canvas, Oval,
    TwoPointConicalGradient, RoundedRect,
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
                    paddingHorizontal: 20
                }
                }>
                    <View style={{
                        height: 60,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>

                        <AntDesign
                            name='left'
                            size={20}
                            color="#fff"
                            onPress={()=>navigation.goBack()}

                        />

                        <Text style={{
                            color: '#bbb',
                            fontSize: 20,
                            fontWeight: '300'
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
                        width: '100%',
                        height: 40,
                        marginTop: 20,

                    }}>


                        <Text style={{
                            color: '#ddd',
                            fontSize: 22,
                            fontWeight: '300'
                        }}>
                            All Time
                        </Text>


                    </View>

                    <View style={{
                        width: '100%',
                        height: 140,
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                        <View style={{
                            width: '47%',
                            height: '100%',
                        }}>
                            <Canvas style={{
                                flex: 1
                            }} >

                                <RoundedRect x={0} y={0} width={160} height={140}
                                    r={14}>
                                    <TwoPointConicalGradient
                                        start={vec(128, 128)}
                                        startR={188}
                                        end={vec(128, 128)}
                                        endR={20}
                                        colors={['rgb(33,31,40)', 'rgb(110,92,182)']}

                                    />

                                </RoundedRect>
                            </Canvas>
                            <View style={{ 
                                position:'absolute',
                                width:'100%',
                                height:'100%',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <View style={{
                                    width:30,
                                    height:30,
                                    justifyContent:'center',
                                    alignItems:'center',  
                                }}>
                                <Entypo
                                    name='leaf'
                                    color='rgb(97,159,136)'
                                    size={26}
                                    style={{
                                        position:'absolute'
                                    }}
                                />
                                  
                                </View>
                                <Text style={{
                                    color:'#fff',
                                    fontSize:16,
                                    fontWeight:'400',
                                    marginVertical:3
                                }}>
                                    23 sessions
                                </Text>
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:14,
                                    fontWeight:'400'
                                }}>
                                    of meditation
                                </Text>

                               

                            </View>


                        </View>

                        <View style={{
                            width: '47%',
                            height: '100%',
                        }}>
                            <Canvas style={{
                                flex: 1,
                                
                            }} >

                                <RoundedRect x={0} y={0} width={160} height={140}
                                    r={14}>
                                    <TwoPointConicalGradient
                                        start={vec(0, 128)}
                                        startR={188}
                                        end={vec(0, 128)}
                                        endR={20}
                                        colors={['rgb(33,31,40)', 'rgb(97,159,136)']}

                                    />

                                </RoundedRect>
                                
                            </Canvas>
                            <View style={{ 
                                position:'absolute',
                                width:'100%',
                                height:'100%',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <View style={{
                                    width:30,
                                    height:30,
                                    justifyContent:'center',
                                    alignItems:'center',  
                                }}>
                                <FontAwesome
                                    name='circle-thin'
                                    color='rgb(97,159,136)'
                                    size={18}
                                    style={{
                                        position:'absolute'
                                    }}
                                />
                                  <FontAwesome
                                    name='circle-thin'
                                    color='rgb(97,159,136)'
                                    size={30}
                                    style={{
                                        position:'absolute'
                                    }}
                                />
                                </View>
                                <Text style={{
                                    color:'#fff',
                                    fontSize:16,
                                    fontWeight:'400',
                                    marginVertical:3
                                }}>
                                    56 min
                                </Text>
                                <Text style={{
                                    color:'#bbb',
                                    fontSize:14,
                                    fontWeight:'400'
                                }}>
                                    of breath work
                                </Text>

                               

                            </View>

                        </View>

                    </View>


                    <View style={{
                        width: '100%',
                        height: 40,
                        marginTop: 40,

                    }}>


                        <Text style={{
                            color: '#ddd',
                            fontSize: 22,
                            fontWeight: '300'
                        }}>
                            This Week
                        </Text>


                    </View>


                    <View style={{
                        width: '100%',
                        height: '50%',
                        marginTop: 3,
                        backgroundColor:'rgb(33,31,40)',
                        borderRadius:18,
                        paddingHorizontal:20
                    }}>

                <View style={{
                        width: '100%', 
                        marginTop: 27,
                        flexDirection:'row',
                        justifyContent:'space-between'

                    }}>


                        <Text style={{
                            color: '#aaa',
                            fontSize: 16,
                            fontWeight: '300'
                        }}>
                            Total Time
                        </Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '300'
                        }}>
                            3h 34min
                        </Text>

                    </View>

                        <View style={{
                            justifyContent:'space-evenly',
                            height:'70%', 
                            
                        }}>
                             
                    {
                        new Array(4).reverse().fill(0).map((_,index)=>{
                            return(
                                <View style={{
                                    width:'100%', 
                                    flexDirection:'row',
                                    alignItems:'baseline',
                                    justifyContent:'space-between'
                                }}>
                                    <Text style={{
                                        color:'#888',
                                        fontSize:12,
                                        textAlign:'right',
                                        width:40
                                    }}>
                                {(index+1)*15} min
                                    </Text>
                                    <View style={{
                                        width:'84%',
                                        height:0.7,
                                        backgroundColor:'#888'
                                    }}
                                    />


                                    </View>
                                )
                                
                        }).reverse()
                    }
                    <View style={{
                        width:'83%',
                        height:'100%',
                        position:'absolute', flexDirection:'row',
                        justifyContent:'space-between',
                        alignSelf:'flex-end'
                    }}>

{
                        new Array(7).reverse().fill(0).map((_,index)=>{
                            return(
                                <View style={{
                                    width:6, 
                                    height:230,   
                                    borderRadius:10, 
                                    marginBottom:40, 
                                }}>
                           <Canvas style={{
                                flex: 1, 
                            }} >

                                <RoundedRect x={0} y={230} width={6} height={-180*Math.random()-30}
                                    r={14}>
                                    <LinearGradient
                                        start={vec(0, 220)} 
                                        end={vec(6, 0)} 
                                        colors={[ '#222','rgb(139,245,208)','rgb(139,245,208)']}

                                    />

                                </RoundedRect>
                            </Canvas>
                                   
                                    </View>
                                )
                                
                        })
                    }

                    </View>

                    </View>

                    <View style={{
                                    width:'100%', 
                                    flexDirection:'row',
                                    alignItems:'baseline',
                                    justifyContent:'space-between'
                                }}>
                                    <Text style={{
                                        color:'#888',
                                        fontSize:12,
                                        textAlign:'right',
                                        width:40
                                    }}>
                                
                                    </Text>
                                    <View style={{
                                        width:'84%',
                                        height:0.7,
                                        backgroundColor:'#888'
                                    }}
                                    />


                                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        marginTop:10
                    }}>
                         <Text style={{
                                        color:'#888',
                                        fontSize:12,
                                        textAlign:'right',
                                        width:40
                                    }}> 
                                    </Text>
                                    <View style={{
                                        flexDirection:'row',
                                        paddingHorizontal:10,
                                        justifyContent:'space-between',
                                        width:'90%'
                                    }}>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Sun
                                    </Text>

                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Mon
                                    </Text>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Tue
                                    </Text>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Wed
                                    </Text>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Thu
                                    </Text>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Fri
                                    </Text>
                                    <Text style={{
                                        color:'#999',
                                        fontSize:12
                                    }}>
                                        Sat
                                    </Text>

                                                </View>
                       

                    </View>
                {/* {new Array(totalBlocks.value).fill(0).
                map((_, index) => {
                            return <Square key={index} progress={progress} index={index} N={totalBlocks.value} />;
                            })} */}


                    </View>

                </View>



            </SafeAreaView>


        </>
    )
}

export default App