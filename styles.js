import { StyleSheet } from "react-native";

const colors = {
  green: "#416634",
  white: "#FFF"
};

export const APP_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#416634",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const REMINDERS_STYLES = StyleSheet.create({
  gridView: {
    marginTop: 100,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 60,
    backgroundColor: colors.green,
  },
  itemName: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#FFF",
  },
});

export const CATEGORIES_STYLES = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    //justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: colors.green,
  },
  itemName: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: colors.white,
  },
});
