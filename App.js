import { PermissionsAndroid, Platform } from 'react-native';
import { format } from 'date-fns';


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
  Button, SafeAreaView,
  Dimensions,
  Modal
} from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { RadioButton } from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

import { Table, Row } from 'react-native-table-component';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';


import axios from 'axios';
import Axios from 'axios';
import PureChart from 'react-native-pure-chart';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLegend, VictoryTheme, VictoryGroup } from 'victory-native';


function Screen2({ navigation ,route}) {
  const { width, height } = Dimensions.get('screen');

  return (
    <View style={{ width: width, height: height, backgroundColor: '#003d2b' }}>
     
      <View style={{ borderRadius: 50, backgroundColor: 'white', width: 'auto', height: 520, marginTop: height * 0.3 }}>
        <View>
          <Text style={{ color: '#003D2B', fontSize: 30, fontWeight: 'bold', marginTop: 20, alignSelf: 'center' }}>
            ᗯEᒪᑕOᗰE
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 200,
            backgroundColor: '#003D2B',
            height: 55,
            padding: 5,
            borderRadius: 30,
            marginTop: 70,
            borderWidth: 2,
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
            SignIn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            alignItems: 'center',
            width: 200,
            alignSelf: 'center',
            backgroundColor: '#003D2B',
            height: 55,
            padding: 5,
            borderRadius: 30,
            marginTop: 35,
            borderWidth: 2,
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
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function AdminLogin({navigation,route}){
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //http://10.0.2.2:8000

  const handleLogin = async () => {
    try {
      console.log('Email:', email); // Add this line
    console.log('Password:', password); // Add this line
      const response = await fetch('http://10.0.2.2:8000/admin/signin', {
        method: 'POST',
        headers: {
        
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Use lowercase "email"
          password: password, // Use lowercase "password"
        }),
        
      });

      const data = await response.json();
      console.log('Server Response:', data);

      if (response.ok) {
        //if (data.adminId) { // Accessing AdminId from the server response
          //const userId = data.adminId;
          //console.log('Admin ID:', userId);

          // Handle successful login, for example, navigate to the home screen
          navigation.navigate('LJCP');
        
      } else {
        // Handle login error here
        Alert.alert('Login failed', data.error);
      }
    } catch (error) {
      console.log('Network request failed:', error);
      // Handle other errors, e.g., show an error message to the user
      Alert.alert('Network request failed', 'Please try again later.');
    }
  };



  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./assets/law.jpg')}
        style={{ height: height * 0.15, width: width * 0.3, marginTop: height * 0.010, alignSelf: 'center' }}
      ></ImageBackground>

      <View>
        <Text style={{ color: '#003D2B', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.02, alignSelf: 'center' }}>
          ᗯEᒪᑕOᗰE
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: height * 0.05 }}>
        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            padding: width * 0.04,
            marginTop: height * 0.01,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 2,
            padding: width * 0.04,
            marginTop: height * 0.02,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        ></TextInput>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width * 0.9,
            height: height * 0.09,
            backgroundColor: '#003D2B',

            padding: 5,
            // borderRadius: height * 0.05,
            marginTop: height * 0.06,
            borderWidth: 2,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>


    </View>

  );

}



function EvaluatorLogin({navigation , route}){
  const { width, height } = Dimensions.get('window');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  //http://10.0.2.2:8000
  const handleLogin = async () => {
    try {
      console.log('Email:', Email); // Add this line
    console.log('Password:', Password); // Add this line
      const response = await fetch('http://10.0.2.2:8000/evaluator/signin', {
        method: 'POST',
        headers: {
        
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: Email,
          Password: Password,
        }),
      });

      const data = await response.json();
        console.log('Server Response:', data);

        if (response.ok) {
            if (data.evaluatorId && data.evaluatorDistrict) {
                const userId = data.evaluatorId;
                const userDistrict =data.evaluatorDistrict;
                console.log('evaluator ID:', userId);
                console.log('evaluator District:', userDistrict);

                navigation.navigate('HomeScreen', { evaluatorId: userId, evaluatorDistrict : userDistrict });
            } else {
                console.log('evaluator ID not found in the response.');
            }
        } else {
            Alert.alert('Login failed', data.error);
        }
    } catch (error) {
        console.log('Network request failed:', error);
        Alert.alert('Network request failed', 'Please try again later.');
    }
};



  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./assets/law.jpg')}
        style={{ height: height * 0.15, width: width * 0.3, marginTop: height * 0.010, alignSelf: 'center' }}
      ></ImageBackground>

      <View>
        <Text style={{ color: '#003D2B', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.02, alignSelf: 'center' }}>
          ᗯEᒪᑕOᗰE
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: height * 0.05 }}>
        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            padding: width * 0.04,
            marginTop: height * 0.01,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Email"
          onChangeText={setEmail}
          value={Email}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 2,
            padding: width * 0.04,
            marginTop: height * 0.02,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={Password}
        ></TextInput>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width * 0.9,
            height: height * 0.09,
            backgroundColor: '#003D2B',

            padding: 5,
            // borderRadius: height * 0.05,
            marginTop: height * 0.06,
            borderWidth: 2,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>


    </View>

  );

}


function AdvocateLogin({navigation, route}){
  const { width, height } = Dimensions.get('window');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  //http://10.0.2.2:8000
  const handleLogin = async () => {
    try {
      console.log('Email:', Email);
      console.log('Password:', Password);
  
      const response = await fetch('http://10.0.2.2:8000/Consultant/consultant-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdWx0YW50SWQiOiI2NTYxY2QzNjU1YWIwMDllNjNkN2E0OTkiLCJpYXQiOjE3MDE2ODQ2MjJ9.ZhU8YW98QAluKfnDBL7mPy3RC3Dl7KeQpfklfnfZI8Y',
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });
  
      const data = await response.json();
      console.log('Server Response:', data);
  
      if (response.ok) {
        if (data.consultantId) {
          const userId = data.consultantId;
          console.log('consultant ID:', userId);
  
          navigation.navigate('AdvocateScreen', { consultantId: userId });
        } else {
          console.log('consultant ID not found in the response.');
        }
      } else {
        Alert.alert('Login failed', data.error);
      }
    } catch (error) {
      console.log('Network request failed:', error);
      Alert.alert('Network request failed', 'Please try again later.');
    }
  };
  


  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./assets/law.jpg')}
        style={{ height: height * 0.15, width: width * 0.3, marginTop: height * 0.010, alignSelf: 'center' }}
      ></ImageBackground>

      <View>
        <Text style={{ color: '#003D2B', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.02, alignSelf: 'center' }}>
          ᗯEᒪᑕOᗰE
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: height * 0.05 }}>
        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            padding: width * 0.04,
            marginTop: height * 0.01,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Email"
          onChangeText={setEmail}
          value={Email}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 2,
            padding: width * 0.04,
            marginTop: height * 0.02,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={Password}
        ></TextInput>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width * 0.9,
            height: height * 0.09,
            backgroundColor: '#003D2B',

            padding: 5,
            // borderRadius: height * 0.05,
            marginTop: height * 0.06,
            borderWidth: 2,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>


    </View>

  );

}





function Choose({ navigation }) {
  const [checked, setChecked] = useState(''); // Initialize with an empty string

  const handleRadioButtonChange = (value) => {
    setChecked(value);
  };

  const handleProceed = () => {
    // Handle navigation based on the selected role
    if (checked === 'Applicant') {
      navigation.navigate('Screen2', { role: 'Applicant' });
    } else if (checked === 'Evaluator') {
      navigation.navigate('EvaluatorLogin', { role: 'Evaluator' });
    } else if (checked === 'Admin') {
      navigation.navigate('AdminLogin', { role: 'Admin' });

    }
    else if (checked === 'Advocate') {
      navigation.navigate('AdvocateLogin', { role: 'consultant' });
      
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#003d2b',
          borderRadius: 10,
          width: 250,
          height: 50,
          justifyContent: 'center',
        }}>
        <RadioButton
          value="Applicant"
          status={checked === 'Applicant' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioButtonChange('Applicant')}
          color="white"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 45,
            color: 'white',
          }}>
          Applicant
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#003d2b',
          borderRadius: 10,
          width: 250,
          marginTop:15,
          height: 50,
          justifyContent: 'center',
        }}>
        <RadioButton
          value="Evaluator"
          status={checked === 'Evaluator' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioButtonChange('Evaluator')}
          color="white"
        />
        <Text style={{ fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'white', }}>
          DLEC Member
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#003d2b',
          borderRadius: 10,
          width: 250,
           marginTop:15,
          height: 50,
          justifyContent: 'center',
        }}>
        <RadioButton
          value=" Admin"
          status={checked === 'Admin' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioButtonChange('Admin')}
          color="white"
        />
        <Text style={{  fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 80,
            color: 'white', }}>
          LJCP
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#003d2b',
          borderRadius: 10,
          width: 250,
          marginTop: 15,
          height: 50,
          justifyContent: 'center',
        }}>
        <RadioButton
          value="Advocate"
          status={checked === 'Advocate' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioButtonChange('Advocate')}
          color="white"
        />
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
          color: 'white',
        }}>
          Advocate
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleProceed}
        style={{
          backgroundColor: '#003d2b',
          borderRadius: 10,
          width: 300,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
}








function LoginScreen({ navigation, route }) {

  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //http://10.0.2.2:8000
  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/signin', {
        method: 'POST',
        headers: {
        
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      const data = await response.json();
      console.log('Server Response:', data);

      if (response.ok) {
        if (data.applicantId) { // Accessing applicantId from the server response
          const userId = data.applicantId;
          console.log('Applicant ID:', userId);

          // Handle successful login, for example, navigate to the home screen
          navigation.navigate('Root', { applicantId: userId });
        } else {
          console.log('Applicant ID not found in the response.');
        }
      } else {
        // Handle login error here
        Alert.alert('Login failed', data.error);
      }
    } catch (error) {
      console.log('Network request failed:', error);
      // Handle other errors, e.g., show an error message to the user
      Alert.alert('Network request failed', 'Please try again later.');
    }
  };



  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./assets/law.jpg')}
        style={{ height: height * 0.15, width: width * 0.3, marginTop: height * 0.010, alignSelf: 'center' }}
      ></ImageBackground>

      <View>
        <Text style={{ color: '#003D2B', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.02, alignSelf: 'center' }}>
          ᗯEᒪᑕOᗰE
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: height * 0.05 }}>
        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            padding: width * 0.04,
            marginTop: height * 0.01,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            color: 'black',
            height: height * 0.09,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 2,
            padding: width * 0.04,
            marginTop: height * 0.02,
            //marginLeft: width * 0.03,
            marginBottom: height * 0.01,
          }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        ></TextInput>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width * 0.9,
            height: height * 0.09,
            backgroundColor: '#003D2B',

            padding: 5,
            // borderRadius: height * 0.05,
            marginTop: height * 0.06,
            borderWidth: 2,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: 'greyblack', alignSelf: 'center', marginTop: height * 0.02 }}>Forgot Password</Text>
      <View style={{ marginTop: height * 0.005, flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={{ color: 'black' }}>Don't have an account ? </Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }} onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </View>
  );
}



