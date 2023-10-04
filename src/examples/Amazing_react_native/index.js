import {
    Canvas, Oval,
    TwoPointConicalGradient, RoundedRect,
    useCanvas, BlurMask, Group, vec, Paint, useValue, useClockValue, interpolateColors,
    useSharedValueEffect, Path, Skia, Blur, Circle, useFont, polar2Canvas,
    Shadow, LinearGradient, Rect, useDerivedValue, useTiming, Text as Texto, mix
} from "@shopify/react-native-skia";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, View,Text, ScrollView, TouchableOpacity } from "react-native";

import para from './string'


const App=()=>{

    const r1 = 120;
     const [on,setOn]=useState(false)
    const path = Skia.Path.Make();
    path.addCircle(600*0.5-20, 1000 * 0.25, r1);

    const font = useFont(require("./PlayfairDisplay-Regular.ttf"), 16);
    return(
        <>
        <SafeAreaView style={{
            backgroundColor:'#000'
        }}>
            <StatusBar barStyle={'light-content'}/>
                <ScrollView style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'#000',
                    paddingHorizontal:"6%", 
                    zIndex:-1
                }}>

                    <TouchableOpacity style={{
                        width:70,
                        height:70,
                        borderRadius:35,
                        backgroundColor:on?'rgb(220,166,212)':'#444'
                    }}
                    onPress={()=>{
                        console.log(on);
                        setOn(!on)
                    }}
                    >

                    </TouchableOpacity>
                    <Text style={{
                        fontSize:36,
                        color:'#555',marginTop:30,
                        fontWeight:'700'
                    }}>
                        React Native is pretty amazing too ...
                    </Text>

                    <Text style={{
                        color:on?'#aaa':'#333',
                        fontSize:16,
                        marginTop:20, 
                    }}>
                        {para.paragragph +'\n'+ para.paragragph+ para.paragragph}
                    </Text>

                    
                </ScrollView>

{
    on?
    
<View style={{
    height:'100%',
    width:'100%', 
    position:"absolute"
}}


>
   <TouchableOpacity style={{
                        width:70,
                        height:70,
                        borderRadius:35,
                        backgroundColor:on?'rgb(220,166,212)':'#444'
                    }}
                    onPress={()=>{
                        console.log(on);
                        setOn(!on)
                    }}
                    >

                    </TouchableOpacity>
                {/* <Canvas style={{
                    flex:1,   
                }}>
 <Group>  
                           
                     
                    
  <Circle cx={200} cy={200} r={100} color='rgb(220,166,212)' >
 
                        <Blur blur={80}  />
</Circle>
 
                            
                                
                            
                        </Group>
 

                </Canvas> */}

                </View>
                :

                <View/>
            }

        </SafeAreaView>
        
        </>

    )
}

export default App;