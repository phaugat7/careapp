import React, {useState} from "react";
import {Image, StyleSheet} from "react-native";

import Screen from "../component/Screen";
import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import colors from "../config/colors";
import defaultStyles from '../config/styles';
import LinkText from "../component/LinkText";


function LoginScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={defaultStyles.loginContainer}>
            <Image
                style={styles.logo}
                source={require("../assets/homepage.png")}/>
            <AppTextInput
                autoCorrect={false}
                keyboradType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton title="Login" onPress={() => navigation.navigate("Signup")}/>
            <LinkText linkScreen="Signup" style={styles.linkStyle}>Create Medgaia Account</LinkText>
            <LinkText linkScreen="Signup" style={styles.linkStyle}>Forgot Password?</LinkText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
    childLogin: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    logoText: {
        color: 'green',
        fontSize: 24,
        fontFamily: 'Verdana',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'darkblue',
        backgroundColor: colors.white,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    linkStyle: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5,
    }
});
export default LoginScreen;
