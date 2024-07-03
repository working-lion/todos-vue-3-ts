const NAME = 'notes';

export function saveToStorage(notes: Array<Note>) {
  localStorage.setItem(NAME, JSON.stringify(notes));
}

export function getFromStorage() {
  const notesRaw = localStorage.getItem(NAME) || '';

  try {
    const notes: Array<Note> = JSON.parse(notesRaw);

    return notes;
  } catch (e) {
    return [];
  }
}
