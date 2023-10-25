import { PansaMenuItemComponent } from '../lib/menuitem/menuitem.component';

export default {
  title: 'pansa-ui/MenuItem',
  component: PansaMenuItemComponent,
  argTypes: {
    itemText: { control: 'text' }
  }
};

const Template = (args: any) => {
  return {
    component: PansaMenuItemComponent,
    props: args,
  };
};

export const BasicMenuItem = Template.bind({});
