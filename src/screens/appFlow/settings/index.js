import React, { useRef, useEffect, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ToggleSwitch from "toggle-switch-react-native";

import {
  appIcons,
  appImages,
  colors,
  heightPixel,
  routes,
} from "../../../services";
import { GlobalScroll } from "../../../components";
import { styles } from "./styles";

const Settings = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);
  const [toggle, setToggle] = useState(false);
  const [toggleOne, setToggleOne] = useState(false);

  const list = [
    {
      id: 1,
      icon: appIcons.userIcon,
      title: "Edit Profile",
      route: routes.editProfile,
      button: false,
      params: "",
    },
    {
      id: 2,
      icon: appIcons.userIcon,
      title: "Invite Friends",
      route: routes.inviteFriends,
      button: false,
      params: "",
    },
    {
      id: 3,
      icon: appIcons.settingIcon,
      title: "Notification Setting",
      route: "",
      button: true,
      val: toggle,
      setVal: setToggle,
    },
    {
      id: 4,
      icon: appIcons.settingIcon,
      title: "Show Friend to all",
      route: "",
      button: true,
      val: toggleOne,
      setVal: setToggleOne,
    },
    {
      id: 5,
      icon: appIcons.notifIcon,
      title: "Feedback",
      route: routes.feedback,
      button: false,
      params: "",
    },
    {
      id: 6,
      icon: appIcons.contactIcon,
      title: "Contact Us",
      route: routes.contactUs,
      button: false,
      params: "",
    },
    {
      id: 7,
      icon: appIcons.privacyIcon,
      title: "Privacy Policy",
      route: routes.content,
      button: false,
      params: "Privacy Policy",
    },
    {
      id: 8,
      icon: appIcons.termIcon,
      title: "Terms of Use",
      route: routes.content,
      button: false,
      params: "Term Of Use",
    },
    {
      id: 9,
      icon: appIcons.aboutUsIcon,
      title: "About Us",
      route: routes.content,
      button: false,
      params: "About Us",
    },
    {
      id: 10,
      icon: appIcons.logoutIcon,
      title: "Logout",
      route: "",
      button: false,
      params: "",
    },
    {
      id: 11,
      icon: appIcons.deleteICon,
      title: "Delete Account",
      route: routes.delete,
      button: false,
      params: "",
    },
  ];

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <GlobalScroll
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Settings"}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={appImages.profileImage} style={styles.userProfile} />
        <Text style={styles.title}>Danial Austin</Text>
        <Text style={styles.subTitle}>danial123@gmail.com</Text>
      </View>
      <View style={{ marginTop: heightPixel(24) }}>
        {list.map((item, index, arr) => (
          <Pressable
            onPress={() =>
              item?.route && item.title !== "Logout"
                ? navigation.navigate(item.route, { title: item.params })
                : navigation.reset({
                    index: 0,
                    routes: [{ name: routes.auth }],
                  })
            }
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
                  color:
                    item.title == "Delete Account"
                      ? colors.textRed
                      : colors.black,
                }}
              >
                {item.title}
              </Text>
            </View>
            {item.button && (
              <View>
                <ToggleSwitch
                  isOn={item.val}
                  onColor={theme}
                  offColor={colors.offButton}
                  size="medium"
                  onToggle={(isOn) => item.setVal(isOn)}
                />
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </GlobalScroll>
  );
};

export default Settings;
