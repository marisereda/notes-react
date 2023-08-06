import { ModalTitle } from './ModalTitle';

import { archiveHeaderButtons, archiveListButtons } from '../constants';
import { NotesTable } from './NotesTable';
import { Button } from './Button';

interface ArchiveModalProps {}

export function ArchiveModal({}: ArchiveModalProps) {
  return (
    <div id="arch-modal" className="fixed inset-0 pt-10 bg-black bg-opacity-30">
      <div className="max-w-[1054px] mx-auto pb-8 bg-slate-100 rounded overflow-hidden shadow-md">
        <ModalTitle>Archive</ModalTitle>
        <div id="arch-table" className="px-4 mb-6">
          <NotesTable
            headerButtons={archiveHeaderButtons}
            listButtons={archiveListButtons}
          />
        </div>
        <div className="flex justify-center ">
          <Button variant="light" type="button">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
