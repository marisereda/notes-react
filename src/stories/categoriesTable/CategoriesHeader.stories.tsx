import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesHeader } from '../../components/categoriesTable/CategoriesHeader';

const meta = {
  title: 'categories Table/Categories header',
  component: CategoriesHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoriesHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCategoriesHeader: Story = {
  render: (args) => (
    <div className="min-w-[950px]">
      <CategoriesHeader {...args} />
    </div>
  ),
};
