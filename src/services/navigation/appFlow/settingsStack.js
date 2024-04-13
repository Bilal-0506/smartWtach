import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../../constants";
import * as App from "../../../screens/appFlow";

const MyStack = createStackNavigator();
export class SettingStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.editProfile}
        screenOptions={{ headerShown: false }}
      >
        <MyStack.Screen name={routes.editProfile} component={App.EditProfile} />
      </MyStack.Navigator>
    );
  }
}
