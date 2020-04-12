import * as SQLite from "expo-sqlite";
import { CATEGORIES } from "../constants";

export default class DbClient {
  constructor() {
    this.db = SQLite.openDatabase("db.db");
  }

  initDb() {
    this.db.transaction((tx) => {
      console.log("creating tables");
      tx.executeSql("drop table reminders");
      tx.executeSql("drop table categories");

      tx.executeSql(
        "create table if not exists categories (id integer primary key not null, name text);",
        [],
        () => {
          console.log("created categories");
        }
      );
      tx.executeSql(
        "create table if not exists reminders (id integer primary key not null, active integer, name text, description text, category integer, FOREIGN KEY(category) REFERENCES categories(id));",
        [],
        () => {
          console.log("created reminders");
        }
      );
    });

    var reminders = [
      { name: "blah", description: "bleh" },
      { name: "blah", description: "bleh" },
    ];

    this.db.transaction((tx) => {
      for (category in CATEGORIES) {
        tx.executeSql(
          "insert into categories (name) values (?)",
          [category["name"]],
          () => {
            console.log("inserted categories");
          }
        );
      }
      for (index = 0; index < reminders.length; index++) {
        tx.executeSql(
          "insert into reminders (active, name, description, category) values (0, ?, ?, 0)",
          [reminders[index].name, reminders[index].description],
          () => {
            console.log("inserted reminder");
          }
        );
      }
    });
  }

  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) =>
      this.db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, { rows }) => resolve(rows._array),
          reject
        );
      })
    );
  };

  select = (callback) => {
    this.executeSql("select * from reminders", []).then(callback);
  };
}
