import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../src/components/Tabs';
import * as Location from 'expo-location';

import {useGetWeather} from '../hooks/useGetWeather';
const Tab = createBottomTabNavigator();

const App = () => {
  const { loading, weather, location, errorMsg } = useGetWeather();
  console.log(loading,errorMsg,weather);

  if(weather && weather.list)
    {
      return (
        <NavigationContainer independent>
          <Tabs weather={weather}/>
        </NavigationContainer>
      );
    }
 
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
