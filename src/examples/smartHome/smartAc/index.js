import React, { useEffect, useState } from 'react';

import {
    Canvas, Oval,
    useCanvas, BlurMask, Group, vec, Paint, useValue, useClockValue, interpolateColors,
    useSharedValueEffect, Path, Skia, SweepGradient, Circle, useFont, polar2Canvas,
    Shadow, LinearGradient, Rect, useDerivedValue, useTiming, Text as Texto, mix
} from "@shopify/react-native-skia";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Button,
    View, FlatList, TouchableOpacity,
    Dimensions, Image, Switch, TextInput
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler, Extrapolate, useAnimatedProps, interpolate, multiply,
    useAnimatedStyle, Easing, withTiming, withRepeat, withSpring, withDelay, withSequence,
} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import Smoke from '../../../components/smoke';
import Steam from '../../../components/steam';
import Slider from '@react-native-community/slider';

import Control from '../../../components/control' 
 



const App = ({ navigation }) => {
 
const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 600; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);
const total_bubbles = 16;

    const r1 = 85;

    const progress = useValue(0.5); 
    const [speed, setSpeed] = useState(1)

    const path = Skia.Path.Make();
    path.addCircle(width / 2, height * 0.2, r1);

    const path_2 = Skia.Path.Make();
    path_2.addCircle(width / 2, height * 0.2, 74);
    const text = useDerivedValue(
        () => `${Math.round(interpolate(progress.current,
            [0.5, 1],
            [16, 30]
        ))}°C`,
        [progress]
    );
 
    const changeTemp = (value) => {
        'worklet';
        progress.current = value 
    }

    const COLORS = ['#8772FB', '#FF7D7D'].map(
        Skia.Color
    );
    const colored = useDerivedValue(

        () => ['rgb(236,231,253)', 'rgb(220,231,252)', interpolateColors(
            progress.current,
            [0.5, 1],
            COLORS
        )]
        ,
        [progress]
    );
    const bar_color = useDerivedValue(

        () => interpolateColors(
            progress.current,
            [0.5, 1],
            COLORS
        )
        ,
        [progress]
    );

    const circle_progress = useDerivedValue(
        () => polar2Canvas(
            {
                theta: mix(progress.current, 2 * Math.PI, 0),
                radius: r1 - 10
            },
            {
                x: width * 0.5,
                y: height * 0.2
            }
        )
        ,
        [progress]
    )
    const changeSpeed = (value) => {
        setSpeed(value)
    }

    const font = useFont(require("./SF-Mono-Semibold.otf"), 32);


    return (
        <>


            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',

            }}>

 
                <Canvas style={{ flex: 1 }}>



                    <Rect x={0} y={0} width={width} height={height}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: width / 1.9, y: height / 1.5 }}
                            colors={colored}

                        >
                        </LinearGradient>
                    </Rect>

                    {new Array(total_bubbles).fill(0).map((_, index) => {
    
                        return <Steam
                            index={index} 
                            speed={speed}
                        />
                    })}


                </Canvas>

            </View>



            <SafeAreaView style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    width: '100%',
                    height: '20%',

                }}>
                    <View style={{
                        width: '100%',
                        height: '50%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20
                    }}>

                        <AntDesign
                            name='arrowleft'
                            size={28}
                            color='#222'
                            onPress={
                                () => {
                                    navigation.goBack()
                                }
                            }
                        />

                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500'
                        }}>
                            Smart AC
                        </Text>
                        <View style={{ width: 28 }} />


                    </View>

                    <View style={{
                        width: '100%',
                        height: "50%",
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>

                        <TouchableOpacity style={{
                            width: 60,
                            height: 60,
                            borderRadius: 14,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={
                                () => getinfo()
                            }
                        >
                            <Ionicons
                                name='time-outline'
                                size={24}
                                color="#222"

                            />

                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 60,
                            height: 60,
                            borderRadius: 14,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Entypo
                                name='light-down'
                                size={28}
                                color="#222"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 60,
                            height: 60,
                            borderRadius: 14,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Ionicons
                                name='flower-outline'
                                size={24}
                                color="#222"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 60,
                            height: 60,
                            borderRadius: 14,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SimpleLineIcons
                                name='drop'
                                size={24}
                                color="#222"
                            />
                        </TouchableOpacity>

                    </View>




                </View>
                <View style={{
                    width: '100%',
                    height: '50%',
                }}>

                    <Canvas style={{
                        flex: 1
                    }}>
                        <Group>

                            <Path
                                path={path}
                                style="stroke"
                                strokeWidth={30}
                                end={1}
                                strokeCap="round"
                                color="#ffffff20"
                            />
                            <Path
                                path={path}
                                style="stroke"
                                strokeWidth={30}
                                end={progress}
                                strokeCap='butt'
                                start={0.49}
                                color={bar_color}
                            />

                        </Group>

                        <Circle cx={width / 2} cy={height * 0.20} r={r1} color='#fff' >


                        </Circle>
                        <Texto
                            x={width / 2 - 36}
                            y={height * 0.2 + 10}
                            text={text}
                            font={font}
                            color={bar_color}
                        />

                        <Group>
                            <Circle c={circle_progress} r={5}
                                color={bar_color} />
                        </Group>
                    </Canvas>
  

                </View>
                <Control
                    changeTemp={changeTemp}
                    changeSpeed={changeSpeed}
                    speed={speed}
                />

            </SafeAreaView>



        </>
    )
}

export default App