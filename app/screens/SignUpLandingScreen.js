import React from "react";
import {StyleSheet, View, ImageBackground} from "react-native";
import SignUpFormScreen from "./SignUpFormScreen";

function SignUpLandingScreen(props) {
//    const image = {uri: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"};
    return (
        //      <ImageBackground source={image} style={styles.image} imageStyle={{ opacity: 1 }}>
        <View style={styles.singUpLandingRootContainer}>
            <View style={styles.singUpLandingChildContainer}>
                <SignUpFormScreen/>
            </View>
        </View>
        //    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    singUpLandingChildContainer: {
        height: 650,
        justifyContent: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 25

    },
    singUpLandingRootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // opacity: '0.5'
    }
});
export default SignUpLandingScreen;
