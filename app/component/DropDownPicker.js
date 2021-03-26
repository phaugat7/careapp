import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import defaultStyles from '../config/styles';
import {TextInput} from 'react-native-paper';

function DropDownPicker({icon, width = "100%", ...otherProps}) {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={[styles.container, {width}]}>
            <Picker
                style={styles.picker}
                mode={'dialog'}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: "row",
        width: '100%',
        paddingLeft: 15,

    },
    icon: {
        margin: 10
    },
    textInput: {},
    picker: {
        padding: 15
    }
})


export default DropDownPicker;
