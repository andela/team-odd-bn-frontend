import verifyToken from './verifyToken';

// eslint-disable-next-line import/prefer-default-export
export const checkPrevilege = (roleId) => {
  const token = localStorage.getItem('token');
  const user = verifyToken(token);
  return user.roleId === roleId;
};
