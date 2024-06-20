import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../../utils/weatherType';
import RowText from '../components/RowText';
import TenorGIFs from './Tenor';
const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
  const weatherConditions = weather[0].main;
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherConditions]?.backgroundColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherConditions]?.icon}
          size={100}
          color="white"
        />
        <Text style={styles.tempStyles}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like: ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
       
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherConditions]?.message}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'gray',
    flex: 1
  },
  tempStyles: {
    color: "white",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "white"
  },
  highLow: {
    fontSize: 20,
    color: "white"
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,



  },
  description: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  
  },
  message: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    alignItems: "center"
  },

})

export default CurrentWeather;