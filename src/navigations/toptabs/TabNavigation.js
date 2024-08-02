import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import screens from '../../screens';
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { color: "white", fontSize: 12 },
            tabBarItemStyle: { width: undefined },
            tabBarStyle: { backgroundColor: 'rgba(50, 48, 48, 1)' },
            tabBarScrollEnabled: true,
            tabBarPressColor: ""
        }}>
            <Tab.Screen name="About" component={screens.About} />
            <Tab.Screen name="Characters" component={screens.Characters} />
            <Tab.Screen name="Popular" component={screens.Popular} />
        </Tab.Navigator>

    );
}