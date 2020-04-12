import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function Category({ route, navigation }) {
  const { name } = route.name;
  return <Text>{JSON.stringify(name)}</Text>;
}
