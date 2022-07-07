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
 

import Slider from "./Slider";
import Slide from "./Slide";
import {Canvas, Mask, Group, Circle, Rect} from "@shopify/react-native-skia";



const { width, height } = Dimensions.get('window');


const slides = [
    {
      color: "#F2A1AD",
      title: "Dessert Recipes",
      description:
        "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
    },
    {
      color: "#0090D6",
      title: "Healthy Foods",
      description:
        "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
   
    },
    {
      color: "#69C743",
      title: "Easy Meal Ideas",
      description:
        "explore recipes by food type, preparation method, cuisine, country and more",
      
    },
   
  ];
  
const App = ({navigation}) => {

     
    const r1 = 120;

    

 
    const [index, setIndex] = useState(0);
    const prev = slides[index - 1];
    const next = slides[index + 1];
    return (
   <Slider
   setIndex={setIndex}
   index={index}
   prev={slides[index-1]}
   next={slides[index+1]}
   >

   <Slide
   slide={slides[index]}
   >

    </Slide>

   


    </Slider>
    );
}

export default App