function SignUp({ route, navigation }) {
  const { width, height } = Dimensions.get('window');

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [CNIC, setcnic] = useState('');
  const [phonenum, setphonenum] = useState('');
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  //10.0.2.2:8000
  // ... (your other code)

  const createAccount = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: fname,
          LastName: lname,
          CNIC,
          PhoneNumber: phonenum,
          Email,
          Password,
        }),
      });

      const data = await response.text(); // Get the plain text response
      console.log('Received data:', data);

      // Handle successful signup and pass the updated user data to handleSignUp

      // Navigate to the Login screen with the updated user data
      navigation.navigate('Login');
    } catch (error) {
      console.log('Network request failed:', error);
      // Handle signup error here, e.g., show an error message to the user
    }
  };



  return (
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>


      <View style={{ marginTop: height * 0.01, alignItems: 'center' }}>
        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
            marginTop: height * 0.01,
          }}
          placeholder="   First name"
          value={fname}
          onChangeText={(text) => setfname(text)}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
            marginTop: height * 0.015,
          }}
          placeholder="   Last name"
          value={lname}
          onChangeText={(text) => setlname(text)}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: height * 0.015,
            height: height * 0.08,
            padding: width * 0.04,
            color: 'black',
          }}
          placeholder=" CNIC"
          value={CNIC}
          onChangeText={(text) => setcnic(text)}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            marginTop: height * 0.015,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
            color: 'black',
          }}
          keyboardType="numeric"
          placeholder=" Mobile Number"
          value={phonenum}
          onChangeText={(text) => setphonenum(text)}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            marginTop: height * 0.015,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
          }}
          placeholder="     Email"
          onChangeText={(text) => setemail(text)}
          value={Email}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            marginTop: height * 0.015,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
          }}
          placeholder="    Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={(text) => setpassword(text)}
        ></TextInput>

        <TextInput
          style={{
            width: width * 0.9,
            backgroundColor: 'white',
            borderColor: '#003d2b',
            borderWidth: 2,
            marginTop: height * 0.015,
            alignSelf: 'center',
            height: height * 0.08,
            padding: width * 0.04,
          }}
          placeholder="    Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setconfirmPassword(text)}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={createAccount}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: width * 0.9,
          backgroundColor: '#003D2B',
          height: height * 0.08,
          padding: 5,
          //borderRadius: height * 0.05,
          marginTop: height * 0.04,

          borderWidth: 2,
          borderColor: '#003D2B',
        }}
      >
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            padding: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: height * 0.003, alignSelf: 'center' }}>
        <Text style={{ color: 'black' }}>Already got an account ? </Text>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
  );
}


