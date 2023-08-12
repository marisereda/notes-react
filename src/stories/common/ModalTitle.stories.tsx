import type { Meta, StoryObj } from '@storybook/react';
import { ModalTitle } from '../../components/common/ModalTitle';

const meta = {
  title: 'common/ModalTitle',
  component: ModalTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModalTitle: Story = {
  args: {
    children: 'Modal title',
  },
  render: (args) => {
    return (
      <div className="w-[500px]">
        <ModalTitle {...args} />
      </div>
    );
  },
};
