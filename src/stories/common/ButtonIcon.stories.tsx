import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '../../components/common/ButtonIcon';
import { Icon } from '../../types';

const meta = {
  title: 'common/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        Icon.Active,
        Icon.Add,
        Icon.Delete,
        Icon.Edit,
        Icon.Idea,
        Icon.Open,
        Icon.Task,
        Icon.Thought,
        Icon.Zip,
      ],
    },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeleteButtonIcon: Story = {
  args: {
    icon: Icon.Delete,
  },
  render: (args) => {
    return (
      <div className="text-teal-700">
        <ButtonIcon {...args} />
      </div>
    );
  },
};
