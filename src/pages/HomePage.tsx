import { useSelector } from 'react-redux';
import { NoteModal } from '../components/Note/NoteModal';
import { ArchiveModal } from '../components/NoteTable/ArchiveModal';
import { NotesTable } from '../components/NoteTable/NotesTable';
import { CategoriesTable } from '../components/categoriesTable/CategoriesTable';
import { Title } from '../components/common/Title';
import {
  selectIsNoteModalOpened,
  selectIsArchiveModalOpened,
  selectActiveNotes,
} from '../redux/notesSelectors';

export function HomePage() {
  const isNoteModalOpened = useSelector(selectIsNoteModalOpened);
  const isArchiveModalOpened = useSelector(selectIsArchiveModalOpened);
  const notes = useSelector(selectActiveNotes);
  return (
    <>
      <h1 className="hidden">Notes application</h1>
      <section className="py-5">
        <Title>Notes</Title>
        <NotesTable
          notes={notes}
          showHeaderButtons={{
            addNote: true,
            zipNotes: true,
            deleteActiveNotes: true,
          }}
          showListButtons={{
            editNote: true,
            zipNote: true,
            deleteNote: true,
          }}
        />
      </section>
      <section className="py-5">
        <Title>Categories</Title>
        <CategoriesTable />
      </section>
      {isNoteModalOpened && <NoteModal />}
      {isArchiveModalOpened && <ArchiveModal />}
    </>
  );
}
