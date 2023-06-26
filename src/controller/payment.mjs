// TRANSFER CONTROLLER
import PaymentService from "../service/payment.mjs";
import ResponseHelper from "../util/responseHelper.mjs";
import logger from "../config/logger.mjs";

class PaymentController {
  /**
   * @description - RETURNS A JSON
   * @param { object } - THE RESPONSE OBJECT
   * @returns - RETURNS THE JSON MESSAGE
   * @memberof PaymentController
   */

  static async initializePayment(req, res) {
    try {

      const user = req.body

      const result = await PaymentService.initializePayment(user);

      if (result.statusCode == 409)
        return ResponseHelper.errorResponse(
          res,
          result.statusCode,
          result.message,
          result.data
        );

      logger.info(
        `CreateTransfer -> Info : transfer queued successfully :  ${result.data}`
      );

      return ResponseHelper.successResponse(
        res,
        200,
        "transfer queued successfully ",
        result.data
      );
    } catch (error) {
      logger.error(`Payment_Controller -> Error : ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong"
      );
    }
  }


  /**
   * @description - RETURNS A JSON
   * @param {object} req - THE REQUEST OBJECT
   * @param {object} res - THE RESPONSE OBJECT
   * @returns - RETURNS THE JSON MESSAGE
   * @memberof PaymentController  
   */
  static async verifyTransactionByRef_Id(req, res) {
    try {
      const tx_ref = req.body;
  
      const result = await PaymentService.verifyTransactionByRef_Id(tx_ref);
  
      if (result.statusCode == 409) return ResponseHelper.errorResponse(res, result.statusCode, result.message);
  
      logger.info(`verifyTransactionByRef_Id -> Info : payment verification successful , payment confirmed : ${result.data} `);
  
      return ResponseHelper.successResponse(res, result.statusCode , result.message , result.data)
      
    } catch (error) {
        logger.error(`verifyTransactionByRef_Id -> Error : ${error.message}`)
    }
  }

}

export default PaymentController;
