interface Task {
  title: string;
  createdAt: string;
  done: boolean;
}

interface NoteNew {
  title: string;
  tasks: Array<Task>;
  createdAt: string;
}

interface Note extends NoteNew {
  id: number;
  tasks?: Array<Task>;
}

declare enum ButtonColor {
  RED = 'red',
  GREEN = 'green',
  GRAY = 'gray',
  BEIGE = 'beige,',
}
