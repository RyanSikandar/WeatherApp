import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../../utils/weatherType';
import RowText from '../components/RowText';
const CurrentWeather = () => {

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType['Clouds']?.backgroundColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType['Clouds']?.icon}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{`48°`}</Text>
        <Text style={styles.feels}>{`Feels like: 50°`}</Text>
        <RowText
          messageOne={`High: 60° `}
          messageTwo={`Low: 10°`}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={weatherType['Clouds']?.title}
        messageTwo={weatherType['Clouds']?.message}
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
  temp: {
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
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  message: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    alignItems: "center"
  }
})

export default CurrentWeather;