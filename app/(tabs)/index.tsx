import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../src/components/Tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent>
     <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
export default App;