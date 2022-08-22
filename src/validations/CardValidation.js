import * as yup from "yup";

export const userSchema = yup.object().shape({
  cardHolder: yup.string().required(),
  cardNumber: yup.string().required().min(20).max(20),
  expireMonth: yup.string().min(2).max(2).required(),
  expireYear: yup.string().min(2).max(2).required(),
  cvc: yup.string().min(3).max(3).required(),
});
