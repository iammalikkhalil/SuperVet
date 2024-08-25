import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import screens from '../../screens';
import DrawerContent from './DrawerContent'; // Custom drawer content if needed
import components from '../../components';
import TabNavigation from '../toptabs/TabNavigation';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            header: ({ navigation }) => <components.Navbar navigation={navigation} />,
            headerShown: true,
            swipeEnabled: false,
        }} drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="Characters" component={screens.Characters} />
            <Drawer.Screen name="Popular" component={screens.Popular} />
        </Drawer.Navigator>
    );
}