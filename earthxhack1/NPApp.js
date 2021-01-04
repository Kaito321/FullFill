import React from 'react';
import {DataTable, Image,StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import pic from './nonprofpic.jpeg'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function NPOrgs({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:32,textAlign:'center'}}>Non-Profits</Text>
      
        <Image source={pic} style={{ width: 415, height: 200, alignItems:'center' }} />

        <TouchableOpacity
          style={styles.Ibutton2}>
        </TouchableOpacity>

      <Text style={styles.subText}>Schedule:</Text>
      <Text style={styles.subsubText2}>Delivery:                            Pick Up:</Text>
      <Text style={styles.subsubText}> 11:00AM                          10:00AM</Text>
      <Text style={styles.subsubText}> 5:00PM                            4:00PM</Text>
      <Text ></Text>
      <Text style={styles.subText}>Farm Info:</Text>
      <Text style={styles.subsubText2}>Farm:            Location:            Resource:            Availability:</Text>
      <Text style={styles.subsubText}>D-Bar Farm    Denton,TX         Carrots              MWF 9AM</Text>
      <Text ></Text>
      <Text style={styles.subText}>Communities:</Text>
      <Text ></Text>
      <Text style={styles.subsubText}>North Texas Food Bank</Text>
      <Text style={styles.subsubText}>Crossroads Community Services</Text>
      <Text style={styles.subsubText}>Baptist Benevolent Ministries of Irving</Text>
      <Text style={styles.subsubText}>Carver Heights Food Pantry</Text>
    </View>
  );
}
export default NPOrgs;

const styles = StyleSheet.create({
  subText:{
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontWeight:'bold'
  },
  subsubText:{
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
    textAlign: 'center',

  },
  subsubText2:{
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
    textAlign: 'center',
    fontWeight:'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  textInput: {
    height: 40, width: 400, borderColor: 'gray', borderWidth: 1 
  },
  textInput2: {
    height: 200, width: 400, borderColor: 'gray', borderWidth: 1 
  },
  Ibutton2: {
    padding: 10,
    borderRadius: 5,
  },  
  button: {
    width: 250,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    alignSelf:"center",
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  }, 
});
