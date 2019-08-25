import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CharityScreen from "../screens/CharityScreen";
import PlaidScreen from "../screens/PlaidScreen";
import LogInScreen from "../screens/LogInScreen";
import { Ionicons } from "@expo/vector-icons";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Charity: {
      screen: CharityScreen
    },
    LogIn: {
      screen: LogInScreen
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  config
);
HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  //turn on/off tab bar
  if (routeName == "LogIn") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarOptions: {
      activeTintColor: "#ffd36f",
      inactiveTintColor: "#b8bece"
    },
    tabBarIcon: ({ focused }) => (
      <Ionicons
        // focused={focused}
        name="ios-home"
        color={focused ? "#ffd36f" : "#b8bece"}
        size={26}
        // name={
        //   Platform.OS === "ios"
        //     ? `home${focused ? "" : ""}`
        //     : "md-information-circle"
        // }
      />
    )
  };
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Plaid: PlaidScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarOptions: {
    activeTintColor: "#ffd36f",
    inactiveTintColor: "#b8bece"
  },
  tabBarIcon: ({ focused }) => (
    <Ionicons
      size={26}
      name="ios-person"
      color={focused ? "#ffd36f" : "#b8bece"}
      // name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarOptions: {
    activeTintColor: "#ffd36f",
    inactiveTintColor: "#b8bece"
  },
  tabBarIcon: ({ focused }) => (
    <Ionicons
      size={26}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
      color={focused ? "#ffd36f" : "#b8bece"}
    />
  )
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  SettingsStack
});

export default tabNavigator;
