import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useSelector } from "react-redux";

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from "../../services";

const ReminderCard = ({
  item,
  index,
  button,
  onPress,
  buttonTitle,
  disable,
}) => {
  const theme = useSelector((state) => state.user.themeColor);
  return (
    <View
      key={index}
      style={{ ...styles.container, backgroundColor: colors.white }}
    >
      <View style={{ ...styles.iconView }}>
        <Image source={appIcons.successIcon} style={styles.imageView} />
      </View>
      <View>
        <View style={{ ...styles.row }}>
          <Text style={styles.title}>Success!</Text>
        </View>
        <View style={{ ...styles.row, justifyContent: "flex-start" }}>
          <Text style={{ ...styles.subTitle }}>
            Your workout has went great!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: heightPixel(18),
    paddingVertical: heightPixel(18),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
    borderRadius: widthPixel(12),
    alignItems: "center",
    marginBottom: heightPixel(16),
  },
  iconView: {
    width: heightPixel(57),
    height: heightPixel(57),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: widthPixel(80),
    marginRight: widthPixel(14),
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.black,
    marginBottom: heightPixel(8),
  },
  subTitle: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.75),
    color: colors.lightText,
  },
});
