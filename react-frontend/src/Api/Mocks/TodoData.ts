import { ITodo } from 'Pages/Todo/Interfaces/ITodo';

export const MockTodoList: ITodo[] = [
  {
    todoId: 1,
    title: 'Take the dog for a walk.',
    description: 'Go to Astley park with the dog.',
    userId: 'Fake User 1',
    dateCreated: new Date(),
    dateCompleted: null,
    dateDeadline: new Date(),
  },
  {
    todoId: 2,
    title: 'Go to the shop.',
    description: 'Need some milk and eggs.',
    userId: 'Fake User 1',
    dateCreated: new Date(),
    dateCompleted: null,
    dateDeadline: new Date(),
  },
  {
    todoId: 3,
    title: 'Read a book.',
    description: 'Need to find out how Harry Potter ends.',
    userId: 'Fake User 1',
    dateCreated: new Date(),
    dateCompleted: null,
    dateDeadline: new Date(),
  },
];
