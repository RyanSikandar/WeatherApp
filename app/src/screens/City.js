import React from 'react';
import { StatusBar, View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset } = weatherData;
    
    // Convert Unix timestamps from seconds to milliseconds
    const formattedSunrise = moment(sunrise * 1000).format('h:mm a');
    const formattedSunset = moment(sunset * 1000).format('h:mm a');
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/city-background.jpg')} style={styles.imageLayout}>

                <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
                <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
                <View style={styles.populationWrapper}>
                    <Feather size={50} color={"black"} name={'user'} />
                    <Text style={styles.populationText}>{`Population: ${population}`}</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name='sunrise' color="white" size={50} />
                    <Text style={styles.riseSetText}>{formattedSunrise}</Text>
                    <Feather name='sunset' color='white' size={50} />
                    <Text style={styles.riseSetText}>{formattedSunset}</Text>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "black"
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 7.5
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default City;
