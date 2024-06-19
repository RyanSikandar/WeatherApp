import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../../utils/weatherType';
const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name={weatherType[condition].icon} size={50} color={"white"} />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{`${Math.round(min)}  ${Math.round(max)}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink"
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontSize: 15
    },
})
export default ListItem;