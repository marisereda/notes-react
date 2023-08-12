import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/common/Button';

const meta = {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkButton: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const LightButton: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};
