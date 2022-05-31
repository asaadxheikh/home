
import React ,{useEffect,useState}from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue, 
  withDelay,
  withSpring,
  withTiming,Easing, color, withRepeat
} from 'react-native-reanimated';   
import {Image} from 'react-native'
import { BlurView } from "@react-native-community/blur";
 
const Smoke = ({ index, progress,N }) => {
 
    const squareWidth=useSharedValue(10)
    const squareHeight=useSharedValue(4)
    const scaling=useSharedValue(0) 
  
 
 

  const rStyle = useAnimatedStyle(() => {
    return {
        transform: [
            {
                scale:scaling.value, 
            }
          ],
        
    };
  });


  useEffect(()=>{  

    // squareWidth.value= withDelay(200, withSpring(1))
     
    // squareWidth.value= withDelay(8000, withSpring(5))
   scaling.value=withRepeat(withDelay(500,withTiming(8,{
       duration:3000
   })),-1,false)
    
  }
  ,[]
  )
 
  return (

    <Animated.View  
    style={[{
        width:100,
        height:100, 
        position:"absolute",   
    },
    rStyle
]} 
    >

        <Image  
        source={require('../media/1.png')}
        resizeMode="center"
        style={{
            width:'100%', 
            height:'100%'
        }}
        />
         
    {/* <BlurView
    style={[{
        width:'100%',
        height:'100%',
        borderRadius:50,
    }
]} 
    blurType="light"
    blurAmount={1} 
    reducedTransparencyFallbackColor="white"
  /> */}

</Animated.View>
  );
};

export default Smoke;