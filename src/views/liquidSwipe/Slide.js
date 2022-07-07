 
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"; 

const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginBottom: 16, 
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center", 
  },
});
 

const Slide = ({
  slide: { picture, color, title, description },
}) => {
   
  return (
    <>
       
              <View style={{
                width:'100%',
                height:'100%',
                backgroundColor:color,
                justifyContent:'center'
            }}>
 
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View> 
    </>
  );
};

export default Slide;