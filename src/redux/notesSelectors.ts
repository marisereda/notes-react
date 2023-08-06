import { RootState } from './notesStore';
import { initialCategories } from '../constants';
import { createSelector } from '@reduxjs/toolkit';

const selectAllNotes = (state: RootState) => {
  return state.notes;
};

export const selectCurrentCategoryName = (state: RootState) => {
  return state.currentCategoryName;
};

export const selectCurrentNote = (state: RootState) => {
  return state.notes.find((note) => note.id === state.currentNoteId);
};

export const selectCurrentNoteId = (state: RootState) => {
  return state.currentNoteId;
};

export const selectIsNoteModalOpened = (state: RootState) => {
  return state.isNoteModalOpened;
};

export const selectIsArchiveModalOpened = (state: RootState) =>
  state.isArchiveModalOpened;

// ----------------------------------------------------------------

export const selectActiveNotes = createSelector(selectAllNotes, (notes) => {
  return notes.filter((note) => note.archived === false);
});

export const selectZipNotes = createSelector(
  selectAllNotes,
  selectCurrentCategoryName,
  (notes, currentCategoryName) => {
    return notes.filter(
      (note) => note.category === currentCategoryName && note.archived
    );
  }
);

export const selectCategoriesTableData = createSelector(
  selectAllNotes,
  (notes) => {
    return initialCategories.map((category) => {
      let zipNumber = 0;
      let activeNumber = 0;
      notes.forEach((note) => {
        if (note.category === category.name && note.archived) {
          zipNumber += 1;
        }
        if (note.category === category.name && !note.archived) {
          activeNumber += 1;
        }
      });
      return { ...category, zipNumber, activeNumber };
    });
  }
);
