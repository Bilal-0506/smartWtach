import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { EventRegister } from "react-native-event-listeners";

import { routes } from "..";
import themeContext from "../config/themeContext";
import theme from "../config/theme";
import DrawerNavigator from "./drawerFlow";

const MyStack = createStackNavigator();
export const MainNavigator = () => {
  const [mode, setMode] = useState();

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#0000",
    },
  };

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={MyTheme}>
        <MyStack.Navigator
          initialRouteName={routes.drawer}
          screenOptions={{ headerShown: false }}
        >
          <MyStack.Screen name={routes.drawer} component={DrawerNavigator} />
        </MyStack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
