// App.js

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/toptabs/TabNavigation';
import components from './src/components';
import DrawerComponent from './src/navigations/drawer/DrawerNavigator';
import IntroNavigator from './src/navigations/stack/IntroNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <IntroNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});