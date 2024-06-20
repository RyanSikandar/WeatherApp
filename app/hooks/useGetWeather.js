import { WEATHER_KEY } from '@env';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
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
                setErrorMsg('Failed to fetch weather data');
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

            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            } catch (error) {
                console.error(error);
                setErrorMsg('Failed to fetch location');
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        if (location) {
            fetchWeather(location);
        }
    }, [location]);

    return [loading, weather, errorMsg];
}
