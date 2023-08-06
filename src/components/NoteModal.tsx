import { ModalTitle } from './ModalTitle';
import { NoteForm } from './NoteForm';

interface NoteModalProps {}

export function NoteModal({}: NoteModalProps) {
  return (
    <div
      id="note-modal"
      className="fixed inset-0  pt-10 bg-black bg-opacity-30"
    >
      <div className="mx-auto max-w-[500px] pb-8 bg-slate-100 rounded overflow-hidden shadow-md">
        <ModalTitle>Note</ModalTitle>
        <NoteForm />
      </div>
    </div>
  );
}
