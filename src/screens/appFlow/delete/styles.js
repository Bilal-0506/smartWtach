import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  row: { flexDirection: "row", marginBottom: heightPixel(12) },
  iconStyle: {
    height: heightPixel(20),
    width: widthPixel(20),
    resizeMode: "contain",
    marginRight: widthPixel(12),
  },
  subHeading: {
    color: colors.red,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
  },
  text: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
    lineHeight: heightPixel(22),
  },
});
