import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                City
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default City;
