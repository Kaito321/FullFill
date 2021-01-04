import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import logo from './logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/Full_Fill_Logo.png';
import LogIn from './LogIn.js';
import NPOrgs from './NPApp.js';

function Home({navigation}){
    return (
      <View style={styles.container}>
            <Image source={logo} style={{ width: 308, height: 100.5, resizeMode: 'contain' }} />
        
         <TouchableOpacity
           style={styles.Ibutton}>
        </TouchableOpacity>
        
        <Text style={styles.regText}>The world produces enough food to feed the whole population, yet we people face hunger every day. We aim to close that gap by facilitating communication between farmers that face over production to nonprofits who aim to help those facing hunger and people who need these resources.</Text>
        
        <TouchableOpacity
           style={styles.Ibutton}>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => alert('Consumer Page!') }  style={styles.button}>
          <Text  style={styles.buttonText}>Consumer</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.Ibutton2}>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(LogIn)} style={styles.button}>
          <Text  style={styles.buttonText}>Farmer</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.Ibutton2}>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(LogIn)} style={styles.button}>
          <Text  style={styles.buttonText} >Non-Profit</Text>
        </TouchableOpacity>

      </View>
    );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#A1BF34",
    padding: 10,
    borderRadius: 5,
    resizeMode: 'contain',

  },
  buttonText: {
    fontSize: 20,
  //fontFamily: 'bebas neue rounded',
    fontWeight: 'bold',
    color: '#fff',
      
  },
  regText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#888',
  },
  Ibutton: {
    padding: 20,
    borderRadius: 5,
  },
  Ibutton2: {
    padding: 10,
    borderRadius: 5,
  },

});
