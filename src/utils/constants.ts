export const validationMessages = {
  required: {
    password: 'Please enter a password',
    confirmPassword: 'Please re-type your password',
    email: 'Please enter your email',
    username: 'Please enter your username',
  },
  password: {
    minimumLength: 'Password must have at least 8 characters',
    comparePassword: 'Passwords does not match',
    getCharacterValidationError(str: string) {
      return `Your password must have at least 1 ${str} character`;
    },
  },
  validEmail: 'Please enter valid email',
  invalidUrl(str: string) {
    return `Invalid url ${str}`;
  },
};


export const ROUTES = { HOME :"/home",LOGIN :"/"}