import React, { useState, useEffect } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import TenorGIFs from '../screens/Tenor';
const SearchBarComponent = () => {
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState('');

    const updateSearch = (searchText) => {
        setSearch(searchText);
    };

    const performSearch = () => {
        try {
            console.log("Performing search with query:", search);
            setSearchTerm(search);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                round={true}
                showCancel={true}
                placeholder="Search gifs..."
                onChangeText={updateSearch}
                value={search}
                onSubmitEditing={performSearch}
                returnKeyType='search'
                platform="default"
                
            />
            <TenorGIFs term={searchTerm} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,

    },

});

export default SearchBarComponent;
