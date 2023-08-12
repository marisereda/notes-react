import { useDispatch } from 'react-redux';
import { formatDate, findDates, getCategoryIcon } from '../../utils/helpers';
import { Icon, Note } from '../../types';
import { ButtonIcon } from '../common/ButtonIcon';

import {
  activateNote,
  deleteNote,
  openNoteModal,
  zipNote,
} from '../../redux/notesSlice';

export interface NotesItemProps {
  note: Note;
  showButtons: {
    editNote?: boolean;
    activateNote?: boolean;
    zipNote?: boolean;
    deleteNote?: boolean;
  };
}

export function NotesItem({ note, showButtons }: NotesItemProps) {
  const dispatch = useDispatch();

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
      <div className="flex w-1/12 gap-3 text-teal-700">
        {showButtons.editNote && (
          <ButtonIcon
            icon={Icon.Edit}
            onClick={() => dispatch(openNoteModal(note.id))}
          />
        )}
        {showButtons.activateNote && (
          <ButtonIcon
            icon={Icon.Active}
            onClick={() => dispatch(activateNote(note.id))}
          />
        )}
        {showButtons.zipNote && (
          <ButtonIcon
            icon={Icon.Zip}
            onClick={() => dispatch(zipNote(note.id))}
          />
        )}
        {showButtons.deleteNote && (
          <ButtonIcon
            icon={Icon.Delete}
            onClick={() => dispatch(deleteNote(note.id))}
          />
        )}
      </div>
    </li>
  );
}
