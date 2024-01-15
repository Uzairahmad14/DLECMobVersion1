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




function AppSelect({ navigation }) {
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
            onPress={() => navigation.navigate('CreateYour')}
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
                source={require('./assets/cay1.png')}></Image>
  
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Create Application For Yourself
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateScreen')}
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
                source={require('./assets/fr1.png')}></Image>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Create Application for Others
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('OptionScreen')}
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
                source={require('./assets/up1.png')}></Image>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Upload Application
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }