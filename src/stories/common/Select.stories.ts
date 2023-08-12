import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/common/Select';
import { initialCategories } from '../../constants';

const meta = {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    defaultValue: initialCategories[0].name,
    options: initialCategories.map((category) => category.name),
  },
};
