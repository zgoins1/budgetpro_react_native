import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import InfoWidget from "../components/InfoWidget";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <InfoWidget header="Net Balance" subtext="$200.00" style={styles.infoWidgetMargin} subtextStyle={styles.subtextGreen}/>
            <InfoWidget header="Total Debt" subtext="$1000.00" style={styles.infoWidgetMargin} subtextStyle={styles.subtextRed}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 25
    },
    subtextGreen: {
        color: 'green'
    },
    subtextRed: {
        color: 'red'
    },
    infoWidgetMargin: {
        marginBottom: 15
    }
})

export default HomeScreen;