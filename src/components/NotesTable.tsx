import { NotesHeader } from './NotesHeader';
import { initialNotes } from '../constants';
import { NotesItem } from './NotesItem';

interface NotesTableProps {
  headerButtons: Record<string, string>[];
  listButtons: Record<string, string>[];
}

// { key: string; value: string }
export function NotesTable({ headerButtons, listButtons }: NotesTableProps) {
  return (
    <div id="notes-table">
      <NotesHeader headerButtons={headerButtons} />
      <ul id="notes-list" className="flex flex-col gap-2 text-slate-700">
        {initialNotes.map((note) => (
          <NotesItem note={note} listButtons={listButtons} />
        ))}
      </ul>
    </div>
  );
}
