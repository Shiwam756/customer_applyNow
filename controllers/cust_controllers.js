import db from "../database/db.js";

export const custLoanApply = (req, res) => {
  const custLoanData = req.body;
  db.query("INSERT INTO customer SET ?", custLoanData, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Customer data inserted");
      res.status(201).json({ message: "Loan Applied successfully" });
    }
  });
};

export const getCustLoanData = (req, res) => {
  db.query("SELECT * FROM customer", (err, rows) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Customer data retrieved");
      res.status(200).json(rows);
    }
  });
};
