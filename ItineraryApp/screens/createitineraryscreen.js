import {Icon, SafeAreaView, TextInput, ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, Image } from 'react-native';
import React, { Component, useState } from 'react';
//import CalendarPicker from 'react-native-calendar-picker'

const image = { uri: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"};

const changeVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

}


class CreateItineraryScreen extends Component {
  render(){
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.text}>Choose Dates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.text}>Add Activity by Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.text}>Add Activity from Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.text}>Choose Times for Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Finish</Text>
        </TouchableOpacity>
    </View>  
    )  
  }
};
export default CreateItineraryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  custom: {
    fontFamily: 'ABeeZee',
    fontSize: 38,
    color: "#744578",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: 'white',
    fontSize: 22,
    width: '80%',
    height: 50,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d7d7d7',
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: "#1D54A6",
    width: 205,
    height: 56,
    marginBottom: 22,
    marginHorizontal: 100
  },  
  text: {
    fontSize: 22,
  }
  
});