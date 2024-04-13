import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashboardStack } from "../appFlow/dashboardStack";
import { appIcons, colors, fontFamily } from "../../utilities";
import { heightPixel, routes, widthPixel } from "../../constants";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useSelector } from "react-redux";
import { SettingStack } from "../appFlow/settingsStack";
import { ActivityStack } from "../appFlow/activityStack";

const Tab = createBottomTabNavigator();

export function TabNavigator({ navigation }) {
  const theme = useSelector((state) => state.user.themeColor);
  const tabArray = [
    {
      id: 1,
      route: "Home",
      icon: appIcons.tabIcon,
      component: DashboardStack,
      color: colors.theme,
    },
    {
      id: 2,
      route: "Add",
      icon: appIcons.tabIconFour,
      component: ActivityStack,
      color: colors.theme,
    },
    {
      id: 3,
      route: "Profile",
      icon: appIcons.tabIconFour,
      component: SettingStack,
      color: colors.theme,
    },
  ];

  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    return item.id == 2 ? (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes?.addActivity)}
        activeOpacity={1}
        style={[styles.container]}
      >
        <Image
          source={appIcons.addIcon}
          style={{
            height: heightPixel(60),
            width: widthPixel(60),
            resizeMode: "contain",
            marginBottom: heightPixel(70),
          }}
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.container]}
      >
        <View style={[styles.btn]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={item.icon}
              style={[
                styles.tabIcon,
                { tintColor: focused ? theme : colors.grey },
              ]}
            />
            <Text
              style={{
                ...styles.routeText,
                color: focused ? theme : colors.inActiveColorTwo,
              }}
            >
              {item.route}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
      }}
    >
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.white,
    height: heightPixel(70),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderWidth: 0,
  },
  tabIcon: {
    width: widthPixel(35),
    height: heightPixel(35),
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  routeText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
  },
});
