declare type T = Note | Task;

export function isNoteCorrect(note: Note | undefined) {
  return Boolean(note?.title);
}

export function sortByDate(t1: T, t2: T) {
  const d1 = Number(new Date(t1.createdAt));
  const d2 = Number(new Date(t2.createdAt));

  return d1 - d2;
}

export function sortTasksByDone(t1: Task, t2: Task) {
  return Number(t1.done) - Number(t2.done);
}
