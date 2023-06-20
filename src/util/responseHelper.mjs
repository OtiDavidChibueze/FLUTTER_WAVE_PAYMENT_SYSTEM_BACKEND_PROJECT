class ResponseHelper {
  /**
   * @param {object} res - THE RESPONSE OBJECT
   * @param {number} statusCode - THE STATUS CODE  TO BE SENT
   * @param {string} message  - THE RESPONSE MESSAGE
   * @param {object} data - THE DATA TO BE RETURNED
   * @memberof ResponseHelper
   */

  static async successResponse(res, statusCode, message, data) {
    return res.status(statusCode).json({ status: "success", message, data });
  }

  /**
   * @param {object} res - THE RESPONSE OBJECT
   * @param {number} statusCode - THE STATUS CODE  TO BE SENT
   * @param {string} message  - THE RESPONSE MESSAGE
   * @memberof ResponseHelper
   */

  static async errorResponse(res, statusCode, message) {
    return res.status(statusCode).json({ status: "failed", message });
  }
}

export default ResponseHelper;
