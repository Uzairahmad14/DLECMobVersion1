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


function Screen2({navigation}){
    return(
      <View style={{flex:1,backgroundColor:"#003d2b"}}>
       
  
      <View style={{borderRadius:50,backgroundColor:"white",width:"auto",height:520,marginTop:300}}>
       <View>
            <Text
              style={{
                color: '#003D2B',
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              ᗯEᒪᑕOᗰE
            </Text>
          </View>
      
   <TouchableOpacity
           
            onPress={() => navigation.navigate('Login')}
           
              style={{
                alignItems: 'center',
                alignSelf:"center",
                width: 200,
                backgroundColor: '#003D2B',
                height: 55,
                padding: 5,
                borderRadius: 30,
                marginTop: 70,
                borderWidth:2,
                  borderColor:"#003D2B",
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  textAlign: 'center',
                  justifyContent:"center",
                  padding: 5,
                  fontSize: 20,
                  fontWeight: 'bold',
                  
                }}>
                SignIn
              </Text>
            </TouchableOpacity>
  
             <TouchableOpacity
           
            onPress={() => navigation.navigate('SignUp')}
           
              style={{
                alignItems: 'center',
                width: 200,
                alignSelf:"center",
                backgroundColor: '#003D2B',
                height: 55,
                padding: 5,
                borderRadius: 30,
                marginTop: 35,
                borderWidth:2,
                borderColor:"#003D2B",
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  textAlign: 'center',
                  justifyContent:"center",
                  padding: 5,
                  fontSize: 20,
                  fontWeight: 'bold',
                  
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
  
      
      
      </View>
      
      
      
      </View>
    );
  }