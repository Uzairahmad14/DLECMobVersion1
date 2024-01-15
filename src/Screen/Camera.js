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





function CameraScreen({navigation}){

    const [type, setType] = useState(CameraType.back);
   const [permission, requestPermission] = Camera.useCameraPermissions();
 
   if (!permission) {
     // Camera permissions are still loading
     return <View />;
   }
 
   if (!permission.granted) {
     // Camera permissions are not granted yet
     return (
       <View style={styles.container}>
         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
         <Button onPress={requestPermission} title="grant permission" color="#003d2b" />
       </View>
     );
   }
 
   function toggleCameraType() {
     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
   }
   return(
     <View style={styles.con}>
       <Camera style={styles.camera} type={type}>
         <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
             <Text style={styles.text}>Flip Camera</Text>
           </TouchableOpacity>
         </View>
       </Camera>
     </View>
 
   );
 }

 const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 28,
  },
  tableHeader: {
    backgroundColor: '#D3D3D3',
    fontWeight: 'bold',
    color: 'white',
  },
  titleHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
   con: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
   
});