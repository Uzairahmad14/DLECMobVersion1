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




function Authentication({ navigation }) {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
          Please input your CNIC number{' '}
        </Text>
        <TextInput
          style={{
            width: 350,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 25,
            height: 55,
            padding: 5,
  
            color: 'black',
          }}
          placeholder=" CNIC"></TextInput>
  
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
          Please input your Mobile number
        </Text>
        <TextInput
          style={{
            width: 350,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            marginTop: 25,
            alignSelf: 'center',
            height: 55,
            padding: 5,
  
            color: 'black',
          }}
          keyboardType="numeric"
          placeholder=" Mobile Number"></TextInput>
  
        <TouchableOpacity
          onPress={() => navigation.navigate('InputOtp')}
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
             justifyContent:"center",
              textAlign: 'center',
              padding: 5,
               fontWeight: 'bold',
              fontSize: 20,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }