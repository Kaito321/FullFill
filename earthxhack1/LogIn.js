
import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/Full_Fill_Logo.png';
import Farmers from './FarmerApp.js';

function LogIn({navigation}) {
const [value, onChangeText] = React.useState(' ');
  return (
          <View style={styles.container}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.instructions}>
              Username</Text>
          <Text style={styles.instructions} >
              Password
          </Text>
          <TouchableOpacity style={styles.button}
          title="Go To LogIn"
          onPress={() => navigation.navigate(Farmers)} >
                     <Text style={styles.buttonText}> LogIn </Text>
        </TouchableOpacity>
    </View>
  );
}
export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
    resizeMode: 'contain',
},
instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
},
button: {
    backgroundColor: "#A1BF34",
    padding: 10,
    borderRadius: 5,
},
buttonText: {
fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
}
});
