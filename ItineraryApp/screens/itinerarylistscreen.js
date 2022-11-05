import { ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import React, { Component } from 'react';

class ItineraryListScreen extends Component {
  render() {
    <View style={styles.container}>
      <ImageBackground source={require('../assets/appimages/loginformbackground.png')} resizeMode="cover" style= {{flex: 1, justifyContent: "center", height: 650, width: 500,}}>
      <Text style={styles.custom}>Login</Text>
      </ImageBackground>
    </View>    
  }  
}

export default ItineraryListScreen


const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  custom: {
    fontFamily: 'ABeeZee',
    fontSize: 28,
    color: "white",
    textAlign: "center",
  },

});