function LogoScreen({ navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        source={require('./assets/law.jpg')}
        style={{ height: height * 0.3, width: width * 0.4, justifyContent: 'center' }}
      ></ImageBackground>

      <Text
        style={{
          fontSize: 30,
          padding: 2,
          fontWeight: 'bold',
          marginTop: height * 0.05,
          color: '#003D2B',
        }}>
        DLEC
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 22, color: '#003D2B', padding: 1, fontWeight: 'bold' }}>
        District Legal Empowerment Committee
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Choose')}
        style={{
          backgroundColor: '#003D2B',
          width: width * 0.8,
          height: height * 0.08,
          color: 'white',
          borderRadius: height * 0.04,
          marginTop: height * 0.10,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#003D2B',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            marginLeft: width * 0.1,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Get Started
        </Text>
        <Image
          style={{ width: width * 0.04, height: width * 0.04, alignSelf: 'center', marginLeft: width * 0.25 }}
          source={require('./assets/arn.png')}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}




function Home({ route, navigation }) {
  const { width, height } = Dimensions.get('window');
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: height * 0.02,
          backgroundColor: 'white',
          width: width * 0.95,
          height: height * 0.8,
          borderRadius: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('AppSelect', { userId: userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: width * 0.95,
            height: height * 0.15,
            padding: width * 0.03,
            borderWidth: 2,
            borderColor: '#003d2b',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: width * 0.1, height: width * 0.1, alignSelf: 'center' }} source={require('./assets/writing.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: width * 0.025,
                fontSize: width * 0.05,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
               Application
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Status', { userId: userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: width * 0.95,
            height: height * 0.15,
            padding: width * 0.03,
            borderWidth: 2,
            marginTop: height * 0.03,
            borderColor: '#003d2b',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: width * 0.1, height: width * 0.1, alignSelf: 'center' }} source={require('./assets/sta.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: width * 0.025,
                fontSize: width * 0.05,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Status
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Feedback', { userId: userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: width * 0.95,
            height: height * 0.15,
            padding: width * 0.03,
            borderWidth: 2,
            marginTop: height * 0.03,
            borderColor: '#003d2b',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: width * 0.1, height: width * 0.1, alignSelf: 'center' }} source={require('./assets/feedback.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: width * 0.025,
                fontSize: width * 0.05,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Feedback
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Feedback({ navigation, route }) {
  const { userId } = route.params;

  console.log('Applicant ID in Feedback Screen:', userId);

  const { width, height } = Dimensions.get('window');
  const [openDistrict, setOpenDistrict] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch('http://10.113.76.119:8000/api/districts/dis');
        if (response.ok) {
          const data = await response.json();
          const formattedDistricts = data.map((district) => ({
            label: district.Name,
            value: district._id,
          }));
          setDistricts(formattedDistricts);
        } else {
          console.error('Error fetching district data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDistricts();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://10.113.76.119:8000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApplicantId: userId, // Use userId as the applicantId
          District: selectedDistrict,
          Description: description,
        }),
      });

      if (response.ok) {
        // Feedback submitted successfully
        console.log('Feedback submitted successfully.');
        // Optionally, you can navigate the user to a success screen or perform other actions.
      } else {
        const errorData = await response.json();
        console.error('Failed to submit feedback:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text
        style={{
          color: '#003d2b',
          alignSelf: 'center',
          fontSize: width * 0.08,
          marginTop: height * 0.04,
        }}
      >
         Feedback
      </Text>

     
        <DropDownPicker
          placeholder="Select District"
          style={{
            width: 370,
            backgroundColor: 'white',
            marginTop: 25,
            borderColor: '#003d2b',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf:'center',
            height: 55,
            padding: 5,
            color: 'black'
          }}
          items={districts}
          open={openDistrict}
          value={selectedDistrict}
          setOpen={setOpenDistrict}
          setValue={(value) => {
            setSelectedDistrict(value);
            // Fetch cities for the selected district
          }}
        />
      

      
        <TextInput
          style={{
            width: 370,
            backgroundColor: 'white',
            marginTop: 30,
            borderColor: '#003d2b',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf:'center',
            height: 100,
            padding: 5,
            color: 'black'
          }}
          multiline
          placeholder="Enter the details"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
     

      <View style={{ alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            alignItems: 'center',
            width: width * 0.9,
            backgroundColor: '#003d2b',
            height: height * 0.08,
            padding: width * 0.02,
            justifyContent: 'center',
            marginTop: 55,
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: width * 0.04,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




function Status({ navigation, route }) {
  const { userId } = route.params;
  const [applications, setApplications] = useState([]);
  console.log('Applicant ID in Status Screen:', userId);

  useEffect(() => {
    // Fetch applications data from the backend
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://10.113.76.119:8000/api/applications/ApplicantId/${userId}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched applications data:', data); // Log the fetched data
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error.message);
      }
    };

    fetchApplications();
  }, []);

  console.log('Applications state:', applications);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', marginTop: 10,marginBottom:20 }}>
        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
          Status of Applications
        </Text>

        <ScrollView horizontal>
          <DataTable style={styles.cont}>
            <DataTable.Header style={styles.tableHead}>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Name</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>CNIC</Text>
          </DataTable.Title>

          
             
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Phone Num</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Email</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>District</Text>
          </DataTable.Title>
             
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>City</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Address</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>NatureOfCase</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Application Detail</Text>
          </DataTable.Title>
          <DataTable.Title>
            
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Status</Text>
          </DataTable.Title>
              
            </DataTable.Header>
            {applications.map((application) => (
            <TouchableOpacity
              key={application._id}
              onPress={() =>
                navigation.navigate('StatusDetail', {
                  applicationData: application,
                })
              }
            >
              
              <DataTable.Row key={application._id}>
                <DataTable.Cell>{application._id}</DataTable.Cell>
                <DataTable.Cell>{`${application.FirstName} ${application.LastName}`}</DataTable.Cell>
                
                <DataTable.Cell>{application.CNIC}</DataTable.Cell>
                <DataTable.Cell>{application.PhoneNumber}</DataTable.Cell>
                <DataTable.Cell>{application.Email}</DataTable.Cell>
                <DataTable.Cell>{application.district}</DataTable.Cell>
                <DataTable.Cell>{application.City}</DataTable.Cell>
                <DataTable.Cell>{application.Address}</DataTable.Cell>
                <DataTable.Cell>{application.NatureOfCase}</DataTable.Cell>
                <DataTable.Cell>{application.ApplicationDetails}</DataTable.Cell>
                <DataTable.Cell>{application.Status}</DataTable.Cell>
              </DataTable.Row>
               </TouchableOpacity>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
}


function StatusDetail({ route, navigation }) {
  const { applicationData } = route.params;

  return (
    <View style={{  backgroundColor: 'white',flex:1,margin:5,padding:5 }}>
      <Text style={{ color: 'black',marginTop:30,fontSize:15 }}>ID : {applicationData._id}</Text>
      <Text style={{ color: 'black',fontSize:15 }}>Name : {applicationData.FirstName} {applicationData.LastName}</Text>
      <Text style={{ color: 'black',fontSize:15 }}>Nature of Case : {applicationData.NatureOfCase}</Text>
      <Text style={{ color: 'black',fontSize:15 }}>Application Details : {applicationData.ApplicationDetails}</Text>
      <Text style={{ color: 'black',fontSize:15 }}>Date: {new Date(applicationData.createdAt).toLocaleDateString()}</Text>
     
      <View>
      <Text style={{ color: 'black',textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:20 }}>Instructions </Text>
      <Text style={{ color: 'black',margin:5,padding:5,fontSize:15 }}> {applicationData.Instructions}</Text>
      </View>
    </View>
  );
}



function CreateYour({ navigation, route }) {
  const [checked, setChecked] = useState('first');
  const { userId } = route.params;
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    CNIC: '',
    PhoneNumber: '',
    Email: '',
  });

  const [forOthersEditable, setForOthersEditable] = useState(false);

  const verifyNavigation = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the applicant data from the backend
        console.log('Fetching user data...');
        const response = await fetch(`http://10.113.76.119:8000/applicant/${userId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched user data:', data);
          // Set the fetched applicant data to the state
          setUserData(data);
        } else {
          console.error('Error fetching applicant data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Only fetch data if "For Yourself" is selected
    if (checked === 'first') {
      fetchUserData();
    }
  }, [userId, checked]);

  const handleRadioButtonChange = (value) => {
    setChecked(value);

    // Update editability state for "For Others"
    setForOthersEditable(value === 'second');

    // Clear userData if "For Others" is selected
    if (value === 'second') {
      setUserData({
        FirstName: '',
        LastName: '',
        CNIC: '',
        PhoneNumber: '',
        Email: '',
      });
    }
  };

  const handleVerify = async () => {
    try {
      // Rest of the verification process
  
      // Navigate to the Verify screen and pass applicant data as route param
      navigation.navigate('Verify', {
        applicantData: {
          userId, // Applicant ID
          firstName: userData.FirstName,
          lastName: userData.LastName,
          cnic: userData.CNIC,
          email: userData.Email,
          phoneNumber: userData.PhoneNumber,
        },
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioButtonChange('first')}
            color="#003d2b"
          />
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>For Yourself</Text>
        </View>
        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioButtonChange('second')}
            color="#003d2b"
          />
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>For Others</Text>
        </View>
      </View>


      <View>
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
          placeholder="First Name"
          value={userData.FirstName}
          onChangeText={(text) => setUserData({ ...userData, FirstName: text })}
          editable={checked === 'first' || forOthersEditable} // Editable for "For Yourself" and "For Others"
        />

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
          placeholder="Last Name"
          value={userData.LastName}
          onChangeText={(text) => setUserData({ ...userData, LastName: text })}
          editable={checked === 'first' || forOthersEditable} // Editable for "For Yourself" and "For Others"
        />

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
          placeholder="  CNIC"
          keyboardType="numeric"
          value={userData.CNIC}
          onChangeText={(text) => setUserData({ ...userData, CNIC: text })}
          editable={checked === 'first' || forOthersEditable} // Only editable when radio button "For Others" is selected*/

        />

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
          placeholder="  Phone Number"
          keyboardType="numeric"
          value={userData.PhoneNumber}
          onChangeText={(text) => setUserData({ ...userData, PhoneNumber: text })}
          editable={checked === 'first' || forOthersEditable} // Only editable when radio button "For Others" is selected
        />

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
          placeholder=" Email"
          value={userData.Email}
          onChangeText={(text) => setUserData({ ...userData, Email: text })}
          editable={checked === 'first'|| forOthersEditable} // Only editable when radio button "For Others" is selected
        />
      </View>

      <View style={{ alignItems: 'center', padding: 5, margin: 5 }}>
        <TouchableOpacity
          onPress={handleVerify}
          style={{
            alignItems: 'center',
            width: 180,
            alignSelf: 'center',
            backgroundColor: '#003D2B',
            height: 55,
            padding: 5,
            borderRadius: 30,
            marginTop: 15,
            borderWidth: 2,
            marginRight: 10,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




function Verify({ route, navigation }) {
  const [openDistrict, setOpenDistrict] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [openCity, setOpenCity] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const [openNature, setOpenNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState(null);

  const [address, setAddress] = useState('');
  const [applicationDetails, setApplicationDetails] = useState('');

  const { applicantData } = route.params;

  // Use the applicant's data in your Verify screen
  console.log('Applicant ID:', applicantData.userId);
  console.log('First Name:', applicantData.firstName);
  console.log('Last Name:', applicantData.lastName);
  console.log('CNIC:', applicantData.cnic);
  console.log('Email:', applicantData.email);
  console.log('Phone Number:', applicantData.phoneNumber);

  const nature = [
    { label: 'Fine', value: 'Fine' },
    { label: 'Court Fee', value: 'Court Fee' },
    { label: 'Legal Aid', value: 'Legal Aid' },
    { label: 'Help', value: 'Help' },
  ];

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch('http://10.113.76.119:8000/api/districts/dis');
        if (response.ok) {
          const data = await response.json();
          const formattedDistricts = data.map(district => ({
            label: district.Name,
            value: district._id,
          }));
          setDistricts(formattedDistricts);
        } else {
          console.error('Error fetching district data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDistricts();
  }, []);

  const fetchCities = async (districtId) => {
    try {
      if (districtId) {
        const response = await fetch(`http://10.113.76.119:8000/api/districts/${districtId}/cities`);
        if (response.ok) {
          const data = await response.json();
          const formattedCities = data.map(city => ({
            label: city.cityName,
            value: city._id,
          }));
          setCities(formattedCities);
        } else {
          console.error('Error fetching city data:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  useEffect(() => {
    fetchCities(selectedDistrict);
  }, [selectedDistrict]);

  const handleSubmitApplication = async () => {
    try {
      console.log('Selected District:', selectedDistrict);
      const selectedDistrictObject = districts.find(district => district.value === selectedDistrict);
  
      if (!selectedDistrictObject) {
        console.error('Selected district not found');
        return;
      }
      const selectedCityObject = cities.find(city => city.value === selectedCity);
  
      if (!selectedCityObject) {
        console.error('Selected city not found');
        return;
      }
  
      console.log('Selected City:', selectedCityObject.value);
  
      const applicationData = {
        ApplicantId: applicantData.userId,
        FirstName: applicantData.firstName,
        LastName: applicantData.lastName,
        CNIC: applicantData.cnic,
        PhoneNumber: applicantData.phoneNumber,
        Email: applicantData.email,
        district: selectedDistrictObject.value, // Pass the district's ID
        City: selectedCityObject.value, // Pass the city's ID
        Address: address,
        NatureOfCase: selectedNature,
        ApplicationDetails: applicationDetails,
        Status: 'pending',
      };
  
      console.log('Sending POST request...');
      console.log('Application Data:', applicationData);
  
      const response = await axios.post('http://10.113.76.119:8000/api/applications/app', applicationData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST request completed.');
  
      if (response.status === 200) {
        console.log('Application submitted successfully');
        // Handle successful submission
      } else {
        console.error('Error submitting application:', response.data.error || response.statusText);
        // Handle submission error
      }
    } catch (error) {
      console.log('Network request failed:', error);
      // Handle network error
    }
  };
  
  
  
  


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      
        <View style={{ marginTop: 5 }}>
        <DropDownPicker
          placeholder="Select District"
          style={{
            width: 370,
            backgroundColor: 'white',
            marginTop: 25,
            borderColor: '#003d2b',
            borderWidth: 2,
            height: 55,
            padding: 5,
            color: 'black'
          }}
          items={districts}
          open={openDistrict}
          value={selectedDistrict}
          setOpen={setOpenDistrict}
          setValue={(value) => {
            setSelectedDistrict(value);
            setSelectedCity(null); // Reset selected city when district changes
            fetchCities(value); // Fetch cities for the selected district
          }}
        />

        {selectedDistrict && (
          <DropDownPicker
          key={`city-${selectedDistrict}`}
          placeholder="Select City"
          style={{
            width: 370,
            backgroundColor: 'white',
            marginTop: 30,
            borderColor: '#003d2b',
            borderWidth: 2,
            height: 55,
            padding: 5,
            color: 'black'
          }}
          items={cities} // Use formatted city items
          value={selectedCity}
          setValue={(value) => {
            setSelectedCity(value); // Set the selected city ID here
            console.log('Selected city ID:', value);
          }}
          open={openCity}
          setOpen={setOpenCity}
        />
        
        )}

<TextInput
  style={{
    width: 370,
    backgroundColor: 'white',
    marginTop: 75,
    borderColor: '#003d2b',
    borderWidth: 2,
    height: 60,
    padding: 5,
    color: 'black',
  }}
  placeholder="Address"
  value={address}
  onChangeText={setAddress}
/>

            <DropDownPicker
            placeholder="Nature of Case "
            style={{
              flex: 1,
              marginTop: 30,
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
            open={openNature}
            value={selectedNature}
            items={nature}
            setOpen={setOpenNature}
            setValue={setSelectedNature}
            setItems={null}
          />

<TextInput
  style={{
    width: 370,
    backgroundColor: 'white',
    marginTop: 60,
    borderColor: '#003d2b',
    borderWidth: 2,
    height: 85,
    padding: 5,
    color: 'black',
  }}
  placeholder="Application Details"
  value={applicationDetails}
  onChangeText={setApplicationDetails} // Update the applicationDetails state
/>


          <TouchableOpacity
            onPress={handleSubmitApplication}
            style={{
              backgroundColor: '#003d2b',
              borderRadius: 25,
              color: 'white',
              marginTop: 20,
              justifyContent: 'center',
              width: 180,
              height: 55,
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              borderWidth: 2,
              borderColor: '#003d2b',
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
          </TouchableOpacity>
        </View>
     
    </View>
  );
}

function OptionScreen({ navigation, route }) {
  const { userId } = route.params; // Extract the userId from route.params

  console.log('Applicant ID in Option Screen:', userId);
  return (
    <View style={{ justifyContent:'center', backgroundColor: 'white' ,flexDirection: 'row' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
         
          backgroundColor: 'white',
          width: 380,
          height: 580,
          borderRadius: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraScreen', { userId: userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,

            padding: 12,
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
          onPress={() => navigation.navigate('Gallery', { userId: userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,
            marginTop: 20,
            padding: 12,
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

function AppSelect({ route, navigation }) {

  const { width, height } = Dimensions.get('window');
  const { userId } = route.params; // Extract the userId from route.params

  console.log('Applicant ID in AppSelect:', userId);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: height * 0.01,
          backgroundColor: 'white',
          width: width * 0.95,
          height: height * 0.8,
          borderRadius: width * 0.06,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateYour', { userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: width * 0.05,
            width: width * 0.95,
            height: height * 0.15,
            marginTop: height * 0.03,
            padding: width * 0.03,
            borderWidth: 2,
            borderColor: '#003d2b',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: width * 0.1, height: width * 0.1, alignSelf: 'center' }} source={require('./assets/writing.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: width * 0.025,
                fontSize: width * 0.05,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Create Application 
            </Text>
          </View>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={() => navigation.navigate('OptionScreen', { userId })}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: width * 0.05,
            width: width * 0.95,
            height: height * 0.15,
            marginTop: height * 0.03,
            padding: width * 0.03,
            borderWidth: 2,
            borderColor: '#003d2b',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: width * 0.1, height: width * 0.1, alignSelf: 'center' }} source={require('./assets/upload.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: width * 0.025,
                fontSize: width * 0.05,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Upload Application
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}



function InputOtp({ navigation }) {

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
        Input your OTP code sent via SMS
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 100,
          padding: 10,
        }}
      >
        {otp.map((digit, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              height: 65,
              width: 65,
            }}
          >
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              style={{
                color: 'black',
                fontSize: 30,
                textAlign: 'center',
                justifyContent: 'center',
                padding: 5,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 30 }}>
        Resend OTP
      </Text>

      <TouchableOpacity
        onPress={handleOtpVerification}
        style={{
          alignItems: 'center',
          width: 180,
          backgroundColor: '#003d2b',
          height: 55,
          padding: 5,
          alignSelf: 'center',
          borderRadius: 25,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 5,
            justifyContent: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}


function Gallery({ navigation, route }) {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const { userId } = route.params; // Get the userId from route.params

  useEffect(() => {
    // Open the gallery immediately when the screen is loaded
    pickImage();

    // Fetch user info when the component mounts
    fetchUserInfo(userId);
  }, []);

  const pickImage = async () => {
    try {
      const response = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Edit Image',
      });

      if (!response.didCancel) {
        setImage(response.path);
      }
    } catch (error) {
      console.log('Error picking image:', error.message);
    }
  };

  const fetchUserInfo = async (userId) => {
    try {
      // Replace 'API_ENDPOINT' with the actual API endpoint to fetch user info
      const response = await fetch(`http:// 10.113.76.119:8000/applicant/${userId}`);
      if (response.ok) {
        const data = await response.json();
        // Assuming your API returns firstName and lastName
        setFirstName(data.FirstName);
        setLastName(data.LastName);
      } else {
        console.log('Error fetching user info');
      }
    } catch (error) {
      console.log('Error fetching user info:', error.message);
    }
  };

  const uploadImage = async () => {
    // Implement your image upload logic here.
    try {
      if (!image) {
        console.log('No image selected.');
        return;
      }

      const formData = new FormData();
      const imageUriParts = image.split('.');
      const imageExtension = imageUriParts[imageUriParts.length - 1];
      const imageName = `image.${imageExtension}`;

      formData.append('image', {
        uri: image,
        type: `image/${imageExtension === 'jpg' ? 'jpeg' : imageExtension}`,
        name: imageName,
      });

      // Add the first name and last name to the formData
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);

      const response = await fetch('http://10.0.2.2:8000/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        // Image uploaded successfully
        console.log('Gallery Image uploaded successfully.');
        setImage(null);
        setFirstName('');
        setLastName('');
        // You can add any other actions or alerts here
      } else {
        // Image upload failed
        console.log('Image upload failed.');
        // You can add any other error handling here
      }
    } catch (error) {
      console.log('Error uploading image:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, marginTop: 30 }} />}

        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:20 }}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{
              marginRight: 8,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 150,
            }}
          />

          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{
              marginRight: 8,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 150,
            }}
          />
        </View>

        {image && (
          <TouchableOpacity
            onPress={uploadImage}
            style={{
              alignItems: 'center',
              width: screenWidth * 0.7,
              backgroundColor: '#003d2b',
              height: screenHeight * 0.07,
              padding: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: screenHeight * 0.03,
            }}
          >
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',
                padding: 5,
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Send
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}









function CameraScreen({ navigation, route }) {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const { userId } = route.params; // Get the userId from route.params
  console.log('Applicant ID in camera Screen:', userId);

  useEffect(() => {
    // Open the camera immediately when the screen is loaded
    takePhoto();

    // Fetch user info when the component mounts
    fetchUserInfo(userId);
  }, []);

  const fetchUserInfo = async (userId) => {
    try {
      const response = await fetch(`http:// 10.113.76.119:8000/applicant/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setFirstName(data.FirstName);
        setLastName(data.LastName);
      } else {
        console.log('Error fetching user info');
      }
    } catch (error) {
      console.log('Error fetching user info:', error.message);
    }
  };
  

  const takePhoto = async () => {
    try {
      const response = await ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Edit Image',
      });

      if (!response.cancelled) {
        setImage(response.path);
      }
    } catch (error) {
      console.log('Error taking photo:', error.message);
    }
  };

  const uploadImage = async () => {
    // Implement your image upload logic here.
    try {
      if (!image) {
        console.log('No image selected.');
        return;
      }

      const formData = new FormData();
      const imageUriParts = image.split('.');
      const imageExtension = imageUriParts[imageUriParts.length - 1];
      const imageName = `image.${imageExtension}`;

      formData.append('image', {
        uri: image,
        type: `image/${imageExtension === 'jpg' ? 'jpeg' : imageExtension}`,
        name: imageName,
      });

      // Add the first name and last name to the formData
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);

      const response = await fetch('http://10.0.2.2:8000/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        // Image uploaded successfully
        console.log('Camera Image uploaded successfully.');
        setImage(null);
        setFirstName('');
        setLastName('');
        // You can add any other actions or alerts here
      } else {
        // Image upload failed
        console.log('Image upload failed.');
        // You can add any other error handling here
      }
    } catch (error) {
      console.log('Error uploading image:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 300,
            height: 300,
            marginTop: 30,
          }}
        />
      )}

      <View style={{ marginTop:20,flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={{
            marginRight: 8,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 150,
          }}
        />

        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={{
            marginRight: 8,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 150,
          }}
        />
      </View>

      {image && (
        <TouchableOpacity
          onPress={uploadImage}
          style={{
            alignItems: 'center',
            width: screenWidth * 0.5,
            backgroundColor: '#003d2b',
            height: screenHeight * 0.07,
            padding: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: screenHeight * 0.03,
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}








function Root({ navigation, route }) {
  const { applicantId } = route.params;
  console.log('Applicant ID of the Root Screen:', applicantId);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home} // Pass the Home component directly
        initialParams={{ userId: applicantId }} // Pass the applicantId as userId to the Home screen
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Feedback" component={Feedback} initialParams={{ userId: applicantId }} options={{
        headerShown: false,

      }} />
      <Tab.Screen name="Status" component={Status} initialParams={{ userId: applicantId }} options={{
        headerShown: false,

      }} />

    </Tab.Navigator>

  );
}



const CustomHeader = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  
  const handleLogout = () => {
    // Add your logout logic here, such as clearing user data, removing tokens, etc.
    // For now, let's assume you have a logout function that handles this.

    // After logging out, navigate to the Choose Screen
    navigation.navigate('Choose');
  };
  

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image
          source={require('./assets/backarrow.png')} // Replace with the actual image path
          style={{ width: width * 0.1, height: width * 0.1 }}
        />
      </TouchableOpacity>


      <Text style={styles.headerText}>DLEC</Text>

      {/* Logout Button */}
      <TouchableOpacity style={{marginLeft:120}} onPress={handleLogout} >
      <Image
          
          source={require('./assets/logout.png')}
        ></Image>
      </TouchableOpacity>
      
    </View>
  );
};

//////////////////////////        DLEC           /////////////////////////////
function HomeScreen({ navigation,route }) {
  const { evaluatorId } = route.params;
  const { evaluatorDistrict } = route.params;
  console.log('evaluator ID in HomeScreen:', evaluatorId);

  console.log('evaluator District in HomeScreen:', evaluatorDistrict);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
         
          backgroundColor: 'white',
          width: 380,
          height: 580,
          borderRadius: 30,
        }}>

        <TouchableOpacity
          onPress={() => navigation.navigate('AppList')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,
            marginTop:20,

            padding: 12,
            borderWidth: 2,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/writing.png')}></Image>

            <Text
              style={{
                color: 'white',
                padding: 10,
                fontSize: 20,
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
               Applications
            </Text>
          </View>
        </TouchableOpacity>

       

        <TouchableOpacity
          onPress={() => navigation.navigate('Advocate')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,

            padding: 12,
            borderWidth: 2,
            marginTop: 20,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/judge.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: 10,
                justifyContent: 'center',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Advocates
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications', { evaluatorId , evaluatorDistrict})}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,

            padding: 12,
            borderWidth: 2,
            marginTop: 20,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/notification.png')}></Image>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                padding: 10,
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Notifications
            </Text>
          </View>
        </TouchableOpacity>

        




        <TouchableOpacity
          onPress={() => navigation.navigate('DlecFeedback')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,
            marginTop:20,

            padding: 12,
            borderWidth: 2,
            marginTop: 20,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/feedback.png')}></Image>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
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





function DlecFeedback({ navigation, route }) {
  const [feedbackData, setFeedbackData] = useState([]);
  const [districts, setDistricts] = useState({}); // Initialize districts state

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdWx0YW50SWQiOiI2NTYxY2QzNjU1YWIwMDllNjNkN2E0OTkiLCJpYXQiOjE3MDE2ODQ2MjJ9.ZhU8YW98QAluKfnDBL7mPy3RC3Dl7KeQpfklfnfZI8Y'; // Replace with your actual token
        console.log('Token:', token);

        const feedbackResponse = await fetch('http://10.113.76.119:8000/all-feedback/6524ed8c427ec3568aa761c0', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('Feedback Response:', feedbackResponse);

        if (!feedbackResponse.ok) {
          throw new Error(`Request failed with status: ${feedbackResponse.status}`);
        }

        const feedbackData = await feedbackResponse.json();
        setFeedbackData(feedbackData);

        const districtNameMap = {};
        await Promise.all(
          feedbackData.map(async (feedback) => {
            try {
              const districtResponse = await fetch(`http://10.113.76.119:8000/api/districts/${feedback.District}`);
              if (!districtResponse.ok) {
                console.error(`District request failed with status: ${districtResponse.status} for district ID: ${feedback.District}`);
                return;
              }

              const districtData = await districtResponse.json();
              districtNameMap[feedback.District] = districtData.Name;
            } catch (districtError) {
              console.error('Error fetching district data:', districtError);
            }
          })
        );

        setDistricts(districtNameMap);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <View style={{backgroundColor:"white",flex:1}}>
    <ScrollView horizontal>
      <DataTable style={styles.cont}>
        <DataTable.Header style={styles.tableHead}>
        <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white' ,fontSize:15,fontWeight:"bold"}]}>District</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Description</Text>
          </DataTable.Title>
        </DataTable.Header>
        {feedbackData.map((feedback) => (
          <DataTable.Row key={feedback._id} style={styles.table_body_single_row}>
            <DataTable.Cell style={styles.cell}>{feedback._id}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}>{districts[feedback.District]}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}>{feedback.Description}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
    </View>
  );
};



function AppList({ navigation, route }) {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [filterStatus, setFilterStatus] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://10.113.76.119:8000/api/applications/all');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched applications:', data);
          setApplications(data);
        } else {
          console.error('Error fetching applications. Status:', response.status);
        }
      } catch (error) {
        console.error('Network request failed. Error:', error);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    // Filter applications based on filterStatus
    if (filterStatus === null) {
      // If no filter is selected, show all applications
      setFilteredApplications(applications);
    } else {
      const filtered = applications.filter((application) => {
        return application.Status.toLowerCase() === filterStatus.toLowerCase();
      });
      setFilteredApplications(filtered);
    }
  }, [applications, filterStatus]);

  // Function to handle filtering based on status
  const handleFilter = (status) => {
    setFilterStatus(status);
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          margin: 5,
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => handleFilter('Accepted')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 120,
            backgroundColor: '#003d2b',
            height: 40,
            padding: 3,
            borderWidth: 2,
            borderColor: '#003d2b',
            marginTop: 30,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            Accepted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilter('Rejected')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 120,
            backgroundColor: '#003d2b',
            height: 40,
            padding: 3,
            borderWidth: 2,
            borderColor: '#003d2b',
            marginRight: 10,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            Rejected
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleFilter('Pending')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 120,
            backgroundColor: '#003d2b',
            height: 40,
            padding: 3,
            borderWidth: 2,
            borderColor: '#003d2b',
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            Pending
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <DataTable style={styles.cont}>
          <DataTable.Header style={styles.tableHead}>

           <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>NatureOfCase</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Name</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Status</Text>
          </DataTable.Title>
            
          </DataTable.Header>

          {filteredApplications.map((application) => (
            <DataTable.Row
              key={application._id}
              onPress={() =>
                navigation.navigate('OpenDetail', {
                  applicationData: application,
                })
              }
            >
              <DataTable.Cell style={styles.cell}>{application.ApplicantCustomId}</DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{application.NatureOfCase}</DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{application.FirstName} {application.LastName}</DataTable.Cell>
              <DataTable.Cell>{new Date(application.createdAt).toLocaleDateString()} </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{application.Status}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}

function Advocate({ navigation, route }) {
  const [consultant, setConsultant] = useState([]);


  useEffect(() => {
    // Fetch consultants when the component mounts
    fetch('http://10.113.76.119:8000/Consultant/all-consultants')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
  
        // Set the state directly with the array received in the API response
        setConsultant(data || []);
      })
      .catch((error) => {
        console.error('Error fetching consultant data:', error);
      });
  }, []);
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewAdvocate')}
        style={{
          marginLeft: 270,
          width: 120,
          backgroundColor: '#003d2b',
          height: 45,
          padding: 5,
          borderRadius: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 5,
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          + Advocate
        </Text>
      </TouchableOpacity>

      <ScrollView horizontal>
  <DataTable style={styles.cont}>
    <DataTable.Header style={styles.tableHead}>
    <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Name</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>License</Text>
          </DataTable.Title>
    
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Cases Assigned</Text>
          </DataTable.Title>
      
    </DataTable.Header>

    {consultant.map((item) => (
      <DataTable.Row key={item._id}>
        <DataTable.Cell>{item._id}</DataTable.Cell>
        <DataTable.Cell>{`${item.firstName} ${item.lastName}`}</DataTable.Cell>
        <DataTable.Cell>{item.license}</DataTable.Cell>
        <DataTable.Cell>{item.casesAssigned}</DataTable.Cell>
      </DataTable.Row>
    ))}
  </DataTable>
</ScrollView>
    </View>
  );
}




 
function NewAdvocate({ navigation, route }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [City, setCity] = useState('');
  const [District, setDistrict] = useState('');
  const [Address, setAddress] = useState('');
  const [openLicense, setOpenLicense] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);

  
  

  const License = [
    { label: 'District Court', value: 'District Court' },
    { label: 'High Court', value: 'High Court' },
    { label: 'Supreme Court', value: 'Supreme Court' },
  ];
  const handleAddLawyer = async () => {
    try {
      const response = await fetch('http://10.113.76.119:8000/Consultant/new-consultant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          cnic: CNIC,
          phone: PhoneNumber,
          email: Email,
          password: Password,
          city: City,
          district: District,
          address: Address,
          license: selectedLicense,
        }),
      });

      if (response.ok) {
        // Lawyer added successfully, clear the input fields
        setFirstName('');
        setLastName('');
        setCNIC('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        setCity('');
        setDistrict('');
        setAddress('');
        setSelectedLicense(null);

        // You may also navigate to a different screen or perform other actions as needed
        console.log('Lawyer added successfully');
      } else {
        console.error('Failed to add lawyer');
      }
    } catch (error) {
      console.error('Error adding lawyer:', error);
    }
  };

  return(

    <View style={{flex:1,backgroundColor:'white'}}>
      <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold',marginTop:10,justifyContent:"center",textAlign:'center' }}>
          New Advocate
        </Text>
<ScrollView>
       <View style={{ flexDirection: 'row', marginTop: 8, padding: 5 }}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={{
            flex: 1,
            marginRight: 8,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:150
          }}
        />
        <TextInput
          placeholder="LastName"
          value={lastName}
          onChangeText={setLastName}
          style={{
            flex: 1,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:150
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 8, padding: 5 }}>
        <TextInput
          placeholder="CNIC"
          value={CNIC}
          onChangeText={setCNIC}
          style={{
            flex: 1,
            marginRight: 8,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:150
          }}
        />
        <TextInput
          placeholder="PhoneNumber"
          value={PhoneNumber}
          onChangeText={setPhoneNumber}
          style={{
            flex: 1,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:150
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 8, padding: 5 }}>
 
  <View style={{ flex: 1 }}>
    <DropDownPicker
      placeholder="License"
      style={{
        borderColor: '#003d2b',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        height: 50,
        width: 390
      }}
      open={openLicense}
      value={selectedLicense}
      items={License}
      setOpen={setOpenLicense}
      setValue={setSelectedLicense}
      setItems={null}
    />
  </View>
</View>

      <View style={{ flexDirection:"row", marginTop: 8, padding: 5 }}>
      <TextInput
          placeholder="Email"
          value={Email}
          onChangeText={setEmail}
          style={{
            flex: 1,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:190
          }}
        />

        
      </View>
      <View style={{ flexDirection:"row", marginTop: 8, padding: 5 }}>
      <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={setPassword}
          style={{
            flex: 1,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:190
          }}
        />

        
      </View>

      <View style={{ flexDirection: 'row', marginTop: 8, padding: 5 }}>
  <TextInput
    placeholder="City"
    value={City}
    onChangeText={setCity}
    style={{
      flex: 1,
      borderColor: '#003d2b',
      borderWidth: 1,
      padding: 5,
      margin: 5,
      height: 50,
      width: 120
    }}
  />
  <View style={{ flex: 1 }}>
  <TextInput
    placeholder="District"
    value={District}
    onChangeText={setDistrict}
      style={{
        borderColor: '#003d2b',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        height: 50,
        width: 180
      }}
      
    />
  </View>
</View>

      <View style={{ flexDirection: 'row', marginTop: 8, padding: 5 }}>

      <TextInput
          placeholder="Address"
          value={Address}
          onChangeText={setAddress}
          style={{
            flex: 1,
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height:50,
            width:300
          }}
        />
      </View>

      <TouchableOpacity
           onPress={handleAddLawyer}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            width: 380,
            height: 50,
            backgroundColor: '#003D2B',

            padding: 5,
            marginTop:10,
            marginBottom:20,
            
            // borderRadius: height * 0.05,
            
            borderWidth: 1,
            borderColor: '#003D2B',
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            ADD LAWYER
          </Text>
        </TouchableOpacity>
     
        </ScrollView>
    </View>
  );

}



function OpenDetail({ navigation ,route}) {
  const { applicationData } = route.params;
  const [rejectReason, setRejectReason] = useState('');

  const handleReject = () => {
    // Navigate to the Comments screen and pass the necessary data
    navigation.navigate('Comments', {
      id: applicationData._id,
      name: `${applicationData.FirstName} ${applicationData.LastName}`,
      natureOfCase: applicationData.NatureOfCase,
    });
  };

  const handleAccept = () => {
    // Navigate to the Comments screen and pass the necessary data
    navigation.navigate('AcceptComments', {
      id: applicationData._id,
      name: `${applicationData.FirstName} ${applicationData.LastName}`,
      natureOfCase: applicationData.NatureOfCase,
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
          color: 'black',
        }}>
        Detail of Application
      </Text>
      <ScrollView>
      <View style={{ marginTop:20, backgroundColor: 'white', padding: 20 }}>
      <Text style={{color:"black"}}>ID : {applicationData._id}</Text>
      <Text style={{color:"black"}}>Name : {applicationData.FirstName} {applicationData.LastName}</Text>
      <Text style={{color:"black"}}>CNIC : {applicationData.CNIC}</Text>
      <Text style={{color:"black"}}>Phone Number : {applicationData.PhoneNumber}</Text>
      <Text style={{color:"black"}}>Email : {applicationData.Email}</Text>
      <Text style={{color:"black"}}>District : {applicationData.district}</Text>
      <Text style={{color:"black"}}>City : {applicationData.City}</Text>
      <Text style={{color:"black"}}>Address : {applicationData.Address}</Text>
      <Text style={{color:"black"}}>Nature of Case : {applicationData.NatureOfCase}</Text>
      <Text style={{color:"black"}}>Application Details : {applicationData.ApplicationDetails}</Text>
      <Text style={{color:"black"}}>Status : {applicationData.Status}</Text>
    
    </View>

    <View
        style={{
          //marginBottom:20,
          flexDirection: 'row',
          alignSelf: 'center',
          padding: 5,
          marginrRight: 15,
          marginBottom:10,
        }}>
        <TouchableOpacity
          onPress={handleAccept}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 150,
            backgroundColor: '#003d2b',
            height: 40,
            padding: 3,
           
            borderWidth: 2,
            borderColor: '#003d2b',
            marginTop: 30,
            marginRight: 15,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Accept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={handleReject}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 150,
            backgroundColor: '#003d2b',
            height: 40,
            padding: 3,
            
            borderWidth: 2,
            borderColor: '#003d2b',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Reject
          </Text>
        </TouchableOpacity>
        
    </View>
    </ScrollView>
      </View>

  );
}


function Comments({ navigation, route }) {
  const { id, name, natureOfCase } = route.params;
  const [rejectReason, setRejectReason] = useState('');
  const [status, setStatus] = useState('Pending'); // Initial status is "Pending"

  const handleReject = async () => {
    if (rejectReason.trim() === '') {
      Alert.alert('Please specify a reason for rejection.');
    } else {
      try {
        const response = await fetch(`http://10.113.76.119:8000/api/dlec/reject/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: 'Rejected', // Set the desired status
            instructions: rejectReason,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to reject application: ${response.status}`);
        }

        Alert.alert('Application rejected successfully');
        // You can also update your local state or navigate to a new screen here if needed.
      } catch (error) {
        Alert.alert(`Failed to reject application: ${error.message}`);
      }
    }
  };

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
          color: 'black',
        }}>
        Comments
      </Text>
      <View style={{ margin: 10, padding: 5 }}>
        <Text>ID: {id}</Text>
        <Text>Name: {name}</Text>
        <Text>Nature of Case: {natureOfCase}</Text>
      </View>
      <View style={{ margin: 10, padding: 5 }}>
        <Text>Please specify the reason for the rejection of the application</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          borderColor: '#003d2b',
          borderWidth: 2,
          width: 370,
          height: 130,
          marginTop: 25,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            color: 'black',
            fontSize: 15,
            width: 350,
            height: 50,
          }}
          placeholder="Comments"
          value={rejectReason}
          onChangeText={text => setRejectReason(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleReject} // Call the function to handle rejection
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          width: 378,
          backgroundColor: '#003d2b',
          height: 50,
          padding: 5,
          borderWidth: 1,
          borderColor: '#003d2b',
          marginTop: 50,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            padding: 5,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Reject
        </Text>
      </TouchableOpacity>
    </View>
  );
}


function AcceptComments({ navigation, route }) {
  const { id, name, natureOfCase } = route.params;
  const [instructions, setInstructions] = useState('');
  const [Amount, setAmount] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [openAction, setOpenAction] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openConsultant, setOpenConsultant] = useState(false);
  const [consultants, setConsultants] = useState([]);

  const Action = [
    { label: 'Court Fee', value: 'Court Fee' },
    { label: 'Assign Lawyer', value: 'Assign Lawyer' },
    { label: 'Fine', value: 'Fine' },
    { label: 'Help', value: 'Help' },
  ];

  const Status = [
    { label: 'Accepted', value: 'Accepted' },
    { label: 'Verifying', value: 'Verifying' },
    { label: 'Rejected', value: 'Rejected' },
  ];

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        console.log('Fetching consultant data...');
        const response = await axios.get('http://10.113.76.119:8000/Consultant/all-consultants');
        console.log('Consultant data fetched successfully:', response.data);
        setConsultants(response.data);
      } catch (error) {
        console.error('Error fetching consultant data:', error);
      }
    };
  
    fetchConsultants();
  }, []);
  const handleSubmit = async () => {
    try {
      // Send the application acceptance request
      const response = await axios.post(`http://10.113.76.119:8000/accept/${id}`, {
        status: selectedStatus,
        action: selectedAction,
        consultant: selectedConsultant,
        instructions,
        fee: Amount,
      });
  
      if (response.status === 200) {
        // Application accepted successfully, now assign the consultant
        if (selectedStatus === 'Accepted' && selectedAction === 'Assign Lawyer' && selectedConsultant) {
          await axios.put(`http://10.113.76.119:8000/accept/${id}/assign-consultant/${selectedConsultant}`);
        }
  
        Alert.alert('Application accepted successfully');
        // You can also update your local state or navigate to a new screen here if needed.
      } else {
        Alert.alert('Failed to accept application');
      }
    } catch (error) {
      Alert.alert(`Failed to accept application: ${error.message}`);
    }
  };
  


  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 30,
            color: 'black',
          }}
        >
          Action
        </Text>
        <View style={{ margin: 10, padding: 5 }}>
          <Text>ID: {id}</Text>
          <Text>Name: {name}</Text>
          <Text>Nature of Case: {natureOfCase}</Text>
        </View>
        <View style={{ margin: 10, padding: 5 }}>
          <Text>Please select the action and further action according to the nature of the application</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DropDownPicker
            placeholder="Action"
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: 5,
              borderColor: '#003d2b',
              borderWidth: 2,
              height: 50,
              marginLeft: 20,
              width: 350,
            }}
            open={openAction}
            value={selectedAction}
            items={Action}
            setOpen={setOpenAction}
            setValue={setSelectedAction}
          />
        </View>
        {selectedAction === 'Assign Lawyer' && (
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
            <DropDownPicker
  placeholder="Assign Consultant"
  style={{
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderColor: '#003d2b',
    borderWidth: 2,
    height: 50,
    marginLeft: 20,
    width: 350,
  }}
  open={openConsultant}
  value={selectedConsultant}
  items={consultants.map((consultant) => ({
    label: `${consultant.firstName} ${consultant.lastName}`,
    value: consultant._id,
  }))}
  
  setOpen={setOpenConsultant}
  setValue={setSelectedConsultant}
/>

          </View>
        )}
        <View style={{ marginTop: 60, flexDirection: 'row', alignItems: 'center' }}>
          <DropDownPicker
            placeholder="Status"
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: 5,
              borderColor: '#003d2b',
              marginLeft: 20,
              borderWidth: 2,
              height: 50,
              width: 350,
            }}
            open={openStatus}
            value={selectedStatus}
            items={Status}
            setOpen={setOpenStatus}
            setValue={setSelectedStatus}
          />
          </View>
          {selectedStatus === 'Accepted' && (
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
          
            <TextInput
              style={{
                backgroundColor: 'white',
                color: 'black',
                marginLeft: 20,
                padding: 5,
                borderColor: '#003d2b',
                borderWidth: 2,
                height: 50,
                width: 350,
              }}
              placeholder="Amount"
              value={Amount}
              onChangeText={(text) => setAmount(text)}
            />
            </View>
          )}
        
        <TextInput
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            color: 'black',
            marginLeft: 20,
            padding: 5,
            borderColor: '#003d2b',
            borderWidth: 2,
            height: 90,
            width: 350,
          }}
          placeholder="Instructions"
          value={instructions}
          onChangeText={(text) => setInstructions(text)}
        />
        <TouchableOpacity
           onPress={handleSubmit}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 350,
            backgroundColor: '#003d2b',
            height: 50,
            padding: 5,
            borderWidth: 1,
            borderColor: '#003d2b',
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              padding: 5,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}






