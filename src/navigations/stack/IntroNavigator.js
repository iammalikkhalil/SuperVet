// navigation/stack/IntroNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreens from '../../screens/intro';
import DrawerNavigator from '../drawer/DrawerNavigator';


const Stack = createStackNavigator();

export default function IntroNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroP1" component={IntroScreens.IntroP1} />
            <Stack.Screen name="IntroP2" component={IntroScreens.IntroP2} />
            <Stack.Screen name="IntroP3" component={IntroScreens.IntroP3} />
            <Stack.Screen name="IntroP4" component={IntroScreens.IntroP4} />
            <Stack.Screen name="Main" component={DrawerNavigator} />
        </Stack.Navigator>
    );
};
