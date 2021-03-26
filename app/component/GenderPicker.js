import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function GenderPicker({icon, width = "100%", ...otherProps}) {
    const [state, setState] = useState({
        mBackgroundColor: colors.white,
        fBackgroundColor: colors.white,
        mColor: colors.black,
        fColor: colors.black,
        isPressed: false
    });

    const styles = getStyles(state.mBackgroundColor, state.fBackgroundColor, state.mColor, state.fColor);

    const [gender, setGender] = useState(0);
    const onPress = () => {
        setGender(gender);
        console.log(state);
        if (state.isPressed) {
            setState(
                {
                    mBackgroundColor: colors.touchableButtonColor,
                    fBackgroundColor: colors.white,
                    mColor: colors.white,
                    fColor: colors.black,
                    isPressed: false
                }

            );
        } else {
            setState(
                {
                    mBackgroundColor: colors.white,
                    fBackgroundColor: colors.touchableButtonColor,
                    mColor: colors.black,
                    fColor: colors.white,
                    isPressed: true
                });
        }
    }
    return (
        <View style={[styles.container, {width}]}>
            <TouchableOpacity
                style={styles.maleGenderView}
                onPress={onPress}>
                <AppText style={styles.maleText}>Male</AppText>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.femaleGenderView}
                onPress={onPress}>
                <AppText style={styles.femaleText}>Female</AppText>
            </TouchableOpacity>
        </View>
    );
}

const getStyles = (mBackgroundColor, fBackgroundColor, mColor, fColor) => StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: "row",
        width: '100%',
        //padding: 15,

    },
    icon: {
        margin: 10
    },
    textInput: {},
    maleGenderView: {
        alignItems: "center",
        backgroundColor: mBackgroundColor,
        borderWidth: 1,
        marginLeft: 15,
        padding: 20,
        width: 120,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    femaleGenderView: {
        alignItems: "center",
        backgroundColor: fBackgroundColor,
        borderStartWidth: 0,
        borderWidth: 1,
        padding: 20,
        width: 120,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    maleText: {
        color:mColor
    },
    femaleText: {
        color:fColor
    }
})


export default GenderPicker;
