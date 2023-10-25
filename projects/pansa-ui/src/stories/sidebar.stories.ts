import { PansaSidebarComponent } from '../lib/sidebar/sidebar.component';

export default {
  title: 'pansa-ui/Sidebar',
  component: PansaSidebarComponent
};

const Template = (args: any) => {
  return {
    component: PansaSidebarComponent,
    props: args,
  };
};

export const BasicSidebar = Template.bind({});
