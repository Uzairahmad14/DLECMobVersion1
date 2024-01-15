import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  StyleSheet,
  Button
} from 'react-native';

function Logo({navigation}) {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:"center" }}>
      <ImageBackground
          source={require('./assets/law.jpg')}
          style={{ height: 180, width: 200, justifyContent:"center" }}></ImageBackground>
        
        <Text
          style={{
            fontSize: 30,
            padding:2,
            fontWeight: 'bold',
            marginTop: 25,
            color:"#003D2B"
          
          }}>
          DLEC
        </Text>
        <Text style={{textAlign:"center",fontSize:22,color:"#003D2B",padding:1,fontWeight:"bold"}}>
  District Legal Empowerment Committee
  </Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Screen2")}
          style={{backgroundColor:'#003D2B',width:280,height:52,color:"white",borderRadius:50,marginTop:130,flexDirection:"row",borderWidth:2,borderColor:"#003D2B"}}>
            <Text style={{color:"white",fontSize:20,textAlign:"center",marginLeft:40, fontWeight: 'bold',alignSelf:"center"}}>Get Started</Text>
            <Image style={{width:20,height:20,alignSelf:"center",marginLeft:60}}
               source={require('./assets/arn.png')}
             ></Image>
            </TouchableOpacity>
  
      </View>
    );
  }
  
  
  
