import adminReducer from '../../../redux/reducers/admin/adminReducer';
import {
  rolenInputAction,
  adminError,
  getAllRoles,
  assignRole,
} from '../../../__mocks__/admin/admin';

describe('Create accommodation reducer', () => {
  it('Should act on NEW_ROLE_INPUT', () => {
    const triggerState = adminReducer({}, rolenInputAction);
    expect(triggerState).toEqual({
      newRoleId: rolenInputAction.newRoleId,
    });
  });
  it('Should act on ADMIN_ERROR', () => {
    const triggerState = adminReducer({}, adminError);
    expect(triggerState).toEqual({
      error: adminError.error,
    });
  });
  it('Should act on GET_ALL_ROLES', () => {
    const triggerState = adminReducer({}, getAllRoles);
    expect(triggerState).toEqual({
      allRoles: getAllRoles.allRoles,
    });
  });
  it('Should act on ASSIGN_ROLE_SUCCESS', () => {
    const triggerState = adminReducer({}, assignRole);
    expect(triggerState).toEqual({
      payload: assignRole.payload,
    });
  });
});