function Notifications({ navigation, route }) {
  const { evaluatorId } = route.params;

  const { evaluatorDistrict } = route.params;

  console.log('evaluator ID in NotificationScreen:', evaluatorId);
  console.log('evaluator District in NotificationScreen:', evaluatorDistrict);
  
  
  const [evNotifications, setEvNotifications] = useState([]);
  const [distNotifications, setDistNotifications] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming you have the token available in your component state or context
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmFsdWF0b3JJZCI6IjY1MjRlZDhjNDI3ZWMzNTY4YWE3NjFiYyIsImV2YWx1YXRvckRpc3RyaWN0IjoiNjUyNGVkOGM0MjdlYzM1NjhhYTc2MWMwIiwiaWF0IjoxNzAxNTkxMzIwfQ.2Fcm1fRZXaXYpQZzADP3nNsGdAfjMafx7K3_Y9x2tl4'; // Replace with your actual token
  
        // Update the API request URL with evaluatorDistrict
        const response = await axios.get(`http://10.113.76.119:8000/dlec-ev-notifications/${evaluatorDistrict}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
  
        const { evNotifications, distNotifications } = response.data;
        setEvNotifications(evNotifications);
        setDistNotifications(distNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
  
    fetchData();
  }, [evaluatorId, evaluatorDistrict]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal>
        <ScrollView>
        <DataTable style={styles.cont}>
          <DataTable.Header style={styles.tableHead}>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Applications</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Address</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Notified</Text>
          </DataTable.Title>

          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Action</Text>
          </DataTable.Title>

          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>View</Text>
          </DataTable.Title>
              
              
             
            </DataTable.Header>

            {/* Render rows based on evNotifications */}
            {evNotifications.map((notification) => (
              <DataTable.Row key={notification._id}>
                <DataTable.Cell>
                {new Date(notification.createdAt).toLocaleDateString()} {/* Display only the date */}
              </DataTable.Cell>
                <DataTable.Cell>{notification.applicationsLength}</DataTable.Cell>
                <DataTable.Cell>{notification.dateAndPlace}</DataTable.Cell>
                <DataTable.Cell>
                  {notification.notifiedByHead ? (
                    <IconButton icon="check" color="green" size={20} />
                  ) : null}
                </DataTable.Cell>
                <DataTable.Cell>
                  {/* Action Button */}
                  <TouchableOpacity
                    onPress={() => {
                      // Add logic for Action button click (e.g., conduct meeting)
                      console.log('Action button clicked');
                    }}
                  >
                    <Text>Conduct Meeting</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell>
                  {/* View Button */}
                  <TouchableOpacity
                    onPress={() => {
                      // Add logic for View button click (e.g., navigate to details)
                      console.log('View button clicked');
                    }}
                  >
                    <Text>View</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

///////////////////////////////    LJCP   ////////////////////////



function LJCP({ navigation, route }) {
  

return (
<View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
         
          backgroundColor: 'white',
          width: 380,
          height: 580,
          borderRadius: 30,
        }}>

        <TouchableOpacity
          onPress={() => navigation.navigate('District')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,
            marginTop:20,

            padding: 12,
            borderWidth: 2,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/writing.png')}></Image>

            <Text
              style={{
                color: 'white',
                padding: 10,
                fontSize: 20,
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
               Districts
            </Text>
          </View>
        </TouchableOpacity>

        

        
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminNotification')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,

            padding: 12,
            borderWidth: 2,
            marginTop: 20,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/notification.png')}></Image>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                padding: 10,
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Notifications
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Balance')}
          style={{
            justifyContent: 'center',
            backgroundColor: '#003d2b',
            borderRadius: 20,
            width: 380,
            height: 85,

            padding: 12,
            borderWidth: 2,
            marginTop: 20,
            borderColor: '#003d2b',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={require('./assets/Balance.png')}></Image>
            <Text
              style={{
                color: 'white',
                padding: 10,
                justifyContent: 'center',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Balance
            </Text>
          </View>
        </TouchableOpacity>

        
        
        

        
      </View>
    </View>
  
  );
};



function District({ navigation, route }) {
  const [districts, setDistricts] = useState([]); // State to store district data
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [distInFunds, setDistInFunds] = useState({ id: "", name: "" });

  // Define a function to fetch district data
  const fetchDistricts = async () => {
    try {
      // Make an HTTP GET request to your server endpoint to fetch districts
      const response = await fetch('http://10.113.76.119:8000/api/districts/dis');
      
      if (response.ok) {
        // If the response is OK, parse the data and set it in the state
        const data = await response.json();
        setDistricts(data);
        console.log('Fetched districts:', data);
      } else {
        // Handle the case where the response status is not OK
        console.error('Error fetching districts. Status:', response.status);
      }
    } catch (error) {
      // Handle network request errors
      console.error('Network request failed. Error:', error);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchDistricts(); // Fetch district data when the component mounts
  }, []);
  const modalInAction = (id, name) => {
    setDistInFunds((prev) => ({ ...prev, id, name }));
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalText("");
    setDistInFunds({ id: "", name: "" });
  };
  const handleAddFund = () => {
    // Handle adding funds to the selected district here
    // You can use the selectedDistrict and modalText
    // ...

    // After handling the funds, close the modal
    closeAddFundModal();
  };

  const closeAddFundModal = () => {
    setOpenModal(false);
    setModalText('');
    setSelectedDistrict(null);
  };


  return (
    <View style={{ flex: 1, backgroundColor:"white" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddDistrict')}
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          width: 150,
          marginLeft: 240,
          backgroundColor: '#003d2b',
          height: 40,
          padding: 3,
          borderWidth: 2,
          borderColor: '#003d2b',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 5,
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          + DISTRICT
        </Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        <ScrollView>
        <DataTable style={styles.cont}>
          <DataTable.Header style={styles.tableHead}>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>District</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Applications</Text>
          </DataTable.Title>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Evaluated</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Action</Text>
          </DataTable.Title>
          </DataTable.Header>

          {districts.map((district) => (
            <DataTable.Row key={district._id}>
              <DataTable.Cell>{district.Code}</DataTable.Cell>
              <DataTable.Cell>{district.Name}</DataTable.Cell>
              {/* Add other data fields as needed */}
              <DataTable.Cell>{district.TotalApplications}</DataTable.Cell>
              <DataTable.Cell>{district.EvaluatedApplications}</DataTable.Cell>
              <DataTable.Cell>
              <TouchableOpacity
  style={{
    backgroundColor: '#003d2b', // Set the background color
    padding: 10,
    width:150,
    borderRadius: 10, // Optional: Add border-radius for rounded corners
  }}
  
  onPress={() => modalInAction(district._id, district.Name)}
>
  <Text style={{ color: 'white' }}>Add Fund</Text>
</TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
      </ScrollView>
      
      <Modal visible={openModal} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{`Add funds for ${distInFunds.name}`}</Text>

          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius:5,
              width: 200,
              margin: 10,
              padding: 5,
            }}
            value={modalText}
            onChangeText={setModalText}
          />
          <Button title="Add Fund" onPress={handleAddFund} />
          <Button title="Cancel" onPress={closeAddFundModal} />
        </View>
      </Modal>
    </View>
  );
}





function AddDistrict({navigation , route}) {
  const [Name, setName] = useState('');
  const [districtCode, setDistrictCode] = useState('');
  const [cities, setCities] = useState(['']);
  const [amountAllocated, setAmountAllocated] = useState('');

  const [headMemberNameInput, setHeadMemberNameInput] = useState('');
  const [headMemberPhoneNumberInput, setHeadMemberPhoneNumberInput] = useState('');
  const [headMemberEmailInput, setHeadMemberEmailInput] = useState('');
  const [headMemberPasswordInput, setHeadMemberPasswordInput] = useState('');

  const [operatorNameInput, setOperatorNameInput] = useState('');
  const [operatorPhoneNumberInput, setOperatorPhoneNumberInput] = useState('');
  const [operatorEmailInput, setOperatorEmailInput] = useState('');
  const [operatorPasswordInput, setOperatorPasswordInput] = useState('');

  const [thirdMemberNameInput, setThirdMemberNameInput] = useState('');
  const [thirdMemberPhoneNumberInput, setThirdMemberPhoneNumberInput] = useState('');
  const [thirdMemberEmailInput, setThirdMemberEmailInput] = useState('');
  const [thirdMemberPasswordInput, setThirdMemberPasswordInput] = useState('');

  const [fourthMemberNameInput, setFourthMemberNameInput] = useState('');
  const [fourthMemberPhoneNumberInput, setFourthMemberPhoneNumberInput] = useState('');
  const [fourthMemberEmailInput, setFourthMemberEmailInput] = useState('');
  const [fourthMemberPasswordInput, setFourthMemberPasswordInput] = useState('');

  const handleDeleteCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities);
  };

  const handleAddCity = () => {
    const updatedCities = [...cities, ''];
    setCities(updatedCities);
  };
 const handleAddDistrict = () => {
    // Create the data object with all the input values
    const data = {
      Name,
      districtCode,
      cities,
      amountAllocated,
      headMemberNameInput,
      headMemberPhoneNumberInput,
      headMemberEmailInput,
      headMemberPasswordInput,
      operatorNameInput,
      operatorPhoneNumberInput,
      operatorEmailInput,
      operatorPasswordInput,
      thirdMemberNameInput,
      thirdMemberPhoneNumberInput,
      thirdMemberEmailInput,
      thirdMemberPasswordInput,
      fourthMemberNameInput,
      fourthMemberPhoneNumberInput,
      fourthMemberEmailInput,
      fourthMemberPasswordInput,
    };

    // Send a POST request to your API to create a district
    fetch('http://10.113.76.119:8000/api/districts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
      // Successful response
      console.log('District created successfully');
    } else {
      // Error response
      response.json().then((errorData) => {
        console.error('District creation failed:', errorData);
      });
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
};


  return (
    <View style={{ margin: 5, padding: 5, flex:1, backgroundColor:"white" }}>
      <ScrollView>
        <Text style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 15,
          color: 'black',
          marginBottom:5,
        }}>Add New District</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="District Name"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={Name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="District Code"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={districtCode}
            onChangeText={(text) => setDistrictCode(text)}
          />
        </View>
        {cities.map((city, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder="City name"
              style={{
                borderColor: '#003d2b',
                borderWidth: 1,
                padding: 5,
                margin: 5,
                height: 50,
                width: 300,
              }}
              value={city}
              onChangeText={(text) => {
                const updatedCities = [...cities];
                updatedCities[index] = text;
                setCities(updatedCities);
              }}
            />
            <TouchableOpacity onPress={() => handleDeleteCity(index)}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                color: 'red',
              }}>X</Text>
            </TouchableOpacity>
            {index === cities.length - 1 && (
              <TouchableOpacity onPress={handleAddCity}>
                <Text style={{
                  fontSize: 20,
                  marginLeft: 10,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'black',
                }}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        <TextInput
          placeholder="Amount Allocated"
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={amountAllocated}
          onChangeText={(text) => setAmountAllocated(text)}
        />

        <Text style={{
          fontSize: 18,
          padding: 10,
          marginTop: 10,
          color: 'black',
        }}>Head Member  ----------------------</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Name"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={headMemberNameInput}
            onChangeText={(text) => setHeadMemberNameInput(text)}
          />
          <TextInput
            placeholder="Phone number"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={headMemberPhoneNumberInput}
            onChangeText={(text) => setHeadMemberPhoneNumberInput(text)}
          />
        </View>
        <TextInput
          placeholder="Email"
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={headMemberEmailInput}
          onChangeText={(text) => setHeadMemberEmailInput(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={headMemberPasswordInput}
          onChangeText={(text) => setHeadMemberPasswordInput(text)}
        />

        <Text style={{
          fontSize: 18,
          padding: 10,
          marginTop: 10,
          color: 'black',
        }}>Operator  ----------------------</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Name"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={operatorNameInput}
            onChangeText={(text) => setOperatorNameInput(text)}
          />
          <TextInput
            placeholder="Phone number"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={operatorPhoneNumberInput}
            onChangeText={(text) => setOperatorPhoneNumberInput(text)}
          />
        </View>
        <TextInput
          placeholder="Email"
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={operatorEmailInput}
          onChangeText={(text) => setOperatorEmailInput(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={operatorPasswordInput}
          onChangeText={(text) => setOperatorPasswordInput(text)}
        />

        <Text style={{
          fontSize: 18,
          padding: 10,
          marginTop: 10,
          color: 'black',
        }}>Third Member  ----------------------</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Name"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={thirdMemberNameInput}
            onChangeText={(text) => setThirdMemberNameInput(text)}
          />
          <TextInput
            placeholder="Phone number"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={thirdMemberPhoneNumberInput}
            onChangeText={(text) => setThirdMemberPhoneNumberInput(text)}
          />
        </View>
        <TextInput
          placeholder="Email"
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={thirdMemberEmailInput}
          onChangeText={(text) => setThirdMemberEmailInput(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={thirdMemberPasswordInput}
          onChangeText={(text) => setThirdMemberPasswordInput(text)}
        />

        <Text style={{
          fontSize: 18,
          padding: 10,
          marginTop: 10,
          color: 'black',
        }}>Fourth Member  ----------------------</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Name"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={fourthMemberNameInput}
            onChangeText={(text) => setFourthMemberNameInput(text)}
          />
          <TextInput
            placeholder="Phone number"
            style={{
              flex: 1,
              borderColor: '#003d2b',
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 50,
              width: 300
            }}
            value={fourthMemberPhoneNumberInput}
            onChangeText={(text) => setFourthMemberPhoneNumberInput(text)}
          />
        </View>
        <TextInput
          placeholder="Email"
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={fourthMemberEmailInput}
          onChangeText={(text) => setFourthMemberEmailInput(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderColor: '#003d2b',
            borderWidth: 1,
            padding: 5,
            margin: 5,
            height: 50,
            width: 380
          }}
          value={fourthMemberPasswordInput}
          onChangeText={(text) => setFourthMemberPasswordInput(text)}
        />

        <TouchableOpacity
          onPress={handleAddDistrict}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            width: 380,
            backgroundColor: '#003d2b',
            height: 50,
            padding: 3,
            borderWidth: 2,
            borderColor: '#003d2b',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}



function AdminNotification({ navigation, route }) {
  const [notifications, setNotifications] = useState([]);
  const [districts, setDistricts] = useState([]);

  const findDistrict = (id) => {
    const district = districts.find((dist) => dist._id === id);
    return district ? district.Name : '';
  };

  useEffect(() => {
    const fetchAdminNotifications = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdWx0YW50SWQiOiI2NTYxY2QzNjU1YWIwMDllNjNkN2E0OTkiLCJpYXQiOjE3MDE3NTA5MjR9.dOXRwNFmPo1ndhY7ONr5mXVlcAPmFWR4IbJJv9oHA3M'; // Replace 'yourToken' with the actual token obtained after authentication
        const response = await fetch('http://10.113.76.119:8000/AdminNotifications/all', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          console.error('Failed to fetch admin notifications:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching admin notifications:', error);
      }
    };

    const fetchDistricts = async () => {
      try {
        const response = await fetch('http://10.113.76.119:8000/api/districts/dis');
        if (response.ok) {
          const data = await response.json();
          setDistricts(data);
        } else {
          console.error('Error fetching districts. Status:', response.status);
        }
      } catch (error) {
        console.error('Network request failed. Error:', error);
      }
    };

    fetchAdminNotifications();
    fetchDistricts();
  }, []);


  return (
    <View style={{ flex: 1, backgroundColor:"white" }}>
      <ScrollView horizontal>
        <ScrollView>
          <DataTable style={styles.cont}>
            <DataTable.Header style={styles.tableHead}>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>District</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Details</Text>
          </DataTable.Title>
              
            </DataTable.Header>
            {notifications.map((notification) => (
              <DataTable.Row key={notification._id}>
                <DataTable.Cell>
                  {new Date(notification.createdAt).toLocaleDateString()}
                </DataTable.Cell>
                <DataTable.Cell>{findDistrict(notification.district)}</DataTable.Cell>
                <DataTable.Cell>{notification.details}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}




function Balance({ navigation, route }) {
  const [districts, setDistricts] = useState([]); // State to store district data
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [distInFunds, setDistInFunds] = useState({ id: "", name: "" });



  // Define a function to fetch district data
  const fetchDistricts = async () => {
    try {
      // Make an HTTP GET request to your server endpoint to fetch districts
      const response = await fetch('http://10.113.76.119:8000/api/districts/dis');
      
      if (response.ok) {
        // If the response is OK, parse the data and set it in the state
        const data = await response.json();
        setDistricts(data);
        console.log('Fetched districts:', data);
      } else {
        // Handle the case where the response status is not OK
        console.error('Error fetching districts. Status:', response.status);
      }
    } catch (error) {
      // Handle network request errors
      console.error('Network request failed. Error:', error);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchDistricts(); // Fetch district data when the component mounts
  }, []);

  const handleFundsRecordPress = () => {
    // Navigate to FundsRecord screen
    navigation.navigate('FundsRecord'); // Make sure 'FundsRecord' is the correct screen name
  };

  const handleApplicationReportPress = () => {
    // Navigate to ApplicationReport screen
    navigation.navigate('ApplicationReport'); // Make sure 'ApplicationReport' is the correct screen name
  };

  return (
    <View style={{ flex: 1, backgroundColor:"white" }}>
      

      <ScrollView horizontal>
        <ScrollView>
        <DataTable style={styles.cont}>
          <DataTable.Header style={styles.tableHead}>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>District</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Balance</Text>
          </DataTable.Title>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Action</Text>
          </DataTable.Title>
          
          </DataTable.Header>

          {districts.map((district) => (
            <DataTable.Row key={district._id}>
              <DataTable.Cell>{district.Code}</DataTable.Cell>
              <DataTable.Cell>{district.Name}</DataTable.Cell>
             
              <DataTable.Cell>{district.TotalApplications}</DataTable.Cell>
             
              <TouchableOpacity
                  style={{
                    backgroundColor: '#003d2b',
                    padding: 5,
                    width: 130,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  onPress={handleFundsRecordPress}
                >
                  <Text style={{ color: 'white' }}>Funds Record</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#003d2b',
                    padding: 5,
                    width: 130,
                    borderRadius: 10,
                    marginTop: 10,
                    marginLeft:10,
                  }}
                  onPress={handleApplicationReportPress}
                >
                  <Text style={{ color: 'white' }}>Application Report</Text>
                </TouchableOpacity>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}


function FundsRecord ({navigation, route}){
  return(

    <View style={{ flex: 1, backgroundColor:"white" }}>
      <ScrollView horizontal>
        <ScrollView>
          <DataTable style={styles.cont}>
            <DataTable.Header style={styles.tableHead}>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Details</Text>
          </DataTable.Title>
              
            </DataTable.Header>
            
              
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function ApplicationReport ({navigation, route}){
  return(

    <View style={{ flex: 1, backgroundColor:"white" }}>
      <ScrollView horizontal>
        <ScrollView>
          <DataTable style={styles.cont}>
            <DataTable.Header style={styles.tableHead}>
            <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>CNIC</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Name</Text>
          </DataTable.Title>

          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Amount</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Nature</Text>
            </DataTable.Title>
              
              </DataTable.Header>
            </DataTable>
          </ScrollView>
        </ScrollView>
      </View>
 );
}


////////////////////////////// Advocate ///////////////////////////////

function AdvocateScreen({ navigation, route }) {
  const { consultantId } = route.params;
  console.log('Consultant ID in AdvocateScreen:', consultantId);

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications associated with the consultant
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://10.113.76.119:8000/api/applications/consultant/${consultantId}/applications`);
        const data = await response.json();

        if (response.ok) {
          setApplications(data);
        } else {
          console.log('Failed to fetch applications:', data.error);
        }
      } catch (error) {
        console.log('Network request failed:', error);
      }
    };

    fetchApplications();
  }, [consultantId]);

  return (
    <View style={{ flex: 1, marginTop: 10,backgroundColor:"white" }}>
      <ScrollView horizontal>
        <DataTable style={styles.cont}>
          <DataTable.Header style={styles.tableHead}>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>ID</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>NatureOfCase</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Name</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Status</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleHead, { color: 'white',fontSize:15,fontWeight:"bold"}]}>Instructions</Text>
          </DataTable.Title>
          </DataTable.Header>

          {applications.map((application) => (
            <TouchableOpacity
              key={application._id}
              onPress={() =>
                navigation.navigate('Detail', {
                  applicationData: application,
                })
              }
            >
              <DataTable.Row>
                <DataTable.Cell>{application._id}</DataTable.Cell>
                <DataTable.Cell>{application.NatureOfCase}</DataTable.Cell>
                <DataTable.Cell>{`${application.FirstName} ${application.LastName}`}</DataTable.Cell>
                <DataTable.Cell>{new Date(application.createdAt).toLocaleDateString()}</DataTable.Cell>
                <DataTable.Cell>{application.Status}</DataTable.Cell>
                <DataTable.Cell>{application.Instructions}</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}



function Detail({ navigation ,route}) {
  const { applicationData } = route.params;
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
          color: 'black',
        }}>
        Detail 
      </Text>
      <ScrollView>
      <View style={{ marginTop:20, backgroundColor: 'white', padding: 20 }}>
      <Text style={{color:"black"}}>ID : {applicationData._id}</Text>
      <Text style={{color:"black"}}>Name : {applicationData.FirstName} {applicationData.LastName}</Text>
      <Text style={{color:"black"}}>CNIC : {applicationData.CNIC}</Text>
      <Text style={{color:"black"}}>Phone Number : {applicationData.PhoneNumber}</Text>
      <Text style={{color:"black"}}>Email : {applicationData.Email}</Text>
      <Text style={{color:"black"}}>District : {applicationData.district}</Text>
      <Text style={{color:"black"}}>City : {applicationData.City}</Text>
      <Text style={{color:"black"}}>Address : {applicationData.Address}</Text>
      <Text style={{color:"black"}}>Nature of Case : {applicationData.NatureOfCase}</Text>
      <Text style={{color:"black"}}>Application Details : {applicationData.ApplicationDetails}</Text>
      <Text style={{color:"black"}}>Status : {applicationData.Status}</Text>
    
    </View>

   
    </ScrollView>
      </View>

  );
}




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{
        header: () => <CustomHeader />
      }}>
        <Stack.Screen name="Logo" component={LogoScreen} />


        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />

