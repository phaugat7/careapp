import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import AppTextInput from "./app/component/AppTextInput";
import RegisterScreen from "./app/screens/RegisterScreen";


export default function App() {
    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <RegisterScreen/>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue',
            },
            web: {
                width: 400,
                height: 400
            }
        }),
    },
    innerContainer: {
        //width: 200,
    },
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }

});
