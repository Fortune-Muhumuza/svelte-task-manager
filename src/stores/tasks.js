import { writable } from 'svelte/store';

export const tasks = writable([
  { id: 1, title: 'Learn Svelte', completed: false },
  { id: 2, title: 'Build a Task Manager', completed: false },
]);
