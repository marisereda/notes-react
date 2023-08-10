import { ModalTitle } from '../common/ModalTitle';
import { NoteForm } from './NoteForm';

export function NoteModal() {
  return (
    <div className="fixed inset-0 pt-10 bg-black bg-opacity-30">
      <div className="mx-auto max-w-[500px] pb-8 bg-slate-100 rounded overflow-hidden shadow-md">
        <ModalTitle>Note</ModalTitle>
        <NoteForm />
      </div>
    </div>
  );
}
