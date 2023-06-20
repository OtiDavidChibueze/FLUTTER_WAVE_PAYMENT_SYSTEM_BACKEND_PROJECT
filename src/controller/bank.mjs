// BANK CONTROLLER

import { successResponse, errorResponse } from "../util/responseHelper.mjs";
import QuestionService from "../service/bank.mjs";
import logger from "../config/logger.mjs";

class BankController {
  static async getAllBank() {
    try {
      const result = await QuestionService.getAllBanks();

      if (result.statusCode == 409)
        return errorResponse(res, result.statusCode, result.message);

      logger.info(
        `Bank Controller -> Info : Bank fetched successfully : ${result.data}`
      );

      return successResponse(
        res,
        result.statusCode,
        result.message,
        result.data
      );
    } catch (err) {
      logger.error(`Bank Controller -> Error : ${err.message}`);
    }
  }
}

export default BankController;
