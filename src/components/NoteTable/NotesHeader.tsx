import { useDispatch, useSelector } from 'react-redux';
import { ButtonIcon } from '../common/ButtonIcon';
import icons from '../../assets/icons.svg';
import {
  activateAllNotesFromCategory,
  deleteActiveNotes,
  deleteZipNotesFromCategory,
  openNoteModal,
  zipAllNotes,
} from '../../redux/notesSlice';
import { selectCurrentCategoryName } from '../../redux/notesSelectors';

export interface NotesHeaderProps {
  showButtons: {
    addNote?: boolean;
    activateNotes?: boolean;
    zipNotes?: boolean;
    deleteActiveNotes?: boolean;
    deleteZipNotes?: boolean;
  };
}

export function NotesHeader({ showButtons }: NotesHeaderProps) {
  const dispatch = useDispatch();
  const currentCategoryName = useSelector(selectCurrentCategoryName);

  return (
    <div className="flex items-center justify-center gap-2 p-3 mb-3 text-white bg-teal-700 rounded">
      <div className="w-1/12"></div>
      <p className="w-2/12">Name</p>
      <p className="w-2/12">Created</p>
      <p className="w-2/12">Category</p>
      <p className="w-2/12">Content</p>
      <p className="w-2/12">Dates</p>
      <div className="flex w-1/12 gap-3">
        {showButtons.addNote && (
          <ButtonIcon
            icon={`${icons}#icon-add`}
            onClick={() => dispatch(openNoteModal())}
          />
        )}
        {showButtons.activateNotes && currentCategoryName && (
          <ButtonIcon
            icon={`${icons}#icon-active`}
            onClick={() =>
              dispatch(activateAllNotesFromCategory(currentCategoryName))
            }
          />
        )}
        {showButtons.zipNotes && (
          <ButtonIcon
            icon={`${icons}#icon-zip`}
            onClick={() => dispatch(zipAllNotes())}
          />
        )}
        {showButtons.deleteActiveNotes && (
          <ButtonIcon
            icon={`${icons}#icon-delete`}
            onClick={() => dispatch(deleteActiveNotes())}
          />
        )}
        {showButtons.deleteZipNotes && currentCategoryName && (
          <ButtonIcon
            icon={`${icons}#icon-delete`}
            onClick={() =>
              dispatch(deleteZipNotesFromCategory(currentCategoryName))
            }
          />
        )}
      </div>
    </div>
  );
}
