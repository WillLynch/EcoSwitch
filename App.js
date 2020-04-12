import * as React from "react";
import { Button, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Reminders from "./components/reminders";
import CategoriesNavigation from "./components/categories_navigation";
import DbClient from "./components/db_client"

export var dbClient = new DbClient()

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  dbClient.initDb()

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#414451' }}>
        <Tab.Screen name="Categories" component={CategoriesNavigation} />
        <Tab.Screen name="My Reminders" component={Reminders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}