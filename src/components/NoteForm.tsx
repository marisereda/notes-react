import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import { initialCategories } from '../constants';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Select } from './Select';
import { selectCurrentNote } from '../redux/notesSelectors';
import { addNote, closeNoteModal, updateNote } from '../redux/notesSlice';
import { Category } from '../types';

export function NoteForm() {
  const options = initialCategories.map((category) => category.name);

  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const category = formData.get('category') as Category['name'];
    const content = formData.get('content') as string;
    if (currentNote) {
      dispatch(updateNote({ id: currentNote.id, name, category, content }));
    } else {
      dispatch(addNote({ name, category, content }));
    }
  };

  const handleReset = () => {
    dispatch(closeNoteModal());
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="px-4">
      <div className="flex gap-2 mb-6">
        <Select
          defaultValue={currentNote?.category ?? options[0]}
          options={options}
        />
        <Input defaultValue={currentNote?.name ?? ''} />
      </div>
      <TextArea defaultValue={currentNote?.content ?? ''} />
      <div className="flex justify-center gap-3">
        <Button type="submit" variant="dark">
          Save
        </Button>
        <Button type="reset" variant="light">
          Cancel
        </Button>
      </div>
    </form>
  );
}
