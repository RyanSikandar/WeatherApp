import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const CurrentWeather=() =>{
  const message = "Current Weather"

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />

        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like: 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.feels}>High: 8</Text>
          <Text style={styles.feels}> Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>Its perfect Shalwaar kameez weather</Text>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    fontSize: 20,
    color: "black"
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft:25,
    marginBottom:40

  },
  description:{
    fontSize:48,
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather;