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


function Home({ navigation }) {
    return (    
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
            backgroundColor: 'white',
            width: 380,
            height: 580,
            borderRadius: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppSelect')}
            style={{
              
              justifyContent: 'center',
              backgroundColor: '#003d2b',
              borderRadius: 20,
              width: 380,
              height: 85,
              
              padding:12,
              borderWidth: 2,
              borderColor: '#003d2b',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 40, height: 40, alignSelf: 'center',justifyContent:"center", }}
                source={require('./assets/wri.png')}></Image>
  
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 20,
                  textAlign: 'center',
                justifyContent:"center",
                  fontWeight: 'bold',
                }}>
                Create Application
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('Status')}
            style={{
            
              justifyContent: 'center',
              backgroundColor: '#003d2b',
              borderRadius: 20,
              width: 380,
               height: 85,
              
              padding:12,
              borderWidth: 2,
              marginTop: 20,
              borderColor: '#003d2b',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 40, height: 40, alignSelf: 'center',justifyContent:"center", }}
                source={require('./assets/status.png')}></Image>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  justifyContent:"center",
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Status
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Feedback')}
            style={{
             
              justifyContent: 'center',
              backgroundColor: '#003d2b',
              borderRadius: 20,
              width: 380,
              height: 85,
              
              padding:12,
              borderWidth: 2,
              marginTop: 20,
              borderColor: '#003d2b',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 40, height: 40, alignSelf: 'center',justifyContent:"center", }}
                source={require('./assets/complaints.png')}></Image>
              <Text
                style={{
                  color: 'white',
                  justifyContent:"center",
                  padding: 10,
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Feedback
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }