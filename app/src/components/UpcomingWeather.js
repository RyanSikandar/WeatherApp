import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';

const UpcomingWeather =()=>{
    return(
        <SafeAreaView style={
            styles.container
        }>   
    <Text>Upcoming Weather</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{

    }
})

export default UpcomingWeather;