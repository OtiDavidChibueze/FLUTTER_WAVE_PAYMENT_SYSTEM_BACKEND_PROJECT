import jwt from "jsonwebtoken";
import { F_SECRET_Key } from "../config/keys.mjs";
import logger from "../config/logger.mjs";

class TokenHelper {
  /**
   * @description -  THIS IS USED TO GENERATE A TOKEN
   * @param {object} user - THE USER DATA
   * @returns - RETURNS A HASHED TOKEN
   * @memberof TokenHelper
   */

  static async generateToken(user) {
    const payload = {
      user: user.id,
      role: user.role,
    };

    const options = {
      expiresIn: "1d",
    };

    try {
      const token = jwt.sign(payload, F_SECRET_Key, options);
      return token;
    } catch (err) {
      logger.error(`TokenHelper Generate Token -> Error : ${err.message}`);
    }
  }
}

export default TokenHelper;
