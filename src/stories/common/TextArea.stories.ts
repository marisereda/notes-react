import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../../components/common/TextArea';

const meta = {
  title: 'common/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextArea: Story = {
  args: {
    defaultValue: '',
  },
};
