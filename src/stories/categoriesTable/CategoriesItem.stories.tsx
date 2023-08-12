import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/notesStore';
import { CategoriesItem } from '../../components/categoriesTable/CategoriesItem';
import { initialCategories } from '../../constants';

const meta = {
  title: 'categories Table/CategoriesItem',
  component: CategoriesItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoriesItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCategoriesItem: Story = {
  args: {
    category: {
      icon: initialCategories[0].icon,
      name: initialCategories[0].name,
      activeNumber: 5,
      zipNumber: 7,
    },
  },
  render: (args) => (
    <div className="min-w-[950px]">
      <Provider store={store}>
        <CategoriesItem {...args} />
      </Provider>
    </div>
  ),
};
