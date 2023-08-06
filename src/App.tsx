import { useSelector } from 'react-redux';
import { ArchiveModal } from './components/ArchiveModal';
import { CategoriesTable } from './components/CategoriesTable';
import { NoteModal } from './components/NoteModal';
import { NotesTable } from './components/NotesTable';
import { Title } from './components/Title';
import {
  selectActiveNotes,
  selectIsArchiveModalOpened,
  selectIsNoteModalOpened,
} from './redux/notesSelectors';

function App() {
  const isNoteModalOpened = useSelector(selectIsNoteModalOpened);
  const isArchiveModalOpened = useSelector(selectIsArchiveModalOpened);
  const notes = useSelector(selectActiveNotes);

  return (
    <main className="max-w-[1054px] m-auto px-4 py-8">
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
    </main>
  );
}

export default App;
