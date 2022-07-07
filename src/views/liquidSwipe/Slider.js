import React, { ReactElement, useEffect } from "react";
import { StyleSheet, View,Button,Dimensions } from "react-native";
import Slide from "./Slide";

 
 import {Canvas, Mask, Group,Path,
   Circle, Rect} from "@shopify/react-native-skia";
 

const { width, height } = Dimensions.get("screen");
 
const Slider = ({children,setIndex,index,prev,next}) => {
  

  return (

    <View>
        
               

               {children}
             
       
        {
          prev&&

          <View style={{
            position:'absolute',
            width:'100%',
            height:'100%'
          }}>

<Slide slide={prev} />

            </View> 
        }
        {
          next&&

          <View style={{
            position:'absolute',
            width:'100%',
            height:'100%'
          }}>

<Slide slide={next} />

            </View> 
        }
        
        <View style={{
          width:'100%',
          height:'100%',
          position:'absolute', 

        }}>
            <Canvas style={{ width: width, height: height }}>
    <Mask
     mode='luminance'
      mask={
        
        <Path
        path="M 0 0 L $ 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
        color="#666"
      />
        
      }
    >
      <Rect x={0} y={0} width={width} height={height}   />
    </Mask>
  </Canvas>

        </View>
   
    </View>
   
  );
};

export default Slider;