export const emailBox = [
  {
    input: 'Email address', className: 'email', type: 'email', title: 'email should be valid',
  },
];
export const passwordBox = [
  {
    input: 'New password',
    className: 'password',
    type: 'password',
    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}',
    title:
             'A valid password should have a character, number, UPPER CASE letter and a lower case letter and should be longer than 8',
  },
  {
    input: 'Confirm password',
    className: 'confirmPassword',
    type: 'password',
    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}',
    title:
             'A valid password should have a character, number, UPPER CASE letter and a lower case letter and should be longer than 8',
  },
];
