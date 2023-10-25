import { PansaMenuComponent } from '../lib/menu/menu.component';

export default {
  title: 'pansa-ui/Menu',
  component: PansaMenuComponent
};

const Template = (args: any) => {
  return {
    component: PansaMenuComponent,
    props: args,
  };
};

export const BasicMenu = Template.bind({});
