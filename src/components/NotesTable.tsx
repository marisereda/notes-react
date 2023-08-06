import { NotesHeader, NotesHeaderProps } from './NotesHeader';
import { NotesItem, NotesItemProps } from './NotesItem';
import { Note } from '../types';

interface NotesTableProps {
  showHeaderButtons: NotesHeaderProps['showButtons'];
  showListButtons: NotesItemProps['showButtons'];
  notes: Note[];
}

export function NotesTable({
  showHeaderButtons,
  showListButtons,
  notes,
}: NotesTableProps) {
  return (
    <>
      <NotesHeader showButtons={showHeaderButtons} />
      <ul className="flex flex-col gap-2 text-slate-700">
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} showButtons={showListButtons} />
        ))}
      </ul>
    </>
  );
}
