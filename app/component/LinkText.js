import React from "react";
import {Text, Button} from "react-native";
import {useNavigation} from '@react-navigation/native';
import defaultStyles from '../config/styles';

function LinkText({children, style, linkScreen, ...otherProps}) {
    const navigation = useNavigation();
    return (
        <Text
            style={[defaultStyles.linkText, style]}
            {...otherProps}
            onPress={() => navigation.navigate(linkScreen)}
        >
            {children}
        </Text>
    );

}

export default LinkText;
