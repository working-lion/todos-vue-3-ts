import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

import { saveToStorage, getFromStorage } from '@/localStorage/localStorage';

export const useNotesStore = defineStore('notes', () => {
  const notesFromStorage = getFromStorage();

  const count = ref(0);
  const notes: Array<Note> = reactive(notesFromStorage);

  const getNewNoteId = () => {
    count.value += 1;

    return count.value;
  };

  const add = (note: Note) => {
    // TODO: проставление id было бы правильнее делать тут
    if (note.id && note.title) {
      notes.push(note);

      saveToStorage(notes);
    }
  };

  const remove = (noteId: number) => {
    const noteIndex = notes.findIndex((note) => note.id === noteId);

    notes.splice(noteIndex, 1);

    saveToStorage(notes);
  };

  const edit = (note: Note) => {
    const noteIndex = notes.findIndex((n) => n.id === note.id);

    // TODO: тесты
    notes[noteIndex] = note;

    saveToStorage(notes);
  };

  return {
    notes,
    getNewNoteId,
    add,
    remove,
    edit,
  };
});
