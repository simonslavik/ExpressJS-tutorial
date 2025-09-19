import {DatabaseSync} from "node:sqlite";

const db = new DatabaseSync(':memory:');

// execute sql statements from strings
db.exec(`
    CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT);
`);

db.exec(`
    CREATE TABLE todos (id INTEGER, user_id INTEGER )
`);

export default db;