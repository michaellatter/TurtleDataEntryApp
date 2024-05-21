// database.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'TurtleDatabase.db',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  (error) => {
    console.log('Error: ' + error);
  }
);

export const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Capture (
        id TEXT PRIMARY KEY,
        tag TEXT,
        species TEXT,
        nestingActivity TEXT
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      (error) => {
        console.log('Error creating table: ' + error);
      }
    );
  });
};

export const insertOrUpdateDatasheet = (datasheet) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT OR REPLACE INTO Capture (id, tag, species, nestingActivity) VALUES (?, ?, ?, ?)`,
      [datasheet.id, datasheet.tag, datasheet.species, datasheet.nestingActivity],
      () => {
        console.log('Datasheet saved successfully');
      },
      (error) => {
        console.log('Error saving datasheet: ' + error);
      }
    );
  });
};

export const getDatasheetById = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Capture WHERE id = ?',
      [id],
      (tx, results) => {
        if (results.rows.length > 0) {
          callback(results.rows.item(0));
        } else {
          callback(null);
        }
      },
      (error) => {
        console.log('Error retrieving datasheet: ' + error);
      }
    );
  });
};
