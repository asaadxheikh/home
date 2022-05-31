
import React ,{useEffect,useState,useCallback}from 'react';
import Animated, {
  useAnimatedStyle, 
  useSharedValue, 
  withDelay,
  withSpring,
  withTiming,Easing, color, withRepeat
} from 'react-native-reanimated';    
 
import {Canvas, Oval,
    useClockValue,
    useCanvas,BlurMask  ,useValue, useDerivedValue, 
} from "@shopify/react-native-skia";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Steam = ({ index,total,speed}) => {
  
  const steam_width = Math.round(Math.random() *100)+100
  const steam_height = Math.round(Math.random() *100)+50 
  var position_x = Math.round(Math.random() *350)

  const clock = useClockValue(); 
  const translate_y = useSharedValue(0); 
  
  const move_y = useDerivedValue(
    () => {
      return(
         (height/5)+translate_y.value
        )
    },
    [clock]
  );
  
  useEffect(
      ()=>{
      
        position_x = Math.round(Math.random() *350)
        translate_y.value=0
        translate_y.value=
        withDelay(index*100,
                    withRepeat( 
            withTiming( 600
                ,{duration:speed==3? 700:speed==2?1200:1700})
            ,-1,false)
        ) 
      }
      ,[speed]
  )

 
  return ( 
 
    <Oval x={position_x} y={move_y}  width={steam_width} height={steam_height}
     opacity={0.4} 
     color="#ffffff" >
         
<BlurMask blur={60} style="normal" />
 
          </Oval> 
 
  



  );

};

export default Steam;