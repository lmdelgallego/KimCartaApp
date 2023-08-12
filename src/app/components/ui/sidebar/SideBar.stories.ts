import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

const meta: Meta<SidebarComponent> = {
  title: 'UI/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [MatSidenavModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {},
};
