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
  input: {
    marginTop: heightPixel(20),
    height: heightPixel(180),
    backgroundColor: colors.inActiveBg,
    borderWidth: widthPixel(1),
    borderColor: colors.inActiveColorOne,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.75),
    borderRadius: widthPixel(10),
    color: colors.black,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
});
