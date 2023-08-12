import type { Meta, StoryObj } from '@storybook/react';
import { NotesHeader } from '../../components/NoteTable/NotesHeader';
import { Provider } from 'react-redux';
import { store } from '../../redux/notesStore';

const meta = {
  title: 'note Table/Notes header',
  component: NotesHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotesHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNotesHeader: Story = {
  args: {
    showButtons: {
      addNote: true,
      activateNotes: false,
      zipNotes: true,
      deleteActiveNotes: true,
      deleteZipNotes: false,
    },
  },
  render: (args) => (
    <div className="min-w-[950px]">
      <Provider store={store}>
        <NotesHeader {...args} />
      </Provider>
    </div>
  ),
};
