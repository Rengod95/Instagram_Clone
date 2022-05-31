import React from 'react';
import { BottomNavBar } from './BottomNavBar';
import { withRouter } from '../../_utils/storybook';

export default {
  title: 'common/BottomNavBar',
  component: BottomNavBar,
};

const Template = (args) => <BottomNavBar {...args} />;

export const Default = Template.bind({});
Default.decorators = [withRouter];
Default.parameters = {
  initialEntries: ['/'],
};
