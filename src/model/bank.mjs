//  BANK MODEL
import mongoose from "mongoose"; // Erase if already required
import mongoosePaginate from "mongoose-paginate-v2";

// Declare the Schema of the Mongo model
var bankSchema = new mongoose.Schema({
  code: {
    type: Number,
  },
  name: {
    type: String,
  },
});

// PLUGIN MONGOOSE PAGINATE
bankSchema.plugin(mongoosePaginate);

//Export the model
export default mongoose.model("Bank", bankSchema);
