interface Task {
  title: string;
  createdAt: string;
  done: boolean;
}

interface Note {
  id: number;
  title: string;
  tasks?: Array<Task>;
  createdAt: string;
}
