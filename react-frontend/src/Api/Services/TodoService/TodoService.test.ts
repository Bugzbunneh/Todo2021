import { ITodoFromServer } from 'Pages/Todo/Interfaces/ITodo';
import TodoService from './TodoService';

describe('TodoService', () => {
  it('When mapTodoFromServer is called, dates should be converted to Date objects', () => {
    const todoFromServer: ITodoFromServer = {
      todoId: 1,
      title: 'test',
      description: 'test',
      userId: 'user',
      dateDeadline: '2021-01-01T00:00:00.000Z',
      dateCompleted: '2021-01-01T00:00:00.000Z',
      dateCreated: '2021-01-01T00:00:00.000Z',
    };

    const mappedTodo = TodoService.mapTodoFromServer(todoFromServer);
    expect(mappedTodo).toEqual({
      todoId: 1,
      title: 'test',
      description: 'test',
      userId: 'user',
      dateDeadline: new Date(2021, 0, 1, 0, 0, 0, 0),
      dateCompleted: new Date(2021, 0, 1, 0, 0, 0, 0),
      dateCreated: new Date(2021, 0, 1, 0, 0, 0, 0),
    });
  });
});
