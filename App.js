import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import SignUpLandingScreen from './app/screens/SignUpLandingScreen';
import LoginFormScreen from "./app/screens/LoginFormScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator initalRouteName="text">
        <Stack.Screen name="Login" component={LoginFormScreen}/>
        <Stack.Screen name="SignUp" component={SignUpLandingScreen}/>
    </Stack.Navigator>
)


export default function App() {
    const [value, onChangeText] = React.useState('Useless Placeholder');

    /*return (
         <View style={styles.rootContainer}>
             <View style={styles.container}>
                <LoginScreenBkp/>
             </View>
         </View>
    );*/
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                /*backgroundColor: 'blue',*/
            },
            web: {
                width: 400,
                height: 400,
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