<Stack.Screen
          name="Choose"
          component={Choose}
        />

        <Stack.Screen name="InputOtp" component={InputOtp} />
        <Stack.Screen
          name="Root"
          component={Root}
        />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,

        }} />

        <Stack.Screen name="AppSelect" component={AppSelect} /> 
       
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="EvaluatorLogin" component={EvaluatorLogin} />
        <Stack.Screen name="AdvocateLogin" component={AdvocateLogin} />

        <Stack.Screen name="OptionScreen" component={OptionScreen} />
        <Stack.Screen name="AdvocateScreen" component={AdvocateScreen} />
        <Stack.Screen name="CreateYour" component={CreateYour} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Status" component={Status} options={{
          headerShown: false,

        }} ></Stack.Screen>
        <Stack.Screen name="Feedback" component={Feedback} options={{
          headerShown: false,

        }}></Stack.Screen>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          //options={{ headerShown: false,
          // }}
        />
        <Stack.Screen
          name="AppList"
          component={AppList}
          
        />
        <Stack.Screen
          name="Advocate"
          component={Advocate}
          
        />
        <Stack.Screen
          name="NewAdvocate"
          component={NewAdvocate}
          
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          
        />
        
        <Stack.Screen
          name="AcceptComments"
          component={AcceptComments}
          
        />
        

        <Stack.Screen
          name="DlecFeedback"
          component={DlecFeedback}
          
        />
        <Stack.Screen
          name="LJCP"
          component={LJCP}
          
        />
        

