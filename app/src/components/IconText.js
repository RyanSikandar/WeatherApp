import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({iconName, text}) => {
    return (
        <View style={styles.wrapper}>
            <Feather name={iconName} size={50} color="black" />
            <Text style={styles.textTheme}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
       fontWeight:"bold",
       
    },
})

export default IconText