import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    height: heightPixel(48),
    width: widthPixel(48),
    resizeMode: "cover",
    borderRadius: widthPixel(48),
    marginRight: widthPixel(15),
  },
  mb5: { marginBottom: heightPixel(5) },
  subTitle: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.75),
    color: colors.lightText,
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
  },
  handIcon: {
    height: heightPixel(16),
    width: widthPixel(16),
    resizeMode: "contain",
    marginLeft: widthPixel(5),
  },
  heading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.25),
    color: colors.black,
  },
  subHeading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
  },
  event: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightPixel(20),
  },
});
