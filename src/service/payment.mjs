// PAYMENT SERVICE
import axios from "axios";
import { F_SECRET_Key } from "../config/keys.mjs";
import logger from "../config/logger.mjs";

class PaymentService {
  /**
   * @description - THIS ENDPOINT IS USED TO CREATE A TRANSFER
   * @returns - RETURNS A JSON
   * @memberof TransferService
   */

  static async initializePayment(user) {
    try {
      const requestHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${F_SECRET_Key}`,
      };

      const url = "https://api.flutterwave.com/v3/payments";

      const tx_ref =  Date.now();

      let requestBody = JSON.stringify({
        tx_ref,
        amount: 50000,
        redirect_url: 'https://localhost:5000/api/v3/callback',
        customer: {
          email : user.email
        },
        customization: {
          title: 'Funds',
          logo : 'https://www.soroptimistindianrock.org/wp-content/uploads/2021/01/PAYMENT-SUCCESS.png'
        }
        });

      const response = await axios.post(url, requestBody, {
        headers: requestHeader,
      });
      console.log("response:", response.data);

      return {
        statusCode: 200,
        message: "transfer queued successfully",
        data: response.data,
        link : response.data.data.link
      };
    } catch (error) {      
      logger.error(`initializePayment -> Error : ${error.message}`)
    }
  }

  /**
   * @description - THIS ENDPOINT IS USED TO VERIFY A TRANSACTION BY THE TX_REF ID
   * @param {object} tx_ref - THE TX_REF ID TO VERIFY
   * @param {object} expectedAmount - THE EXPECTED AMOUNT OF THE TRANSACTION
   * @param {*} expectedCurrency - THE EXPECTED CURRENCY OF THE TRANSACTION
   * @returns - RETURNS A JSON
   * @memberof PaymentService
   */
  static async verifyTransactionByRef_Id(tx_ref, expectedAmount, expectedCurrency) {
    try {
      const response = await axios.get(`https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${tx_ref}`)
      headers = {
        "Content-Type": "application/json",
        Authorization: `bearer ${F_SECRET_Key}`
      } 
  
      console.log(response.data, response, response.data.data.amount);
      
      if(response.data.data.status === 'successful' &&  response.data.data.amount === expectedAmount , response.data.currency === expectedCurrency )
  
      return {
        statusCode : 200,
        message : 'payment verification successful , payment confirmed',
        data : response.data.data
      }
      
    } catch (error) {
        logger.error(`verifyTransactionByRef_Id -> Error : ${error.message}`)
    }
  }

}

export default PaymentService;
