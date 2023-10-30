import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "AddRupee",
  password: "Addrupee@7052",
  database: "addrupee",
});

db.connect((err) => {
  if (err) {
    console.log("Error in Connecting to database..." + err);
  } else {
    console.log("Database Connected successfully!");
  }
});

export default db;
