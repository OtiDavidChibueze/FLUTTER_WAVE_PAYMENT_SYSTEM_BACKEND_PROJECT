// BANK SERVICE
import BankModel from "../model/bank.mjs";
import { F_PUBLIC_key, F_SECRET_Key } from "../config/keys.mjs";

class BankService {
  static async getAllBanks() {
    try {
      let config = {
        method: "get",
        maxBodyLength: "infinity",
        url: "https://api.flutterwave.com/v3/banks/NG?public_key=F_PUBLIC_key",
        headers: {},
      };
    } catch (err) {
      return logger.error(`Bank Service ->  Error : ${err.message}`);
    }
  }
}

export default BankService;
