// PAYMENT ROUTES
import { Router } from "express";
const router = Router();
import PaymentController from "../controller/payment.mjs";

router.post("/payment", PaymentController.initializePayment);

router.get('/verifyTransaction' , PaymentController.verifyTransactionByRef_Id)

export default router;
