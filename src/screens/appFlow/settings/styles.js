import { StyleSheet } from "react-native";
import { colors, fontFamily, heightPixel, widthPixel } from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  userProfile: {
    height: heightPixel(100),
    width: widthPixel(100),
    borderRadius: widthPixel(100),
    marginBottom: heightPixel(9),
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
  },
  subTitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.0),
    color: colors.lightText,
  },
  listView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: heightPixel(16),
    borderBottomColor: colors.listColor,
  },
  iconStyle: {
    height: heightPixel(20),
    width: widthPixel(20),
    resizeMode: "contain",
    marginRight: widthPixel(10),
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.0),
  },
});
