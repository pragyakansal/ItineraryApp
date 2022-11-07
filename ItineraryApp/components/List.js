import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, FlatList, View, SafeAreaView} from "react-native";

const Item = ({name, details}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
    </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        color: "#000000",

    },

    location: {
        fontSize: 15,
        color: "#000000",
    },
})