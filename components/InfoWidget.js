import React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width;

const InfoWidget = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            <Text style={styles.header}>{props.header}</Text>
            <Text style={[styles.subtext, props.subtextStyle]}>{props.subtext}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth * .8,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#111',
        fontSize: 20
    },
    subtext: {
        color: 'green',
        fontSize: 40
    }
});

export default InfoWidget;