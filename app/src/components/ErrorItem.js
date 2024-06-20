import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>Sorry, something went wrong.</Text>
            <Feather name='frown' size={100} color='white' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'maroon',
        width: '100%'
    },
    errorMessage: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ErrorItem;
