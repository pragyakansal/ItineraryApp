import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homescreen';
import EditProfileScreen from '../screens/editprofilescreen';
import ProfileScreen from '../screens/profilescreen';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <StackNavigator>
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </StackNavigator>
      </NavigationContainer>
    );

}    
  
  export default StackNavigator