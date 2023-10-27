import {PansaButtonComponent} from '../lib/button/button.component';
import {Story} from "@storybook/angular";

type ButtonProps = {
  level: 'primary' | 'secondary' | 'action' | 'danger' | 'transparent';
  size: 'small' | 'large' | 'medium';
};

export default {
  title: 'Pansa-UI/Button',
  component: PansaButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'action', 'danger', 'transparent']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small']
      }
    },
  }
};


const Template: Story<ButtonProps & { label: string }> = ({label, ...args}) => ({
  component: PansaButtonComponent,
  props: args,
  template: `<pansa-button [level]="level" [size]="size">${label}</pansa-button>`
});

/**
 * Podstawowy przycisk.
 */
export const Primary: Story<ButtonProps & { label: string }> = Template.bind({});
Primary.args = {
  level: 'primary',
  size: 'medium',
  label: 'Primary'
};

export const Secondary: Story<ButtonProps & { label: string }> = Template.bind({});
Secondary.args = {
  level: 'secondary',
  size: 'medium',
  label: 'Secondary'
};

export const Action: Story<ButtonProps & { label: string }> = Template.bind({});
Action.args = {
  level: 'action',
  size: 'medium',
  label: 'Action'
};

export const Danger: Story<ButtonProps & { label: string }> = Template.bind({});
Danger.args = {
  level: 'danger',
  size: 'medium',
  label: 'Danger'
};

export const Transparent: Story<ButtonProps & { label: string }> = Template.bind({});
Transparent.args = {
  level: 'transparent',
  size: 'medium',
  label: 'Transparent'
};

export const SmallPrimary: Story<ButtonProps & { label: string }> = Template.bind({});
SmallPrimary.args = {
  level: 'primary',
  size: 'small',
  label: 'Small Primary'
};

export const LargePrimary: Story<ButtonProps & { label: string }> = Template.bind({});
LargePrimary.args = {
  level: 'primary',
  size: 'large',
  label: 'Large Primary'
};
