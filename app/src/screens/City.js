import React from 'react';
import { StatusBar, View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/city-background.jpg')} style={styles.imageLayout}>

                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <Feather size={50} color={"black"} name={'user'} />
                    <Text style={styles.populationText}>8 Million</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name='sunrise' color="white" size={50} />
                    <Text style={styles.riseSetText}>10:56:10 am</Text>
                    <Feather name='sunset' color='white' size={50} />
                    <Text style={styles.riseSetText}>10:10:010 pm</Text>
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
