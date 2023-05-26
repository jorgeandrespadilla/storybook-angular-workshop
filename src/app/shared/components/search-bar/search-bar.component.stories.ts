import { Meta, StoryObj } from "@storybook/angular";
import { SearchBarComponent } from "./search-bar.component";

const meta: Meta<SearchBarComponent> = {
  title: 'Shared/Search bar',
  component: SearchBarComponent,
  tags: ['shared', 'search', 'bar', 'autodocs'],
  args: {
    placeholder: 'Search',
  }
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {};
