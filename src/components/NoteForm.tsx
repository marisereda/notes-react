import { Button } from './Button';
import { initialCategories } from '../constants';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Select } from './Select';

interface NoteFormProps {}

export function NoteForm({}: NoteFormProps) {
  const options = initialCategories.map((category) => category.name);
  return (
    <form id="form" className="px-4">
      <div className="flex gap-2 mb-6">
        <Select options={options} />
        <Input content="" />
      </div>
      <TextArea content="" />
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
