import { StyleSheet } from "react-native";
import { fonts, fontSize } from "./fonts";
import { colors } from "./colors";
import { ph } from "../utils/ResponsiveScreen";

export default StyleSheet.create({
    titleText : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_16,
    },
    gradientColor : ['#0A2F1E', '#118368', '#0A2F1E'],

    seperation : {
        width: '100%',
            height: 2,
            backgroundColor: colors.seperation,
            marginVertical: ph(9),
    },
    
    REGULAR_10 : {
        fontFamily: fonts.REGULAR,
        fontSize : fontSize.FS_10,
    },
    REGULAR_12 : {
        fontFamily: fonts.REGULAR,
        fontSize : fontSize.FS_12,
    },
    REGULAR_14 : {
        fontFamily: fonts.REGULAR,
        fontSize : fontSize.FS_14,
    },
    REGULAR_16 : {
        fontFamily: fonts.REGULAR,
        fontSize : fontSize.FS_16,
    },
    MEDIUM_14 : {
        fontFamily: fonts.MEDIUM,
        fontSize : fontSize.FS_14,
    },
    SEMIBOLD_12 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_12,
    },
    SEMIBOLD_14 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_14,
    },
    SEMIBOLD_16 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_16,
    },
    SEMIBOLD_18 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_18,
    },
    SEMIBOLD_20 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_20,
    },
    SEMIBOLD_22 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_22,
    },
    SEMIBOLD_24 : {
        fontFamily: fonts.SEMIBOLD,
        fontSize : fontSize.FS_24,
    },
    BOLD_16 : {
        fontFamily: fonts.BOLD,
        fontSize : fontSize.FS_16,
    },
    BOLD_18 : {
        fontFamily: fonts.BOLD,
        fontSize : fontSize.FS_18,
    },
    BOLD_20 : {
        fontFamily: fonts.BOLD,
        fontSize : fontSize.FS_20,
    },
    BOLD_22 : {
        fontFamily: fonts.BOLD,
        fontSize : fontSize.FS_22,
    },
})