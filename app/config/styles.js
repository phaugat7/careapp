import colors from "./colors";
import {Platform, StyleSheet, useWindowDimensions} from "react-native";

export default {
    colors,
    appText: {
        fontSize: 17,
        width: '100%',
        //fontFamily: 'SF Pro Text,SF Pro Icons,AOS Icons,Helvetica',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign: 'center',

    },
    text: {
        color: colors.white,
        backgroundColor: colors.white,
        fontSize: 18,
        width: '100%',
        //fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },

    linkText: {
        color: '#06c',
        fontSize: 17,
        fontWeight: '400',
        //fontFamily: 'SF Pro Text,SF Pro Icons,AOS Icons,Helvetica'
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    loginContainer: {
        alignItems: 'center',
        ...Platform.select({
            ios: {
                width: '100%',
            },
            android: {
                width: '100%',
            },
            web: {
                // backgroundColor: 'blue',
                width: 400,
                height: 600,
                alignSelf: 'center'
            }
        }),
    },
    commonScreenContainer: {
        alignItems: 'center',
        ...Platform.select({
            ios: {
                width: '100%',
            },
            android: {
                width: '100%',
            },
            web: {
                //alignSelf: 'center',
                backgroundColor: 'red',
                height: '100%',
                width: 1036,
            }
        }),
    },
    rootContainer: {
        alignItems: 'center',
        // justifyContent: 'center',

        ...Platform.select({
            ios: {
                backgroundColor: 'red',
                width: '100%',
            },
            android: {
                /*backgroundColor: 'blue',*/
                alignItems: 'center',
                width: '100%',
            },
            web: {
                // backgroundColor: 'blue',
                width: 800,
                height: 600,
                alignSelf: 'center'
            }
        }),
    }

}

