import {ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, Button, SafeAreaView, ActivityIndicator, TextInput } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import CustomAndroid from '../components/CustomAndroid';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';



class EditProfileScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            {takePhotoWithCamera()}
            {usePhotoFromGallery()}
            <View style={styles.profilePicture}>
                {takePhotoWithCamera()}
                {usePhotoFromGallery()}
            </View>
          </View>
        </View>
      )
    }
  };


const takePhotoWithCamera = () => {
    ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
}

const usePhotoFromGallery = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(image => {
        console.log(image);
      });
}
  
export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: 775,
        height: 273,
        color: "#744578",
    },

    profilePicture: {
        width: 143,
        height: 143,
        borderRadius: 143/2,
        borderColor: "#DA5263",
    }

})