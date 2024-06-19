import { WEATHER_KEY } from '@env';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [weather, setWeather] = useState([]);
    const API_KEY = WEATHER_KEY;

    const fetchWeather = async (location) => {
        if (location) {
            try {
                console.log(location.coords.latitude, location.coords.longitude);
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`);
                const data = await response.json();
                setWeather(data);
            } catch (error) {

                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        const fetchLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setLoading(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        if (location) {
            fetchWeather(location);
        }
    }, [location]);

    return { loading, weather, location, errorMsg };
}