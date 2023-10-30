import express from "express";
import {
  custLoanApply,
  getCustLoanData,
} from "../controllers/cust_controllers.js";

const router = express.Router();

router.post("/cust_loan_apply", custLoanApply);
router.get("/cust_get_loanData", getCustLoanData);

export default router;
