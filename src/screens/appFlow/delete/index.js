import React, { useRef, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { appIcons, heightPixel, routes } from "../../../services";
import { Button, GlobalScroll } from "../../../components";
import { styles } from "./styles";

const Delete = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <GlobalScroll
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Delete My Account"}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={styles.row}>
          <Image source={appIcons.warnIcon} style={styles.iconStyle} />
          <Text style={styles.subHeading}>Delete your account will:</Text>
        </View>
        <View>
          <Text style={styles.text}>
            We're sorry to see you go. If you're sure you want to delete your My
            surprise account, please be aware that this action is permanent and
            cannot be undone. All of your personal information, including your
            information and settings, will be permanently deleted.
            {"\n"} {"\n"}
            If you're having trouble with your account or have concerns, please
            reach out to us at [contact email or support page] before proceeding
            with the account deletion. We'd love to help you resolve any issues
            and keep you as a valued Pro Search user.
          </Text>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate(routes.deleteVerfication)}
        marginBottom={heightPixel(1)}
        children={"Send OTP"}
      />
    </GlobalScroll>
  );
};

export default Delete;
