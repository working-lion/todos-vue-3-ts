import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';

import { saveToStorage } from '@/localStorage/localStorage';

export const useNotesStore = defineStore('notes', () => {
  const count = ref(0);
  const notes: Array<Note> = reactive([]);

  watch(notes, () => {
    saveToStorage(notes);
  });

  const getNewNoteId = () => {
    count.value += 1;

    return count.value;
  };

  const add = (note: Note) => {
    // TODO: проставление id было бы правильнее делать тут
    if (note.id && note.title) {
      notes.push(note);
    }
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
    getNewNoteId,
    add,
    remove,
    edit,
  };
});
