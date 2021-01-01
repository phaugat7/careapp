import colors from "./colors";
import {Platform} from "react-native";

export default {
    colors,
    text: {
        color: colors.white,
        backgroundColor: colors.white,
        fontSize: 18,
        width: '100%',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
}

