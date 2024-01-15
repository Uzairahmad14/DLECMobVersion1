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

function OtherScreen({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Fine', value: 'Fine' },
      { label: 'Court Fee', value: 'Court Fee' },
      { label: 'Legal Aid', value: 'Legal Aid' },
      { label: 'Help', value: 'Help' },
     
     
    ]);
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ marginBottom: 30 }}>
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
              placeholder="  Address"></TextInput>
  
            <DropDownPicker
              placeholder="Nature of Case"
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
  
            <TextInput
              style={{
                width: 370,
                backgroundColor: 'white',
                marginTop: 25,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 325,
                padding: 5,
  
                color: 'black',
              }}
              placeholder="  Discription"></TextInput>
  
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Your response has been suceesfully uploaded')
              }
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
              <Text style={{ color: 'white', textAlign: 'center',fontSize: 20,fontWeight:"bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }