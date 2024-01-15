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


function CreateScreen({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Islamabad', value: 'Islamabad' },
      { label: 'Rawalpindi', value: 'Rawalpindi' },
      { label: 'Multan', value: 'Multan' },
      { label: 'Gujranwala', value: 'Gujranwala' },
      { label: 'Faisalabad', value: 'Faisalabad' },
     
    ]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                borderColor: '#003d2b',
                borderWidth: 2,
                marginTop: 25,
                height: 55,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  First Name"></TextInput>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                borderColor: '#003d2b',
                borderWidth: 2,
                marginTop: 25,
                height: 60,
                padding: 5,
                color: 'black',
              }}
              placeholder="  Last Name"></TextInput>
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                borderColor: '#003d2b',
                borderWidth: 2,
                marginTop: 25,
                height: 60,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  CNIC"></TextInput>
  
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
              placeholder="  Phone Number"></TextInput>
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
              placeholder="  Email"></TextInput>
  
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
              placeholder="  City"></TextInput>
  
              <DropDownPicker
              placeholder="District"
          style={{
            flex: 1,
            marginTop: 25,
            backgroundColor: 'white',
            color: 'black',
            justifyContent: 'center',
            padding: 5,
            borderColor: '#003d2b',
            borderWidth: 2,
            height: 60,
            alignSelf: 'center',
            width: 370,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
  
          
  
            <TouchableOpacity
              onPress={() => navigation.navigate('OtherScreen')}
              style={{
                backgroundColor: '#003d2b',
                borderRadius: 30,
                color: 'white',
                marginTop: 60,
                justifyContent: 'center',
                width: 180,
                height: 55,
                alignSelf: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                borderWidth: 2,
                borderColor: '#003d2b',
              }}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 20,fontWeight:"bold" }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }