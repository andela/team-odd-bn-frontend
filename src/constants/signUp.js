export const signupInputs = [
  {
    input: 'Email Address', className: 'email', type: 'email',
  },
  {
    input: 'Password',
    className: 'password',
    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}',
    type: 'password',
    title: 'A valid password should have a character, number, UPPER CASE letter and a lower case letter and should be longer than 8',
  },
  {
    input: 'Confirm Password',
    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}',
    className: 'confirmPassword',
    type: 'password',
    title: 'A valid password should have a character, number, UPPER CASE letter and a lower case letter and should be longer than 8',
  },
];
export const signupFirstNameLastNameInputs = [
  { input: 'First Name', className: 'firstName', type: 'text' },
  { input: 'Last Name', className: 'lastName', type: 'text' },
];
export const extraInfoData = {
  link1: '/signin',
  link2: '/forgot-password',
  displayText1: 'Already have an account?',
  displayText2: 'signin here',
  displayText3: 'Forgot password?',
};
export const socialData = {
  displayGoogleText: 'Signup with google',
  displayFacebookText: 'Signup with facebook',
};
