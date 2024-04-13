import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
  },
  otpView: {
    width: "100%",
    height: heightPixel(48),
    marginBottom: heightPixel(40),
  },
  underlineStyleBase: {
    width: widthPixel(70),
    height: heightPixel(48),
    borderColor: colors.inActiveColorOne,
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(10),
    backgroundColor: colors.inActiveBg,
  },
  otpInputText: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
  },
  timerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: heightPixel(30),
    justifyContent: "center",
  },
  timerText: {
    fontSize: responsiveFontSize(2.0),
    letterSpacing: 0.25,
    fontFamily: fontFamily.appTextMedium,
  },
  resend: {
    fontSize: responsiveFontSize(2.0),
    fontFamily: fontFamily.appTextMedium,
    textAlign: "center",
  },
});
