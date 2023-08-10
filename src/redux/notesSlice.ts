import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialNotes } from '../constants';
import { Category, CreateNote, Note, UpdateNote } from '../types';
import { generateId } from '../utils/helpers';

export interface NotesState {
  notes: Note[];
  isNoteModalOpened: boolean;
  isArchiveModalOpened: boolean;
  currentNoteId?: Note['id'];
  currentCategoryName?: Category['name'];
}

const initialState: NotesState = {
  notes: initialNotes,
  isNoteModalOpened: false,
  isArchiveModalOpened: false,
  currentNoteId: undefined,
  currentCategoryName: undefined,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    openNoteModal: (state, action: PayloadAction<Note['id'] | undefined>) => {
      state.currentNoteId = action.payload;
      state.isNoteModalOpened = true;
    },

    closeNoteModal: (state) => {
      state.isNoteModalOpened = false;
    },

    addNote: (state, action: PayloadAction<CreateNote>) => {
      state.notes.push({
        id: generateId(),
        created: Date.now(),
        archived: false,
        ...action.payload,
      });
      state.isNoteModalOpened = false;
    },

    updateNote: (state, action: PayloadAction<UpdateNote>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[index] = { ...state.notes[index], ...action.payload };
      state.isNoteModalOpened = false;
    },

    zipAllNotes: (state) => {
      state.notes.forEach((note) => (note.archived = true));
    },

    deleteActiveNotes: (state) => {
      state.notes = state.notes.filter((note) => note.archived === true);
    },

    zipNote: (state, action: PayloadAction<Note['id']>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.archived = true;
      }
    },

    deleteNote: (state, action: PayloadAction<Note['id']>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    openArchiveModal: (state, action: PayloadAction<Category['name']>) => {
      state.currentCategoryName = action.payload;
      state.isArchiveModalOpened = true;
    },

    closeArchiveModal: (state) => {
      state.isArchiveModalOpened = false;
    },

    activateAllNotesFromCategory: (
      state,
      action: PayloadAction<Category['name']>
    ) => {
      state.notes.forEach((note) => {
        if (note.category === action.payload) {
          note.archived = false;
        }
      });
      state.isArchiveModalOpened = false;
    },

    deleteZipNotesFromCategory: (
      state,
      action: PayloadAction<Category['name']>
    ) => {
      state.notes = state.notes.filter(
        (note) =>
          note.category !== action.payload ||
          (note.category === action.payload && note.archived === false)
      );
      state.isArchiveModalOpened = false;
    },

    activateNote: (state, action: PayloadAction<Note['id']>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.archived = false;
      }
    },
  },
});

// ----------------------------------------------------------------
export const {
  openNoteModal,
  closeNoteModal,
  addNote,
  updateNote,
  zipAllNotes,
  deleteActiveNotes,
  zipNote,
  deleteNote,
  openArchiveModal,
  closeArchiveModal,
  activateAllNotesFromCategory,
  deleteZipNotesFromCategory,
  activateNote,
} = notesSlice.actions;

export default notesSlice.reducer;
