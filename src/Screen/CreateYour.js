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


function CreateYour({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
       
          <View style={{ marginTop: 30, }}>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 25,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 60,
                padding: 5,
                color: 'black',
              }}
              placeholder="  First Name : Uzair "></TextInput>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 30,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 60,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  Last Name : Name "></TextInput>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 30,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 60,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  CNIC: 37405-1448948-5"></TextInput>
  
              <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 30,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 60,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  Phone Number: 03334478603 "></TextInput>
  
  <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 30,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 60,
                padding: 5,
  
                color: 'black',
              }}
              placeholder=" Email: auzair23@gmail.com "></TextInput>
  
  
              
            
          </View>
        
        <View style={{ alignItems:"center", padding: 5, margin: 5 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Verify')}
            style={{
              alignItems: 'center',
              width: 180,
              alignSelf: 'center',
              backgroundColor: '#003D2B',
              height: 55,
              padding: 5,
              borderRadius: 30,
              marginTop: 45,
              borderWidth: 2,
              marginRight: 10,
              borderColor: '#003D2B',
            }}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                padding: 5,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Verify
            </Text>
          </TouchableOpacity>
  
          
        </View>
        </View>
      
    );
  }