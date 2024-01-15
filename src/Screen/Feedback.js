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



function Feedback({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text
          style={{
            color: '#003d2b',
            alignSelf: 'center',
            fontSize: 20,
            marginTop: 40,
          }}>
          Please give us Feedback
        </Text>
  
        <View
          style={{
            backgroundColor: 'white',
           
            width: 350,
            height: 55,
            marginTop: 50,
            borderWidth: 2,
            borderColor: 'black',
          }}>
          <TextInput
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              width: 350,
              height: 55,
              marginTop:5,
              justifyContent:"center",
           
              alignItems:"center",
              
            }}
            placeholder=" Title"></TextInput></View>
  
            <View
          style={{
            backgroundColor: 'white',
            padding: 10,
  
            width: 350,
            height: 200,
            marginTop: 30,
            borderWidth: 2,
            borderColor: 'black',
          }}>
          <TextInput
            style={{
              color: 'black',
             
              fontSize: 15,
              fontWeight: 'bold',
              width: 350,
              height: 200,
            }}
            placeholder=" write here....."></TextInput></View>
          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => Alert.alert('Your Response Has Been Submitted')}
              style={{
                alignItems: 'center',
                width: 170,
                backgroundColor: '#003d2b',
                height: 45,
                padding: 5,
                borderRadius: 20,
                marginTop: 40,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  textAlign: 'center',
                  padding: 5,
                  fontSize: 20,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        
      </View>
    );
  }
  