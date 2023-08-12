import { moduleMetadata } from "@storybook/angular";
import type { Meta, StoryObj } from "@storybook/angular";
// import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from "@angular/material/toolbar";

const meta: Meta<HeaderComponent> = {
  title: 'UI/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
  parameters: {
    // layout: 'fullscreen',
  },
  argTypes: {
    // color: {
    //   options: ['primary', 'accent', 'warn'],
    //   control: { type: 'radio' },
    // },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
  },
};
