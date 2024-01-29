import * as yup from 'yup';
import { validationMessages } from './constants';

const {
  required: { confirmPassword, password, email,username },
  password: { comparePassword, minimumLength },
  validEmail,
} = validationMessages;

export const LoginSchema = yup.object().shape({
  username: yup.string().required(username),
  password: yup.string().required(password).min(6, minimumLength),
});
