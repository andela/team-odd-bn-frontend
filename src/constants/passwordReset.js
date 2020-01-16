import verifyToken from '../helpers/verifyToken';

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
export const menu = [
  {
    page: '/signup', link: true, className: 'btn-small', text: 'signup',
  },
  {
    page: '/signin', link: true, className: 'btn-small', text: 'signin',
  },
  {
    page: '/', link: true, className: 'btn-transparent', text: 'Home',
  },
];
export const unverifiedUserMenu = [
  {
    link: false, className: 'profile-img', alt: 'profile', text: `${verifyToken(localStorage.getItem('token')).firstName} ${verifyToken(localStorage.getItem('token')).lastName}`,
  },

];
