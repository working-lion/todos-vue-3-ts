const NAME = 'notes';

export function saveToStorage(notes: Array<Note>) {
  localStorage.setItem(NAME, JSON.stringify(notes));
}

export function getFromStorage() {
  const notesRaw = localStorage.getItem(NAME) || '';
  let notes: Array<Note> = [];

  try {
    notes = JSON.parse(notesRaw) || [];
  } catch (e) {
    console.error('Ошибка получения данных о заметках');
  }

  return notes;
}
