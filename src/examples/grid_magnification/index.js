import { Canvas,Rect,useValue } from "@shopify/react-native-skia";
import React from "react";
import { SafeAreaView, StatusBar, View,Dimensions } from "react-native";  
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';

  import Block from './block'
  import { useSharedValue } from 'react-native-reanimated';
const ROWS=20
const COLS=10

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const SIZE={
    width:width/COLS,
    height:height/ROWS
}

const rows = new Array(COLS).fill(0).map((_, i) => i);
const cols = new Array(ROWS).fill(0).map((_, i) => i);
const App=()=>{
  const pointer_x = useSharedValue(0);
  const pointer_y = useSharedValue(0);
  
 const gesture = Gesture.Pan()
  .onBegin(event => { 
    pointer_x.value=event.x
    pointer_y.value=event.y
  })
  .onUpdate(event => { 
    pointer_x.value=event.x
    pointer_y.value=event.y
  })
  .onFinalize((event) => {
    pointer_x.value=0
    pointer_y.value=0
  });
  

    return(

        <SafeAreaView style={{backgroundColor:'#000'}}>
            <StatusBar  barStyle={'light-content'}/>
            <View style={{
                width:'100%',
                height:'100%',
            }}>

<GestureDetector gesture={gesture} >
              
              
              <View style={{
                flex:1
              }}>


        {rows.map((_i, i) =>
            cols.map((_j, j) => {
              return (


               
            <Block  
            SIZE={SIZE}
            i={i}
            j={j}
            pointer_x={pointer_x}
            pointer_y={pointer_y}
            key={i+j}
            />
              );
            })
          )}


</View>
 
                </GestureDetector>

            </View>

        </SafeAreaView>
    )
}


export default App;