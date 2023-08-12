import type { Meta, StoryObj } from '@storybook/react';
import { NoteForm } from '../../components/Note/NoteForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/notesStore';

const meta = {
  title: 'note Form/NoteForm',
  component: NoteForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoteForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNoteForm: Story = {
  render: () => (
    <Provider store={store}>
      <NoteForm />
    </Provider>
  ),
};
