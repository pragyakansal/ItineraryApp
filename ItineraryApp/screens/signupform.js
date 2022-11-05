import { ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, TextInput, SafeAreaView } from 'react-native';
import React, { Component } from 'react';

const localImage = require('ItineraryApp/assets/appimages/signupformbackground.png')
{/* const image = { uri : "https://images.unsplash.com/photo-1492138195150-d71143066b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"} */}
class SignUpForm extends Component {
  render() {
    return (
    <View style={styles.container}>
        <ImageBackground source={localImage} resizeMode="cover" style={styles.localImage}>
        </ImageBackground>
        <TextInput style={styles.titleText}>Sign Up</TextInput>
        <TextInput style={styles.inputField} placeholder="Full Name"></TextInput>
        <TextInput style={styles.inputField} placeholder="Email Address"></TextInput>
        <TextInput style={styles.inputField} placeholder="Username"></TextInput>
        <TextInput style={styles.inputField} placeholder="Password"></TextInput>
        <TextInput style={styles.inputField} placeholder="Confirm Password"></TextInput>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.inputFieldText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.inputFieldText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.inputFieldText}>Sign up with Facebook</Text>
        </TouchableOpacity>
    </View>    
    )
  }  
}

export default SignUpForm


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  localImage: {
    flex: 1,
    justifyContent: "center",
    height: 610,
    width: 420,
  },

  titleText: {
    fontSize: 45,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 480,
  },

  inputField: {
    width: 278,
    height: 49,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputFieldText: {
    fontSize: 20
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: "#744578",
    width: 278,
    height: 49,
    marginBottom: 22,
    marginHorizontal: 100,
  },
  
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: "#DA5263",
    width: 278,
    height: 49,
    marginBottom: 22,
    marginHorizontal: 75,
  },
  
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: "#1D54A6",
    width: 278,
    height: 49,
    marginBottom: 22,
    marginHorizontal: 50,
  },

});