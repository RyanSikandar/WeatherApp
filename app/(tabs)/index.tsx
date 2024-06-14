import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../src/components/Tabs';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      if (location)
        console.log(location);
      setLocation(location);
      setLoading(false);
    };

    const timer = setTimeout(fetchLocation, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <NavigationContainer independent>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
