import type { Meta, StoryObj } from '@storybook/react';
import { NotesItem } from '../../components/NoteTable/NotesItem';
import { Provider } from 'react-redux';
import { store } from '../../redux/notesStore';

const meta = {
  title: 'note Table/NotesItem',
  component: NotesItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotesItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNotesItem: Story = {
  args: {
    note: {
      id: '1',
      name: 'Buy groceries',
      category: 'Task',
      created: 1689195600000,
      content: 'Milk, eggs, bread, cheese, fruit, vegetables. 25/08/23',
      archived: false,
    },
    showButtons: {
      editNote: true,
      activateNote: false,
      zipNote: true,
      deleteNote: true,
    },
  },
  render: (args) => (
    <div className="min-w-[950px]">
      <Provider store={store}>
        <NotesItem {...args} />
      </Provider>
    </div>
  ),
};
