import React from "react";
import {StyleSheet, View} from "react-native";
import defaultStyles from '../config/styles';
import {TextInput} from 'react-native-paper';

function AppTextInput({icon, width = "100%", ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            <TextInput
                style={{ marginTop: 15, backgroundColor: '#fff'}}
                autoComplete="non-used-text"
                selectTextOnFocus={false}
                mode='flat'
                style={defaultStyles.text} {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: "row",
        width: '100%',
        padding: 15,

    },
    icon: {
        margin: 10
    },
    textInput: {}
})


export default AppTextInput;
