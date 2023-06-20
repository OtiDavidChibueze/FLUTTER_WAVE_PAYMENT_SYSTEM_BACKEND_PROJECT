// CHARGE METHOD MODEL 
import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var chargeMethodSchema = new mongoose.Schema({
  currency: {
    type: String,
    default: "NGN",
  },
  amount: {
    type: Number,
  },
  fullname: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  email: {
    type: String,
  },
  tx_ref: {
    type: String,
  },
  redirect_url: {
    type: String,
  },
});

//Export the model
export default mongoose.model("ChargeMethod", chargeMethodSchema);
