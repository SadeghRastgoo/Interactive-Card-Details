import * as yup from "yup";

export const userSchema = yup.object().shape({
  cardHolder: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/i, "Must be only alphabetic characters")
    .required(),
  cardNumber: yup
    .string()
    .matches(/^[0-9_ ]+$/, "Must be only digits")
    .length(19)
    .required(),
  expireMonth: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[0-9]+$/, "Must be only digits")
    .required(),
  expireYear: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[0-9]+$/, "Must be only digits")
    .required(),
  cvc: yup
    .string()
    .min(3)
    .max(3)
    .matches(/^[0-9]+$/, "Must be only digits")
    .required(),
});
