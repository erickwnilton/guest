import * as yup from "yup";

export const schemaForRegisterUser = yup.object({
  name: yup.string().required(),
  mail: yup.string().email().required(),
  document: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")]),
});
