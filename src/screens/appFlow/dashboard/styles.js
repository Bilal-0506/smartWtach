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
    color: colors.white,
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.white,
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
    color: colors.white,
  },
  subHeading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
  },
  cardStyle: {
    width: "46%",
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    alignItems: "center",
    backgroundColor: colors.carColor,
    borderRadius: widthPixel(12),
  },
  cardText: {
    fontSize: responsiveFontSize(2.8),
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    marginTop: heightPixel(15),
    marginBottom: heightPixel(15),
  },
  thirdHeading: {
    marginTop: heightPixel(4),
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    textAlign: "center",
  },
  view: {
    flex: 1,
    marginTop: heightPixel(24),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  flatView: {
    flexGrow: 1,
    marginTop: heightPixel(24),
    paddingTop: heightPixel(2),
    paddingHorizontal: widthPixel(2),
  },
});
