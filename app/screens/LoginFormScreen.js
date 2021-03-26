import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import appStyles from "../config/appStyles";
import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import LinkText from "../component/LinkText";
import AppText from "../component/AppText";
import FormTopPanel from "./FormTopPanel";

const LoginFormScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.loginFormRootContainer}>
            <View style={{width: 400}}>
                <FormTopPanel/>
                <View style={styles.loginFormContainer}>
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

                    <AppText style={{paddingTop: 20}}>
                        Not a Medgaia member?
                        <LinkText linkScreen="SignUp" style={appStyles.linkStyle}> Join Now</LinkText>
                    </AppText>

                    <LinkText linkScreen="SignUp" style={styles.forgotPassword}>
                        Forgot Password?
                    </LinkText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginFormContainer: {
        height: 500,
        backgroundColor: colors.white
    },
    loginFormRootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    forgotPassword: {
        color: colors.linkColor,
        alignSelf: 'center',
        paddingTop: 10
    }

});

export default LoginFormScreen;
