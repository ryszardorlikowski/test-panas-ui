import { PansaBreadcrumbComponent } from '../lib/breadcrumb/breadcrumb.component';

export default {
  title: 'pansa-ui/Breadcrumb',
  component: PansaBreadcrumbComponent,
  argTypes: {
    breadcrumbs: { control: 'object' }
  }
};

const Template = (args: any) => {
  return {
    component: PansaBreadcrumbComponent,
    props: args,
  };
};

export const BasicBreadcrumbs = Template.bind({});
