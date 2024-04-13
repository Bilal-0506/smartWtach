import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  inputView: {
    borderBottomWidth: widthPixel(1),
    marginTop: heightPixel(20),
  },
  inputTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.white,
    marginBottom: heightPixel(5),
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: responsiveFontSize(1.75),
    fontFamily: fontFamily.appTextMedium,
    color: colors.black,
    height: heightPixel(40),
    verticalAlign: "middle",
    textAlignVertical: "center",
    width: "80%",
  },
  iconStyle: {
    height: heightPixel(18),
    width: heightPixel(18),
    resizeMode: "contain",
    marginBottom: heightPixel(8),
  },
  dropView: {
    height: heightPixel(120),
    backgroundColor: colors.grey,
    borderRadius: widthPixel(12),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  dropScroll: {
    flexGrow: 1,
    paddingTop: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
  profileIMage: {
    marginBottom: heightPixel(10),
    height: heightPixel(110),
    width: widthPixel(110),
    resizeMode: "cover",
    borderRadius: widthPixel(120),
  },
  positionAbsolute: {
    position: "absolute",
    bottom: heightPixel(0),
    right: widthPixel(0),
  },
  editIcon: {
    height: heightPixel(36),
    width: widthPixel(36),
    resizeMode: "contain",
  },
  buttonView: {
    marginTop: heightPixel(20),
    height: heightPixel(170),
    width: widthPixel(170),
    borderRadius: widthPixel(170),
    backgroundColor: colors.theme,
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    container: {
      padding: 5,
    },
    text: {
      fontFamily: fontFamily.appTextSemiBold,
      fontSize: responsiveFontSize(3.0),
      textAlign: "center",
      color: colors.theme,
    },
  },
  buttonHeading: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(4.0),
    textAlign: "center",
    color: colors.theme,
  },
  buttonText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(6.0),
    textAlign: "center",
    color: colors.theme,
  },
  buttonInnerView: {
    height: heightPixel(140),
    width: widthPixel(140),
    backgroundColor: colors.grey,
    borderRadius: widthPixel(140),
    justifyContent: "center",
    alignItems: "center",
  },
});
