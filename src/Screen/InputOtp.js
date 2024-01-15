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

function InputOtp({ navigation }) {
  
  
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
      
      
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
          Input your OTP code sent via SMS
        </Text>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 100,
            padding: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor:"black",
              borderWidth:2,
              height: 65,
              width: 65,
              
            }}>
            <TextInput
            keyboardType='numeric'
              style={{ color: 'black', fontSize: 30,textAlign:'center',justifyContent:"center", padding: 5 }}>
               </TextInput>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor:"black",
              borderWidth:2,
              height: 65,
              width: 65,
             
            }}>
            
            <TextInput
            keyboardType='numeric'
              style={{ color: 'black', fontSize: 30,textAlign:'center',justifyContent:"center", padding: 5 }}>
             
            </TextInput>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor:"black",
              borderWidth:2,
              height: 65,
              width: 65,
              
            }}>
            
           <TextInput
            keyboardType='numeric'
              style={{ color: 'black', fontSize: 30,textAlign:'center',justifyContent:"center", padding: 5 }}>
             
            </TextInput>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor:"black",
              borderWidth:2,
              height: 65,
              width: 65,
              
            }}>
           
            <TextInput
            keyboardType='numeric'
              style={{ color: 'black', fontSize: 30,textAlign:'center',justifyContent:"center", padding: 5 }}>
             
            </TextInput>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:16,fontWeight:"bold",alignSelf:"center",marginTop:30}}>Resend OTP</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Root')}
          style={{
            alignItems: 'center',
            width: 180,
            backgroundColor: '#003d2b',
             height: 55,
            padding: 5,
            alignSelf: 'center',
            borderRadius: 25,
            marginTop: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              justifyContent:"center",
              fontSize: 20,
               fontWeight: 'bold',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
        </View>
      
    );
  }