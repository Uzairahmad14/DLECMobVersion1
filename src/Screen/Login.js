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

function Login({ navigation, route }) {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    
  
    
    
    return (
      <View style={{ justifyContent: 'center', flex: 1,backgroundColor:"white" }}>
      <ImageBackground
          source={require('./assets/law.jpg')}
          style={{ height: 100, width: 100,marginTop:16,alignSelf:"center" }}></ImageBackground>
        
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
  
          <View style={{ alignItems: 'center',marginTop:50 }}>
          
            <TextInput
              style={{
                width: 330,
                color:"black",
                height: 55,
                borderColor:'black',
                borderWidth:2,
                justifyContent:"center",
                padding: 15,
                marginTop:10,
                marginLeft:10,
                marginBottom:10,
              
                
              }}
              placeholder="     Email"
              onChangeText={setemail}
  
              value={email}></TextInput>
              
  
  
              
            <TextInput
              style={{
               width: 330,
               
                color:"black",
                height: 55,
                justifyContent:"center",
                borderColor:'black',
                borderWidth:2,
                padding: 15,
                marginTop:10,
                marginLeft:10,
                marginBottom:10,
                
                
              }}
               placeholder="     Password"
              secureTextEntry={true}
              onChangeText={setpass}
              value={pass}></TextInput>
             
  
  
            <TouchableOpacity
           
            onPress={() => navigation.navigate('Authentication')}
           
              style={{
                alignItems: 'center',
                width: 180,
                backgroundColor: '#003D2B',
                height: 55,
                padding: 5,
                borderRadius: 25,
                marginTop:60,
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
                Login
              </Text>
            </TouchableOpacity>
          </View>
  
          <Text style={{ color: 'greyblack', alignSelf: 'center', marginTop: 10 }}>
            Forgot Password
          </Text>
          <View
            style={{ marginTop: 5, flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: 'black' }}>Don't have an account ? </Text>
            <Text
              style={{ color: 'black', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('SignUp')}>
              SignUp
            </Text>
          </View>
        
      </View>
    );
  }