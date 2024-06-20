import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../src/components/Tabs';
import ErrorItem from '../src/components/ErrorItem';
import { useGetWeather } from '../hooks/useGetWeather';
import TenorGIFs from '../src/screens/Tenor';
import MySearchBar from '../src/components/SearchBar';
const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, weather, errorMsg] = useGetWeather();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        {errorMsg ? (<ErrorItem message={errorMsg} />) : (
          <ActivityIndicator size="large" color="white" />
        )}
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.loadingContainer}>
        <ErrorItem />
      </View>
    );
  }

  return (
    <NavigationContainer independent>
      <Tabs weather={weather} />
    </NavigationContainer>
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
