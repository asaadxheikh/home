import React from "react";

import { View ,Dimensions} from "react-native";
import Animated,{useAnimatedStyle,interpolate,diff}  from "react-native-reanimated";
   

import { 
    dist, 
    vec, 
  } from "@shopify/react-native-skia";
const WIDTH=Dimensions.get('screen').width
const HEIGHT=Dimensions.get('screen').height
const App=({
    SIZE,
    i,
    j,
    pointer_x,
    pointer_y
})=>{




//  const colors=['red','tomato','pink']
 const colors=['#666','#777','#555']
 const x = i * SIZE.width;
 const y = j * SIZE.height;

const R = 100;
  const origin = vec(x + SIZE.width / 2, y + SIZE.height / 2); 
   const pointer = vec(pointer_x.value, pointer_y.value); 
 
 const rStyle = useAnimatedStyle(() => {   
 
  return {
      transform: [
    //    {scale:pointer_x.value>i*SIZE.width&&pointer_x.value<i*SIZE.width+SIZE.width
    //     &&
    //     pointer_y.value>j*SIZE.height&&pointer_y.value<j*SIZE.height+SIZE.height
    //     ?2:1},
        {
          scale: pointer_x.value>0||pointer_y.value>0? interpolate(
            Math.sqrt(Math.pow((origin.x- pointer_x.value),2)+Math.pow((origin.y- pointer_y.value),2)),
                [0, R,R+1],
                [1.2,0.2,0.1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }
              ):0.6
              
        },
        {translateX:
          pointer_x.value>0 ?
          interpolate(
          origin.x- pointer_x.value ,
              [ -1* (R+10) ,  R*-1,0, R,R+10],
              [ -10* (origin.x- pointer_x.value) , -30,0, 30,-1* (origin.x- pointer_x.value)],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            )
          :0
          },
          // [ (pointer_x.value), -30,0, 30,-10*(origin.x-pointer_x.value)],

          {translateY:
            pointer_y.value>0?
            interpolate(
            origin.y- pointer_y.value ,
                [ -1*(R+10), R*-1,0, R ,R+10],
                [ -10* (origin.y- pointer_y.value)   , -50,0, 50, -10* (origin.y- pointer_y.value) ],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }
              )
            :0
            }
      ],
    };
  }, []);
 
    return( 
        
        <Animated.View 

        width={SIZE.width}
        height={SIZE.height}
        style={[{
          position:'absolute',
          top:y,
          left:x,
          borderRadius:10,
          backgroundColor:colors[Math.round(Math.random()*(colors.length-1))]
        },
         rStyle
        ]}
        >

            </Animated.View>
    )
    }




    export default App