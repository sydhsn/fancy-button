import React from 'react';

import { Button } from './button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Fancy-Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  buttonClass: "default",
  size: 'small'
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  buttonClass: "primary",
  size: 'small'
};

export const Secondry = Template.bind({});
Secondry.args = {
  label: "Secondry Button",
  buttonClass: "secondry",
  size: 'small'
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  label: "Button Large",
  buttonClass: "primary",
  size: 'large'
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  label: "Button Small",
  buttonClass: "default",
  size: 'small'
};