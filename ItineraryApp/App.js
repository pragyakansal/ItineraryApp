
import React, { Component, useState } from 'react';
//import CalendarPicker from 'react-native-calendar-picker'
import type {Node} from 'react';
import SignupScreen from './screens/signupscreen';
import HomeScreen from './screens/homescreen';
import SignUpForm from './screens/signupform';
import LoginForm from './screens/loginform';
import ItineraryListScreen from './screens/itinerarylistscreen';
import BookmarksScreen from './screens/bookmarksscreen';
import StackNavigator from './components/StackNavigator';

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignupForm from './screens/signupform';
import BottomNavBar from './components/BottomNavigation';
import { Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
*/

class App extends Component {
render() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="SignupForm">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="ItineraryListScreen" component={ItineraryListScreen} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="BookmarksScreen" component={BookmarksScreen} />
        </Stack.Navigator> */}
      <BottomNavBar />
    </NavigationContainer>
  );
}
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;