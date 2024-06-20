import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { TENOR_API_KEY } from '@env';

const TenorGIFs = (props) => {
    const { term } = props;
    const [gifs, setGifs] = useState([]);
    const [next, setNext] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchGIFs = async (query, nextPos) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=${query}&key=${TENOR_API_KEY}&limit=6&pos=${nextPos}`);
            setNext(response.data.next);
            setGifs(prevGifs => [...prevGifs, ...response.data.results]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (term) {
            console.log("Fetching GIFs for:", term);
            setGifs([]);
            fetchGIFs(term, '');
        } else {
            setGifs([]);
        }
    }, [term]);

    const handleEndReached = () => {
        if (next && !loading) {
            fetchGIFs(term, next);
        }
    };

    return (
        <FlatList
            data={gifs}
            keyExtractor={(item) => item.id}
            numColumns={3}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            columnWrapperStyle={{
                justifyContent: "space-between",
            }}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item.media_formats.gif.url }}
                    style={styles.gif}
                />
            )}
            ListFooterComponent={loading && <ActivityIndicator size="large" color="black" animating={loading} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    gif: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
});

export default TenorGIFs;
