import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../../constants";
import * as App from "../../../screens/appFlow";

const MyStack = createStackNavigator();
export class ActivityStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={routes.addActivity}
        screenOptions={{ headerShown: false }}
      >
        <MyStack.Screen name={routes.addActivity} component={App.AddActivity} />
      </MyStack.Navigator>
    );
  }
}
