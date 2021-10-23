import React from "react";
import { Platform, StyleSheet, Text, View } from 'react-native'


const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === "android" ? '#72bcd4' : '#fff',
        padding: 15,
        borderBottomColor: Platform.OS === 'android' ? '#ffffff' : 'green',
        borderBottomWidth: 1
    },
    headerTitle: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        color: Platform.OS === 'android'? '#fff':'#000'
    }
})

export default Header;