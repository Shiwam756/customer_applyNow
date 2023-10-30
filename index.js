import express from "express";
import router from "./routes/cust_routes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});
