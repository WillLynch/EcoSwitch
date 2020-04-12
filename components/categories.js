import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { CATEGORIES } from "../constants";
import { CATEGORIES_STYLES } from "../styles";

export default function Categories({ navigation }) {
  return (
    <FlatGrid
      itemDimension={130}
      items={CATEGORIES}
      style={CATEGORIES_STYLES.gridView}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.route)}
          style={CATEGORIES_STYLES.itemContainer}
        >
          <Text style={CATEGORIES_STYLES.itemName}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
