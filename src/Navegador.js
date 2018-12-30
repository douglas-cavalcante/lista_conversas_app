import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Welcome from "./Welcome";
import Chat from "./Chat";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome
  },
  Chat: {
    screen: Chat,
  }
});

export default createAppContainer(AppNavigator); 