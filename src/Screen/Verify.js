function Verify({ navigation }) {
    const [openCity, setOpenCity] = useState(false);
   const [selectedCity, setSelectedCity] = useState(null);
   const [openDistrict, setOpenDistrict] = useState(false);
   const [selectedDistrict, setSelectedDistrict] = useState(null);
 
   const cityData = [
     { label: 'Islamabad', value: 'Islamabad' },
     { label: 'Rawalpindi', value: 'Rawalpindi' },
     { label: 'Multan', value: 'Multan' },
     { label: 'Gujranwala', value: 'Gujranwala' },
     { label: 'Faisalabad', value: 'Faisalabad' },
   ];
   const districtData = [
     { label: 'Fine', value: 'Fine' },
     { label: 'Court Fee', value: 'Court Fee' },
     { label: 'Legal Aid', value: 'Legal Aid' },
     { label: 'Help', value: 'Help' },
   ];
    
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
               height: 55,
               padding: 5,
               color: 'black',
             }}
             placeholder=" City"></TextInput>
 
           
              <DropDownPicker
             placeholder="District"
             style={{
               width: 370,
               backgroundColor: 'white',
               marginTop: 25,
               borderColor: '#003d2b',
               borderWidth: 2,
               height: 55,
               padding: 5,
               color: 'black',
             }}
             open={openCity}
             value={selectedCity}
             items={cityData}
             setOpen={setOpenCity}
             setValue={setSelectedCity}
             setItems={null}
           />
      
 
           <TextInput
             style={{
               width: 370,
               backgroundColor: 'white',
               marginTop: 35,
               borderColor: '#003d2b',
               borderWidth: 2,
               height: 60,
               padding: 5,
               color: 'black',
             }}
             placeholder=" Address"></TextInput>
 
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
             open={openDistrict}
             value={selectedDistrict}
             items={districtData}
             setOpen={setOpenDistrict}
             setValue={setSelectedDistrict}
             setItems={null}
           />
           <TextInput
             style={{
               width: 370,
               backgroundColor: 'white',
               marginTop: 30,
               borderColor: '#003d2b',
               borderWidth: 2,
               height: 325,
               padding: 5,
               color: 'black',
             }}
             placeholder=" Discription"></TextInput>
 
           <TouchableOpacity
             onPress={() =>
               Alert.alert('Your response has been suceesfully uploaded')
             }
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
             }}>
             <Text style={{ color: 'white', textAlign: 'center',fontSize:20,fontWeight:"bold" }}>Submit</Text>
           </TouchableOpacity>
         </View>
       </ScrollView>
     </View>
   );
 }