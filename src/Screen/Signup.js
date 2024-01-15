
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


function SignUp({ navigation }) {
 
    const [email, setemail] = useState('');
    const [uname, setuname] = useState('');
    const [pass, setpass] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    return (
      <View style={{ justifyContent: 'center', flex: 1, backgroundColor:"white"}}>
       <ImageBackground
          source={require('./assets/law.jpg')}
          style={{ height: 100, width: 100,alignSelf:"center" }}></ImageBackground>
        
          <View style={{ marginTop: 20, alignItems: 'center' }}>
  
          
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
                placeholder="   User name"
              value={uname}
              onChangeText={setuname}></TextInput>
              
           
  
           
             <TextInput
              style={{
                width: 330,
                color:"black",
                height: 55,
                borderColor:'black',
                borderWidth:2,
                justifyContent:"center",
                padding: 15,
                marginTop:13,
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
                borderColor:'black',
                borderWidth:2,
                justifyContent:"center",
                padding: 15,
                marginTop:13,
                marginLeft:10,
                marginBottom:10,
                
              }}
             placeholder="    Password"
              secureTextEntry={true}
              value={pass}
              onChangeText={setpass}
               ></TextInput>
              
  
            <TextInput
             style={{
                width: 330,
                color:"black",
                height: 55,
                borderColor:'black',
                borderWidth:2,
                justifyContent:"center",
                padding: 15,
                marginTop:13,
                marginLeft:10,
                marginBottom:10,
                
              }}
            placeholder="    Confirm Password"
              secureTextEntry={true}
              value={confirmPass}
              onChangeText={setconfirmPass}
               ></TextInput>
              
          </View>
  
         
            <TouchableOpacity
             onPress={() => Alert.alert("Your Account has been created Successfully")}
            
            
              style={{
                alignItems: 'center',
                justifyContent:"center",
                alignSelf:'center',
                width: 235,
                backgroundColor: '#003D2B',
                height: 55,
                padding: 5,
                borderRadius: 30,
                marginTop: 60,
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
                Create Account
              </Text>
            </TouchableOpacity>
          
  
          <View
            style={{ flexDirection: 'row', marginTop: 8, alignSelf: 'center' }}>
            <Text style={{ color: 'black' }}>Already got an account ? </Text>
            <Text
              style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        
      </View>
    );
            }