import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import { colors, fontFamily, heightPixel, widthPixel } from "../../services";

export const MyInput = ({
  title,
  value,
  setValue,
  placeHolder,
  disable,
  textColor,
  placeholderColor,
  font,
  keyboardType,
  multiline,
  fontSize,
  textAlignVertical,
  numberOfLines,
  maxLength,
  onSubmitEditing,
  height,
  secure,
  marginTop,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop ? marginTop : heightPixel(24),
        },
      ]}
    >
      <View style={{ marginBottom: heightPixel(5) }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={setValue}
        style={{
          height: height ? height : heightPixel(40),
          width: "100%",
          textAlignVertical: textAlignVertical,
          fontFamily: font ? font : fontFamily.appTextMedium,
          color: textColor ? textColor : colors.white,
          fontSize: fontSize ? fontSize : responsiveFontSize(1.75),
        }}
        placeholderTextColor={
          placeholderColor ? placeholderColor : colors.themeSecondary
        }
        keyboardType={keyboardType ? keyboardType : "default"}
        editable={disable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: widthPixel(1),
    borderBottomColor: colors.white,
  },
  title: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.0),
    color: colors.white,
  },
});
