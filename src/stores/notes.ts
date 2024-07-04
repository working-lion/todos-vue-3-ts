import { defineStore } from 'pinia';
import { reactive, watch } from 'vue';

import { saveToStorage } from '@/localStorage/localStorage';

export const useNotesStore = defineStore('notes', () => {
  const notes: Array<Note> = reactive([]);

  watch(notes, () => {
    saveToStorage(notes);
  });

  const getNewNoteId = () => {
    if (notes.length === 0) {
      return 1;
    }

    const ids = notes.map((n) => n.id);

    return Math.max(...ids) + 1;
  };

  const add = (note: NoteNew) => {
    notes.push({
      ...note,
      id: getNewNoteId(),
    });
  };

  const remove = (noteId: number) => {
    const noteIndex = notes.findIndex((note) => note.id === noteId);

    notes.splice(noteIndex, 1);
  };

  const edit = (note: Note) => {
    const noteIndex = notes.findIndex((n) => n.id === note.id);

    notes[noteIndex] = note;
  };

  const init = (initialNotes: Array<Note>) => {
    initialNotes.forEach((n) => {
      notes.push(n);
    });
  };

  return {
    notes,
    init,
    add,
    remove,
    edit,
  };
});
