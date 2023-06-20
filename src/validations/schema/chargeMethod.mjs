// CHARGE SCHEMA VALIDATION
import joi from "joi";

const chargeSchemaValidation = joi.object(
  {
    currency: joi.string().required().default("NGN"),
    amount: joi.number().required().min(0),
    fullname: joi.string().required().min(5),
    phone_number: joi
      .number()
      .regex(/^0[0-9]{10}$/)
      .required(),
    email: joi.string().email().required(),
    tx_ref: joi.string().required(),
    redirect_url: joi.string().required(),
  },
  { stripUnknown: true }
);

export default chargeSchemaValidation;
