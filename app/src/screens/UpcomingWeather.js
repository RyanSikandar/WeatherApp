import React from 'react';
import { ImageBackground, SafeAreaView, View, Text, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({ item }) => (
        <ListItem dt_text={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main} />
    )
    const {container,image} = styles;
    return (
        <SafeAreaView style={
            container
        }>
            <ImageBackground source={require("../../../assets/upcoming-background.jpg")} style={image}>
                <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(i) => i.dt_txt} />
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
    },
    image: {

        flex: 1
    }

})

export default UpcomingWeather;