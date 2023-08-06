import { ArchiveModal } from './components/ArchiveModal';
import { CategoriesTable } from './components/CategoriesTable';
import { NoteModal } from './components/NoteModal';
import { NotesTable } from './components/NotesTable';
import { Title } from './components/Title';
import { notesHeaderButtons, notesListButtons } from './constants';

function App() {
  return (
    <main className="max-w-[1054px] m-auto px-4 py-8">
      <h1 className="hidden">Notes application</h1>
      <section id="notes" className="py-5">
        <Title>Notes</Title>
        <NotesTable
          headerButtons={notesHeaderButtons}
          listButtons={notesListButtons}
        />
      </section>
      <section id="notes" className="py-5">
        <Title>Categories</Title>
        <CategoriesTable />
      </section>
      {false && <NoteModal />}
      {true && <ArchiveModal />}
    </main>
  );
}

export default App;
