import {action} from '@storybook/addon-actions';
import {PansaButtonComponent} from '../lib/button/button.component';
import {moduleMetadata} from "@storybook/angular";

export default {
  title: 'Pansa-UI/Button',
  component: PansaButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [PansaButtonComponent],
      // Możesz również zaimportować moduły, które są wymagane przez twój komponent
    }),
  ],
};

export const Primary = () => ({
  component: PansaButtonComponent,
  props: {
    level: 'primary',
    size: 'medium',
    theme: 'dark',
    noText: false,
  },
  template: `
    <pansa-button [level]="level" [size]="size" [theme]="theme">
      Text
    </pansa-button>
  `
});

export const Secondary = () => ({
  component: PansaButtonComponent,
  props: {
    level: 'secondary',
    size: 'medium',
    theme: 'light',
    noText: false,
  },
  template: `
    <pansa-button [level]="level" [size]="size" [theme]="theme">
      Text
    </pansa-button>
  `
});

