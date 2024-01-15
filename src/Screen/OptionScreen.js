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

function OptionScreen({ navigation }) {
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
            onPress={() => navigation.navigate('CameraScreen')}
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
                style={{ width: 40, height: 40, alignSelf: 'center' }}
                source={require('./assets/cam.png')}></Image>
  
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Camera
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('Gallery')}
            style={{
               justifyContent: 'center',
              backgroundColor: '#003d2b',
              borderRadius: 20,
              width: 380,
              height: 85,
               marginTop: 20,
              padding:12,
              borderWidth: 2,
              borderColor: '#003d2b',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 40, height: 40, alignSelf: 'center' }}
                source={require('./assets/ga2.png')}></Image>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Gallery
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  