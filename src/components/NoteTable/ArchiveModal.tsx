import { ModalTitle } from '../common/ModalTitle';
import { NotesTable } from './NotesTable';
import { Button } from '../common/Button';
import { closeArchiveModal } from '../../redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectZipNotes } from '../../redux/notesSelectors';

export function ArchiveModal() {
  const dispatch = useDispatch();
  const notes = useSelector(selectZipNotes);

  return (
    <div className="fixed inset-0 pt-10 bg-black bg-opacity-30">
      <div className="max-w-[1054px] mx-auto pb-8 bg-slate-100 rounded overflow-hidden shadow-md">
        <ModalTitle>Archive</ModalTitle>
        <div className="px-4 mb-6">
          <NotesTable
            notes={notes}
            showHeaderButtons={{
              activateNotes: true,
              deleteZipNotes: true,
            }}
            showListButtons={{
              activateNote: true,
              deleteNote: true,
            }}
          />
        </div>
        <div className="flex justify-center ">
          <Button
            variant="light"
            type="button"
            onClick={() => dispatch(closeArchiveModal())}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
