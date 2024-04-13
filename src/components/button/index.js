import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { colors, fontFamily, heightPixel, wp } from "../../services";
import { useSelector } from "react-redux";

const Button = ({
  style,
  disable,
  containerStyle,
  onPress,
  themeColor,
  payoutButton,
  bidButton,
  shadow,
  children,
  marginBottom,
}) => {
  const theme = useSelector((state) => state.user.themeColor);

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        disabled={disable}
        style={[
          shadow && styles.shadow,
          {
            ...styles.container,
            ...containerStyle,
            borderRadius: payoutButton ? 12 : bidButton ? 10 : 30,
            backgroundColor: themeColor ? themeColor : theme,
            marginBottom: marginBottom ? marginBottom : heightPixel(20),
          },
        ]}
        onPress={onPress}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...styles.label, ...style }}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {},
  container: {
    width: "100%",
    height: heightPixel(48),
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  label: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
