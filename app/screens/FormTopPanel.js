import React from "react";
import {Image, StyleSheet, View} from "react-native";

export function FormTopPanel(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/homepage.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
});
export default FormTopPanel;
