const TASKS_COUNT_DEFAULT = 3;

export function getEmptyTask(): Task {
  return {
    title: '',
    done: false,
    createdAt: '',
  };
}

export function getTasksDefault() {
  const tasksDefault = [];

  for (let i = 0; i < TASKS_COUNT_DEFAULT; i++) {
    tasksDefault.push(getEmptyTask());
  }

  return tasksDefault;
}

export function getEmptyNote(): Note {
  return {
    id: 0,
    title: '',
    tasks: getTasksDefault(),
    createdAt: '',
  };
}

export function getNotEmptyTasks(tasks: Array<Task>) {
  return tasks.filter((t) => Boolean(t.title));
}
