import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { dbClient } from "../App";
import { REMINDERS_STYLES } from "../styles";

export default function Reminders({ navigation }) {
  const [reminders, setReminders] = useState();

  useEffect(() => {
    dbClient.select((items) => setReminders(items));
    console.log(reminders);
  }, [reminders && reminders.length]);

  return (
    <View>
      <FlatGrid
        itemDimension={200}
        items={reminders}
        renderItem={({ item }) => (
          <View style={[REMINDERS_STYLES.itemContainer]}>
            <Text style={REMINDERS_STYLES.itemName}>{item.name}</Text>
            <Text style={REMINDERS_STYLES.itemCode}>{item.description}</Text>
          </View>
        )}
        style={REMINDERS_STYLES.gridView}
      />
    </View>
  );
}
