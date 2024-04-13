import React, { useRef, useEffect, useState } from "react";
import { View, Image, Text, Share, Alert, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { appIcons, appImages, colors, heightPixel } from "../../../services";
import { GlobalScroll } from "../../../components";
import { styles } from "./styles";

const InviteFriends = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);

  const list = [
    {
      id: 1,
      icon: appIcons.whatsappIcon,
      title: "Invite Friends by WhatsApp",
      route: "",
      button: false,
    },
    {
      id: 2,
      icon: appIcons.mailIcon,
      title: "Invite Friends by email",
      route: "",
      button: false,
    },
    {
      id: 5,
      icon: appIcons.smsIcon,
      title: "Invite Friends by sms",
      route: "",
      button: false,
    },
    {
      id: 6,
      icon: appIcons.shareIcon,
      title: "Share Invitation",
      route: "",
      button: false,
    },
  ];

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <GlobalScroll
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Invite Friends"}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}
    >
      <View style={{}}>
        {list.map((item, index, arr) => (
          <Pressable
            onPress={() => onShare()}
            key={item.id}
            style={{
              ...styles.listView,
              borderBottomWidth:
                arr.length - 1 != index ? heightPixel(1) : heightPixel(0),
            }}
          >
            <View style={styles.rowCenter}>
              <Image source={item.icon} style={styles.iconStyle} />
              <Text
                style={{
                  ...styles.listTitle,
                  color: colors.black,
                }}
              >
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </GlobalScroll>
  );
};

export default InviteFriends;
