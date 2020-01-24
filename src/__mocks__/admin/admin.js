
import {
  ASSIGN_ROLE_SUCCESS,
  GET_ALL_ROLES,
  ADMIN_ERROR,
  NEW_ROLE_INPUT,
} from '../../redux/actionTypes/adminActionTypes';

export const retrievedRolesApi = {
  status: 200,
  response: {
    message: 'All roles retrieved successfully',
    data: [
      {
        id: 1,
        type: 'super admin',
      },
    ],
  },
};

export const retrievedRolesAction = [
  {
    type: GET_ALL_ROLES,
    allRoles: {
      message: 'All roles retrieved successfully',
      data: [
        {
          id: 1,
          type: 'super admin',
        },
      ],
    },
  },
  {
    type: ADMIN_ERROR,
    status: 'success',
    error: {},
  },
];

export const assignRolesApi = {
  status: 201,
  response: {
    message: 'Role assigned successfully',
    data: {
      role: 'super admin',
    },
  },
};

export const assignRolesAction = [
  {
    type: ASSIGN_ROLE_SUCCESS,
    payload: {
      message: 'Role assigned successfully',
      data: {
        role: 'super admin',
      },
    },
  },
  {
    type: ADMIN_ERROR,
    status: 'success',
    error: {},
  },
];

export const assignRolesError = {
  status: 404,
  response: {
    data: {
      message: 'Email does not exist',
    },
  },
};

export const assignRolesErrorAction = [
  {
    type: ADMIN_ERROR,
    status: 'error',
    error: {
      message: 'Email does not exist',
    },
  },
];

export const rolenInputAction = {
  type: NEW_ROLE_INPUT,
  newRoleId: 5,
};

export const adminError = {
  type: ADMIN_ERROR,
  error: 'Role is already assigned',
};
export const getAllRoles = {
  type: GET_ALL_ROLES,
  allRoles: [{
    id: 1,
    type: 'super admin',
  }],
};
export const assignRole = {
  type: ASSIGN_ROLE_SUCCESS,
  payload: {
    data: {
      message: 'Role assigned successfully',
      data:
        {
          role: 'super admin',
        },
    },
  },
};

export const defaultProps = {
  adminState: {
    admin: {
    },
    allUsers: {
      users: {
        message: '',
        data: [{
          id: 1,
          email: 'me@you.com',
          firstName: 'me',
          lastName: 'you',
          roleId: 3,
          role: {
            type: 'user',
          },

        }],
      },
    },
  },
  getAllUsers: jest.fn(),
  getRolesAction: jest.fn(),
  assignRole: jest.fn(),
};

export const updateDefaultProps = {
  adminState: {
    admin: {
      payload: {
        message: 'All roles retrieved successfully',
      },
      allRoles: {
        data: [
          {
            id: 3,
            type: 'user',
          },
        ],
      },
    },
    allUsers: {
      users: {
        message: '',
        data: [
          {
            id: 1,
            email: 'me@you.com',
            firstName: 'me',
            lastName: 'you',
            roleId: 3,
            role: {
              type: 'user',
            },
          },
        ],
      },
    },
  },
  getAllUsers: jest.fn(),
  getRolesAction: jest.fn(),
  assignRole: jest.fn(),
};

export const emptyDataComponent = {
  adminState: {
    admin: {},
    allUsers: {
      users: {
        message: '',
        data: '',
      },
    },
  },
  getAllUsers: jest.fn(),
  getRolesAction: jest.fn(),
  assignRole: jest.fn(),
};


export const options = [
  { id: 6, type: 'manager' },
  { id: 3, type: 'user' },
];