<Stack.Screen
          name="District"
          component={District}
          
        />

<Stack.Screen
          name="AddDistrict"
          component={AddDistrict}
          
        />
       
        <Stack.Screen
          name="AdminNotification"
          component={AdminNotification}
          
        />

<Stack.Screen
          name="Balance"
          component={Balance}
          
        />
        

        
        <Stack.Screen
          name="OpenDetail"
          component={OpenDetail}
          //options={{ headerShown: false,
          // }}
        />

<Stack.Screen
          name="Detail"
          component={Detail}
          //options={{ headerShown: false,
          // }}
        />

<Stack.Screen
          name="StatusDetail"
          component={StatusDetail}
          //options={{ headerShown: false,
          // }}
        />

<Stack.Screen
          name="FundsRecord"
          component={FundsRecord}
          //options={{ headerShown: false,
          // }}
        />

<Stack.Screen
          name="ApplicationReport"
          component={ApplicationReport}
          //options={{ headerShown: false,
          // }}
        />
        
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          //options={{ headerShown: false,
          // }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 28,
    width: 390,
    justifyContent: "space-evenly",
  },
  tableHeader: {
    backgroundColor: '#D3D3D3',
    fontWeight: 'bold',
    width: 390,
    padding: 5,
    justifyContent: "space-evenly",
    margin: 5,
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
  co:{
    marginTop:15
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003d2b',
    height: 70,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    //justifyContent:'center',
    // alignItems:'center',
    marginLeft: 105,
    padding: 10,

  },
  backButton: {
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  cont: {
    flex: 1,
    margin: 10,
    marginTop:20,
    width: 1000, // Adjust this width to fit your data
  },
  tableHead: {
    backgroundColor: '#003d2b',
    color:'white',
    padding:5,
    marginLeft:5,
    
  },
  titleHead: {
    
    fontWeight: 'bold',
    color:'white',
    padding:5,
    marginLeft:5,
  },
  cell: { flex: 1 },
  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legend: {
    flexDirection: 'row',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  logoutButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
    marginLeft:70,
  },
  logoutText: {
    color: 'white', // Logout button text color
  },
  HeadStyle: {
    height: 50,
    backgroundColor: '#003d2b',
    borderWidth: 1,
    marginTop: 25,
    padding: 5,
    margin: 5,
  },
  EvenRowStyle: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2', // Set a background color for even rows if needed
  },
  OddRowStyle: {
    height: 40,
    flexDirection: 'row',
  },
  TableText: {
    flex: 1,
    margin: 10,
  },
  table_head: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-evenly',
    padding: 7,
    backgroundColor: '#003d2b',
    
  },
  table_head_captions: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'space-evenly',
  },
  table_body_single_row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-evenly',
    borderColor: '#ddd',
    padding: 7,
  },
  table_data: {
    fontSize: 11,
  },
  table: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
  },
 

});
  

