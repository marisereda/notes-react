import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/common/Input';

const meta = {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    defaultValue: '',
  },
};
