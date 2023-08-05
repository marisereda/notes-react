import { formatDate, findDates, getCategoryIcon } from '../helpers';
import { Note } from '../models';
import { ButtonIcon } from './ButtonIcon';

interface NotesItemProps {
  note: Note;
  listButtons: Record<string, string>[];
}

export function NotesItem({ note, listButtons }: NotesItemProps) {
  return (
    <li className="flex items-center justify-center gap-2 p-3 border rounded bg-slate-200 border-slate-400">
      <div className="w-1/12">
        <svg className="block p-2 mx-auto bg-teal-700 rounded-full fill-white w-9 h-9">
          <use href={getCategoryIcon(note.category)}></use>
        </svg>
      </div>
      <p className="w-2/12 line-clamp-1">{note.name}</p>
      <p className="w-2/12 line-clamp-1">{formatDate(note.created)}</p>
      <p className="w-2/12 line-clamp-1">{note.category}</p>
      <p className="w-2/12 line-clamp-1">{note.content}</p>
      <p className="w-2/12 line-clamp-1">{findDates(note.content)}</p>
      <div id="notes-item-buttons" className="flex w-1/12 gap-3 text-teal-700">
        {listButtons.map(({ operation, icon }) => (
          <ButtonIcon icon={icon} operation={operation} />
        ))}
      </div>
    </li>
  );
}
