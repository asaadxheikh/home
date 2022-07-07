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
    useSharedValue, useDerivedValue,
    useAnimatedScrollHandler, Extrapolate, useAnimatedProps, interpolate, multiply,
    useAnimatedStyle, Easing, withTiming, withRepeat, withSpring, withDelay, withSequence
} from 'react-native-reanimated';
import Svg,
{
    G, Path, Defs, Stop,Line,Rect
} from 'react-native-svg' 
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Canvas ,LinearGradient,Rect as Recto} from '@shopify/react-native-skia';

 
const { width, height } = Dimensions.get('window');


const App = ({navigation}) => {

    const [gridData,setGridData]=
    useState([
        {
            name:'Smart Spotlight',
            key:1,
            status:true,
            backgroundColor:'rgb(238,107,99)',
            trackColor:'rgb(241,145,149)'
        },
        {
            name:'Smart AC',
            key:2,
            status:false,
            backgroundColor:'rgb(111,74,245)' ,
            trackColor:'rgb(157,119,235)'
        },
        {
            name:'Smart TV',
            key:3,
            status:false,
            backgroundColor:'rgb(238,107,99)' ,
            trackColor:'rgb(241,145,149)'
        },
        {
            name:'Smart Sound',
            key:4,
            status:false,
            backgroundColor:'rgb(238,107,99)' ,
            trackColor:'rgb(241,145,149)'

        }
    ]
)

const [trigger,setTrigger]=useState([])
 
    return (
        <>
            <StatusBar barStyle='dark-content' />

 
  <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',

            }}>
            <Canvas style={{
                flex:1
            }} >
                
                <Recto x={0} y={0} width={width} height={height}>
                <LinearGradient 
            start={{x: 0, y: 0}} end={{ x:100, y: height*0.9 }}
                colors={['rgb(250,223,222)','#fff', '#fff']}
            ></LinearGradient>
                </Recto>
            </Canvas>
            </View>
                <SafeAreaView style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width:'100%',
                        height:'15%', 
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:'8%',
                        justifyContent:'space-between'
                    }}>
                        <Text style={{
                            fontSize:32,
                            fontWeight:'500',
                        }}>
                            Hi, Asaad
                        </Text>

                        <View style={{
                            width:40,
                            aspectRatio:1,
                            borderRadius:20, 
                            justifyContent:'center'
                            
                        }}>
                            <Ionicons
                                name='person-circle-outline'
                                size={40}
                                color='#777'
                            />

                        </View>

                    </View>
                    <View style={{
                        width:'100%',
                        height:'70%', 
                        paddingHorizontal:'8%'
                    }}>
                        <View style={{
                            width:'100%',
                            height:'100%',
                            borderRadius:20,
                            backgroundColor:'#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,  
                        }}>

                            <FlatList
                            data={gridData}
                            columnWrapperStyle={{
                                justifyContent:'space-evenly',   
                            }}
                             ListHeaderComponent={
                                 ()=>{
                                     return(
                                         <View style={{
                                             width:'100%',
                                             flexDirection:'row',
                                             justifyContent:'space-between',
                                             paddingHorizontal:15,
                                             paddingVertical:10
                                         }}>

                                             <View>
                                                 <Text style={{
                                                     fontSize:16,
                                                     color:'grey',
                                                     fontWeight:'500'
                                                 }}>
                                                     A total of 4 devices
                                                 </Text>
                                                 <Text style={{
                                                     fontSize:20,
                                                     color:'#222',
                                                     fontWeight:'600'
                                                 }}>
                                                     Living Room
                                                 </Text>
                                                 </View>


                                         <SimpleLineIcons
                                         name='options'
                                         size={22}
                                         color='grey'

                                         />

                                             </View>
                                     )
                                 }
                             }
                            numColumns={2}
                            
                            renderItem={
                                ({item,index})=>{

                                    return(
                                        <TouchableOpacity style={{
                                            width:'44%',
                                            height:200  ,
                                            marginVertical:10, 
                                            borderRadius:20,
                                            
                                            borderWidth:item.status?null: 1,
                                            backgroundColor:item.status?item.backgroundColor:null
                                        }}
                                        onPress={
                                            ()=>{
                                                if(item.key==2)
                                                navigation.navigate('smartac')
                                            }
                                        }
                                        >
                                            <View style={{
                                                height:'70%', 
                                                paddingHorizontal:20,
                                                paddingVertical:15,
                                                justifyContent:'space-around'
                                            }}>

                                                {
                                                    item.key==1?
                                                    
                                                <Entypo
                                                name='light-up'
                                                size={25}
                                                color={item.status?'#fff':"#222"}
                                                />
                                                :
                                                item.key==2?
                                                <Svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Rect x="0.5" y="0.5" width="24" height="14" rx="2.5" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="9.90186" x2="24.7253" y2="9.90186" stroke={item.status?'#fff':"#222"}/>
                                                <Line x1="21" y1="4.5" x2="22.3736" y2="4.5" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="-0.5" x2="6" y2="-0.5" transform="matrix(0.206733 0.978397 -0.797226 0.60368 2 17)" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="-0.5" x2="6" y2="-0.5" transform="matrix(0.206733 0.978397 -0.797226 0.60368 11.8901 17)" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="-0.5" x2="6" y2="-0.5" transform="matrix(0.206733 0.978397 -0.797226 0.60368 16.8352 17)" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="-0.5" x2="6" y2="-0.5" transform="matrix(0.206733 0.978397 -0.797226 0.60368 21.7803 17)" stroke={item.status?'#fff':"#222"}/>
                                                <Line y1="-0.5" x2="6" y2="-0.5" transform="matrix(0.206733 0.978397 -0.797226 0.60368 6.94507 17)" stroke={item.status?'#fff':"#222"}/>
                                                </Svg>
                                                 
                                                :
                                                item.key==3?
                                                <Ionicons
                                                name='ios-tv-outline'
                                                size={25}
                                                color={item.status?'#fff':"#222"}
                                                /> 
                                                 : 
                                                 <SimpleLineIcons
                                                 name='screen-smartphone'
                                                 size={25}
                                                 color={item.status?'#fff':"#222"}
                                                 />
                                }

                                                <Text style={{ 
                                                    width:67,
                                                    fontSize:16,
                                                 color:item.status?'#fff':"#222"
                                                }}>
                                                    {item.name}
                                                </Text>
                                                </View>
                                                <View style={{
                                                height:'30%',
                                                justifyContent:'center',
                                                paddingHorizontal:20
                                            }}>
                                                <Switch
                                                value={item.status}
                                                trackColor={{true:item.trackColor}}
                                                onValueChange={
                                                    (value)=>{
                                                         
                                                        var gd=gridData
                                                      gd.find(obj=>obj.key==item.key).status=value 
                                                       setGridData(gd)
                                                       setTrigger(tt=>[trigger])
                                                    }
                                                }
                                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} 
                                                />
                                                    </View>

                                            </TouchableOpacity>
                                    )
                                }
                            }
                            />
                                
                                
                        </View>

                    </View>
                    <View style={{
                        width:'100%',
                        height:'15%', 
                    }}>

                    </View>


                </SafeAreaView> 


        </>
    )
}

export default App