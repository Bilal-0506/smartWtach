import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "../../constants";
import { TabNavigator } from "../tabFlow";
import {
  ActivityListing,
  AddActivity,
  EditProfile,
  Listing,
  TaskDetail,
} from "../../../screens/appFlow";

const Drawer = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ gestureEnabled: true, headerShown: false }}
    >
      <Drawer.Screen name={routes.tab} component={TabNavigator} />
      <Drawer.Screen name={routes.activiyListing} component={Listing} />
      <Drawer.Screen name={routes.taskDetail} component={TaskDetail} />
      <Drawer.Screen name={routes.addActivity} component={AddActivity} />
      <Drawer.Screen name={routes.editProfile} component={EditProfile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
