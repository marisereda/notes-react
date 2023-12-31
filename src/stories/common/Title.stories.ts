import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../../components/common/Title';

const meta = {
  title: 'common/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTitle: Story = {
  args: {
    children: 'Title',
  },
};
