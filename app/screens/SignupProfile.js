import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FormTopPanel from "./FormTopPanel";
import AppTextInput from "../component/AppTextInput";
import colors from "../config/colors";
import AppText from "../component/AppText";
import GenderPicker from "../component/GenderPicker";
import AppDatePicker from "../component/AppDatePicker";

function SignupProfile(props) {

    const [date, setDate] = useState();
    const [gender, setGender] = useState(0);
    const onPress = () => setGender(gender);
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.formRootContainer}>
            <View style={{width: 400}}>
                <FormTopPanel/>
                <View style={styles.formChildContainer}>
                    <AppTextInput
                        autoCorrect={false}
                        keyboradType="zipCode"
                        placeholder="Zip Code"
                    />
                    <View style={{textAlign: 'left', paddingLeft: 15, paddingBottom: 10}}>
                        <AppText style={{textAlign: 'left'}}>Select Gender</AppText>
                    </View>

                    <GenderPicker/>

                    <AppDatePicker/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formRootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    formChildContainer: {
        backgroundColor: colors.white
    }

});
export default SignupProfile;
