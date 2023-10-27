import { Story, Meta } from '@storybook/angular';
import { PansaMenuComponent } from '../lib/menu/menu.component';

export default {
  title: 'Pansa-UI/Menu',
  component: PansaMenuComponent,
  argTypes: {
    items: {
      control: {
        type: 'object'
      },
      defaultValue: [
        { label: 'Item 1', icon: 'home', badge: 'NEW' },
        { label: 'Item 2', icon: 'settings', badge: 5 },
        { label: 'Item 3', icon: 'help' }
      ]
    }
  }
} as Meta;

const Template: Story<{ items: { label: string, icon?: string, badge?: string | number }[] }> = (args) => ({
  component: PansaMenuComponent,
  props: args
});

export const Default: Story<{ items: { label: string, icon?: string, badge?: string | number }[] }> = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', icon: 'home', badge: 'NEW' },
    { label: 'Item 2', icon: 'settings', badge: 5 },
    { label: 'Item 3', icon: 'help' }
  ]
};

export const WithoutIconsAndBadges: Story<{ items: { label: string, icon?: string, badge?: string | number }[] }> = Template.bind({});
WithoutIconsAndBadges.args = {
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
};
