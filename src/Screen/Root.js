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

function Root({ navigation }){
    return(
      <Tab.Navigator>
      <Tab.Screen name= "Home" component={Home} options={{
              headerShown: false,
              
            }}  />
      <Tab.Screen name= "Feedback" component={Feedback} />
      <Tab.Screen name= "Status" component={Status} />
      
         
      </Tab.Navigator>
  
    );
  }