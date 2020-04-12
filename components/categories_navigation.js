import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import Category from "./category";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./categories";
import { CATEGORIES } from "../constants";

const Stack = createStackNavigator();

export default function CategoriesNavigation({ navigation }) {
  const categoryComponents = CATEGORIES.map((item) => (
    <Stack.Screen name={item.route} component={Category} />
  ));
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Categories" component={Categories} />
      {categoryComponents}
    </Stack.Navigator>
  );
}
