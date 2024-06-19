import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import CurrentWeather from '../../src/screens/CurrentWeather';
import UpcomingWeather from '../../src/screens/UpcomingWeather';
import City from '../../src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
    return (

        <Tab.Navigator
            screenOptions={
                {
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: 'black',
                    },
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white',
                    }
                }
            }>
            <Tab.Screen name={'Current'} options={{
                tabBarIcon: ({ focused }) => (<Feather name='droplet' size={25} color={focused ? "tomato" : 'white'} />)
            }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{ tabBarIcon: ({ focused }) => (<Feather name='clock' size={25} color={focused ? "tomato" : 'white'} />) }} />
            <Tab.Screen name={'City'} component={City} options={{ tabBarIcon: ({ focused }) => (<Feather name='home' size={25} color={focused ? "tomato" : 'white'} />) }} />
        </Tab.Navigator>

    )
};
export default Tabs;
