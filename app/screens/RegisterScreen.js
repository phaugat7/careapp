import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Screen from "../component/Screen";
import AppFormField from "../component/forms/AppFormField";
import AppForm from "../component/forms/AppForm";
import * as Yup from "yup";
import ErrorMessage from "../component/forms/ErrorMessage";
import colors from "../config/colors";
import SubmitButton from "../component/forms/SubmitButton";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("FirstName"),
    lastName: Yup.string().required().label("LastName"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});


function RegisterScreen(props) {
    const [error, setError] = useState();
    const handleSubmit =  (userInfo) => {
        console.log(userInfo)
    }
        return (
        <>
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{firstName: "", lastName: "", email: "", password:""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error}/>
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
                </AppForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: colors.light
    },
    activity: {
        padding: 10
    }
});
export default RegisterScreen;
