import { PansaTopbarComponent } from '../lib/topbar/topbar.component';

export default {
  title: 'pansa-ui/TopBar',
  component: PansaTopbarComponent
};

const Template = (args: any) => {
  return {
    component: PansaTopbarComponent,
    props: args,
  };
};

export const BasicTopbar = Template.bind({});
