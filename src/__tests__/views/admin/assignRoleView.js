import React from 'react';
import { shallow } from 'enzyme';
import UserRolesView from '../../../views/admin/UserRolesView';


describe('Rendering assign roles views', () => {
  test('should render AssignROlesView without crash', () => {
    const wrapper = shallow(<UserRolesView />);
    expect(
      wrapper.find('[data-testid="userRoles-View"]'),
    ).toHaveLength(1);
  });
});
