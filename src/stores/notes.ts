import { defineStore } from 'pinia';

interface NotesState {
  count: number;
  notes: Array<Note>;
}

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      count: 0,
      notes: [],
    };
  },

  getters: {
    notes(state: NotesState) {
      return state.notes;
    },
  },

  actions: {
    getCount() {
      this.count++;

      return this.count;
    },

    add(note: Note) {
      this.notes.push(note);
    },

    remove(noteId: number) {
      this.notes.filter((note) => note.id !== noteId);
    },
  },
});

/*
*
* const notes: Array<Note> = ref([])

  function add(note: Note) {
    notes.value.push(note)
  }

  return {
    notes,
    add,
  }
*
* */
