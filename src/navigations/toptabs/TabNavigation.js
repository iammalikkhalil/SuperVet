import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import screens from '../../screens';
import colors from '../../constants/colors';
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { color: colors.text.primary, fontFamily: "Urbanist-Regular", fontSize: 12 },
            swipeEnabled: false,
            tabBarItemStyle: { width: "auto" },
            tabBarStyle: { backgroundColor: colors.primary },
            tabBarScrollEnabled: true,
            tabBarPressColor: colors.primary,
            tabBarGap: 30,
            tabBarIndicatorStyle: { height: 4, backgroundColor: colors.secondary },
        }}>
            <Tab.Screen name="Featured" component={screens.Featured} />
            <Tab.Screen name="Super Unlimied" component={screens.SuperUnlimited} />
            <Tab.Screen name="Characters" component={screens.Characters} />
            <Tab.Screen name="Popular" component={screens.Popular} />
            <Tab.Screen name="Discover" component={screens.Discover} />
        </Tab.Navigator>

    );
}