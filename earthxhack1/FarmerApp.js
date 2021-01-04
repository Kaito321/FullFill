import React from 'react';
import {Image,TextInput,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import pic from './pic.jpeg'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Farmers() {
  const [value, onChangeText] = React.useState(' ');
  return (
    <View style={styles.container}>

          <Text style={{fontSize:42,textAlign:'center', fontWeight: 'bold', color: '#A1BF34'}}>Farmers</Text>


       <Image source={pic} style={{ width: 415, height: 200, alignItems:'center' }} />

    <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
      <Text style={styles.subText}>Name of farm:</Text>


    <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
    value={value}/>
        <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>

      <Text style={styles.subText}>Location of farm:</Text>

        <TextInput
    style={styles.textInput}
    onChangeText={text => onChangeText(text)}
    value={value}
          />
      <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
    <Text style={styles.subText}>Resource to give:</Text>

      <TextInput
    style={styles.textInput2}
    onChangeText={text => onChangeText(text)}
    value={value}
          />
        <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
  <TouchableOpacity
        onPress={() => alert('Sent to nearby non-profits!')} style={styles.button}>
        <Text  style={styles.buttonText}>Send to non-profits</Text>
      </TouchableOpacity>
  </View>
  );
}
export default Farmers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#FFFDD4',
     alignItems: 'center',
     justifyContent: 'center',
  },
  subText:{
    fontSize: 14,
    textAlign: 'left',
    color: '#888',
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
    backgroundColor: "#A1BF34",
    padding: 20,
    borderRadius: 10,
    alignSelf:"center",
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }, 

});
