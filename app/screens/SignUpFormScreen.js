import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from "yup";
import AppFormField from "../component/forms/AppFormField";
import AppForm from "../component/forms/AppForm";
import SubmitButton from "../component/forms/SubmitButton";
import colors from '../config/colors';
import LinkText from "../component/LinkText";
import appStyles from "../config/appStyles";
import FormTopPanel from "./FormTopPanel";
import {useNavigation} from "@react-navigation/native";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("FirstName"),
    lastName: Yup.string().required().label("LastName"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const SignUpFormScreen = () => {
    const navigation = useNavigation();
    const handleSubmit = (userInfo) => {
        navigation.navigate("SingUpProfile");
        console.log(userInfo)
    };

    return (
        <View style={styles.signUpFormRootContainer}>
            <View style={{width: 400}}>
                <FormTopPanel/>
                <View style={styles.signUpFormContainer}>
                    <AppForm
                        initialValues={{firstName: "", lastName: "", email: "", password: ""}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}>
                        <AppFormField
                            autoCorrect={false}
                            icon="account"
                            name="firstName"
                            label="First Name*"
                        />
                        <AppFormField
                            autoCorrect={false}
                            icon="account"
                            name="lastName"
                            label="Last Name*"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            label="Email*"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            label="Password*"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="Register"/>
                        <View style={{paddingTop: 10}}>
                            <LinkText linkScreen="Login" style={appStyles.linkStyle}>
                                I am already a member, Sign In.
                            </LinkText>
                        </View>
                    </AppForm>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signUpFormContainer: {
        height: 500,
        backgroundColor: colors.white
    },
    signUpFormRootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    linkStyle: {
        color: colors.linkColor,
        alignSelf: 'center'
    }

});

export default SignUpFormScreen;
