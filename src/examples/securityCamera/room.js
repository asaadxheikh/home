import React from "react";
import { SafeAreaView, View,Text, ImageBackground,Dimensions } from "react-native"; 

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Canvas,Group,Path,rotate,rrect,Skia,rect,Circle ,Box,useFont,
Text as Texto
} from "@shopify/react-native-skia";
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';
  import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
  } from 'react-native-reanimated';
const App=({navigation})=>{
    const { width, height } = Dimensions.get('window');
    const HEIGHT = 256;
    const WIDTH = width * 0.9;
    const font = useFont(require("./assets/RobotoMono.ttf"), 28);
    const CARD_HEIGHT = height/3;
    const CARD_WIDTH =width;
    const r1 = 85;
    const r2 = 140;
    const path = Skia.Path.Make();
    const path1 = Skia.Path.Make();
    const path2 = Skia.Path.Make();
    path.addCircle(width / 2, height * 0.2, r1);
    path1.addCircle(width / 2, height * 0.2, r2);  
    const colors={
        dark:'#1e1e1e',
        light:'#fafafa',
        shade:'#2fccc9',
        black:'#000'
    }


    const rotateX = useSharedValue(0);
    const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan()
  .onBegin(event => { 
    rotateX.value = withTiming(
      interpolate(event.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP),
    );
    rotateY.value = withTiming(
      interpolate(event.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP),
    );
  })
  .onUpdate(event => {
    // topLeft (10deg, -10deg)
    // topRight (10deg, 10deg)
    // bottomRight (-10deg, 10deg)
    // bottomLeft (-10deg, -10deg)
 
    rotateX.value = interpolate(
      event.y,
      [0, CARD_HEIGHT],
      [10, -10],
      Extrapolate.CLAMP,
    );
    rotateY.value = interpolate(
      event.x,
      [0, CARD_WIDTH],
      [-30, 30],
      Extrapolate.CLAMP,
    );
  })
  .onFinalize(() => {
    rotateX.value = withTiming(0);
    rotateY.value = withTiming(0);
  });
  const rStyle = useAnimatedStyle(() => {
    const rotateXvalue = `${rotateX.value}deg`;
    const rotateYvalue = `${rotateY.value}deg`;

    return {
      transform: [
        {
          perspective: 300,
        },
        { rotateX: rotateXvalue },
        { rotateY: rotateYvalue },
      ],
    };
  }, []);
    return(
        <View style={{
            width:'100%',
            height:'100%',
            
            backgroundColor:colors.black 
        }}>
            <SafeAreaView  >
 

        <View style={{
            height:'100%',
            width:'100%', 
        }}>


        <View style={{
            height:'10%',
            width:'100%', 
            paddingHorizontal:'6%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
   <AntDesign
                name="arrowleft"
                size={24}
                color={colors.light}
            onPress={()=>navigation.goBack()}
                />

                <Text style={{
                    fontSize:16,
                    fontWeight:'400',
                    color:colors.light
                }}>
                    Living room
                </Text>
                 <MaterialCommunityIcons
                name="circle-edit-outline"
                size={24}
                color={colors.light}

                />

        </View>



                <View style={{
                    width:'100%',
                    height:"30%",
                    paddingHorizontal:'6%'
                }}>

                    <ImageBackground style={{
                        width:'100%',
                        height:'100%',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}
                    source={require('./assets/livingroom.jpeg')}
                    imageStyle={{
                        borderRadius:30
                    }}
                    resizeMode='center'
                    >
                        <View style={{
                            width:'70%',
                            height:50,
                            backgroundColor:colors.dark,
                            borderRadius:30,
                            marginBottom:10,
                            paddingHorizontal:24,
                            justifyContent:'space-between',
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
            <AntDesign
                name="banckward"
                size={18}
                color={colors.light}

                />
                  <AntDesign
                name="pause"
                size={22}
                color={colors.light}

                />
                  <AntDesign
                name="forward"
                size={18}
                color={colors.light}

                />

                        </View>
                    </ImageBackground>

                </View>


                        <View style={{
                            width:'100%',
                            height:'5%',
                            justifyContent:'center',alignItems:'center'
                        }}>

                            <Text style={{
                                color:'#aaa'
                            }}>
                                10:55:32 Sunday 03-07-2022
                            </Text>

                        </View>
                      
  <View style={{
     height:'40%',
     width:'100%', 
  }}>
 
<GestureDetector gesture={gesture} >
    
                            <Animated.View style={[{
                                height:'100%',
                                width:'100%', 
                            },rStyle]}>
 
                            <Canvas style={{
                                flex:1
                            }}>

                            <Group>

                            <Path
                                path={path}
                                style="stroke"
                                strokeWidth={50}
                                end={1}
                                strokeCap="round"
                                color={colors.shade}
                            />
                            {/* <Path
                                path={path1}
                                style="stroke"
                                strokeWidth={30}
                                end={0.58}
                                strokeCap='round'
                                start={0.43}
                                color={colors.shade}
                            /> */}

                                <Box box={rrect(rect(45, height/4-120, 30, 150), 54, 54)} 
                                color={colors.shade}>
                               
                                    </Box>

                                    
                                    <Box box={rrect(rect(width-75, height/4-120, 30, 150), 54, 54)} 
                                color={colors.shade}>
                                    </Box>
                                      <Texto
                                        x={width-68}
                                        y={height/4-92}
                                        text="+"  
                                        font={font}
                                        color={colors.light}
                                    />
                                    <Texto
                                        x={width-68}
                                        y={height/4+20}
                                        text="-"  
                                        font={font}
                                        color={colors.light}
                                    />
                                     <Texto
                                        x={width-68}
                                        y={height/4-35}
                                        text="Z"  
                                        font={font}
                                        color={colors.light}
                                    />

 

                                    <Texto
                                        x={52}
                                        y={height/4-92}
                                        text="+"  
                                        font={font}
                                        color={colors.light}
                                    />
                                    <Texto
                                        x={52}
                                        y={height/4+20}
                                        text="-"  
                                        font={font}
                                        color={colors.light}
                                    />
                                    <Texto
                                        x={52}
                                        y={height/4-35}
                                        text="C"  
                                        font={font}
                                        color={colors.light}
                                    />

                                    <Texto
                                        x={95}
                                        y={height/4-35}
                                        text="d~"  
                                        font={font}
                                        color={colors.light}
                                    />

                            </Group>


                            </Canvas>
 


                            </Animated.View>
 </GestureDetector>


 </View>

                            <View style={{
                                 height:'15%',
                                 width:'100%', 
                                 justifyContent:'center',
                                 alignItems:'center'
                            }}>

                                <View style={{
                                    width:'60%',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center'
                                }}>

                                    <View style={{
                                        width:44,
                                        aspectRatio:1,
                                        backgroundColor:colors.dark,
                                        borderRadius:10,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                           <FontAwesome
                                                name="microphone-slash"
                                                size={22}
                                                color='#999'

                                                />

                                    </View>
                                    <View style={{
                                        width:70,
                                        aspectRatio:1,
                                        borderRadius:18,
                                        backgroundColor:colors.dark,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                         <FontAwesome
                                                name="power-off"
                                                size={34}
                                                color='#999'

                                                />

                                    </View>
                                    <View style={{
                                        width:44,
                                        aspectRatio:1,
                                        borderRadius:10,
                                        backgroundColor:colors.dark,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                    <FontAwesome
                                                name="camera"
                                                size={22}
                                                color='#999'

                                                />
                                    </View>

                                </View>




                            </View>




        </View>  
            </SafeAreaView>

            

        </View>
    )
}


export default App