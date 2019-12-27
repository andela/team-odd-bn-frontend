import initStoryshots, { renderWithOptions } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';

initStoryshots({
  test: renderWithOptions({
    renderer: mount,
  }),
});
