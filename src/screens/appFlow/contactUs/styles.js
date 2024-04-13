import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
    lineHeight: heightPixel(22),
  },
  row: {
    flexDirection: "row",
    marginTop: heightPixel(24),
  },
  icon: {
    height: heightPixel(48),
    width: widthPixel(48),
    resizeMode: "contain",
    marginRight: widthPixel(10),
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
    marginBottom: heightPixel(8),
  },
  subtitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
    marginBottom: heightPixel(8),
  },
  des: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.75),
    color: colors.black,
  },
});
