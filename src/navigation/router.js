import * as React from 'react';

// Navigations
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

//material icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import NewsListsScreen from '../screens/NewsListScreen';
import NewsDetails from '../screens/NewsDetailsScreen';
import FavoriteScreen from '../screens/FavouriteScreen';
import AboutScreen from '../screens/AbouteScreen'



const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

const HeaderLeft = () => {
    const navigation = useNavigation()

    return (
        <MaterialCommunityIcons name="menu" size={24} onPress={() => { navigation.openDrawer() }} />
    )
}

function HomeNavigator() {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="NewsListsScreen"
                component={NewsListsScreen}
                options={{ title: "All News", headerLeft: () => <HeaderLeft /> }}
            />
            <Stack.Screen
                options={{ title: "News Details" }}
                name="NewsDetails"
                component={NewsDetails} />
        </Stack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tabs.Navigator
        >
            <Tabs.Screen name="Home" options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} component={HomeNavigator} />

            <Tabs.Screen name="favorite" options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={size} />
                ), headerLeft: () => <HeaderLeft />
            }} component={FavoriteScreen} />
        </Tabs.Navigator>
    )
}

function Router() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="News" options={{
                headerShown: false,
            }} component={TabNavigator} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
}

export default Router;



