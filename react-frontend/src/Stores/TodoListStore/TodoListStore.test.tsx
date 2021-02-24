import TodoListStore from './TodoListStore';
import RootStore from '../RootStore';
import { ITodo } from 'Pages/Todo/Interfaces/ITodo';

const mockTodoList: ITodo[] = [
  {
    todoId: 1,
    title: 'Title1 test',
    description: 'Description1 test',
    userId: 'User1',
    dateDeadline: new Date(2019, 0, 1),
    dateCreated: new Date(2019, 0, 1),
    dateCompleted: new Date(2019, 0, 1),
  },
  {
    todoId: 2,
    title: 'Title2 test',
    description: 'Description2 test',
    userId: 'User1',
    dateDeadline: new Date(2019, 0, 1),
    dateCreated: new Date(2019, 0, 1),
    dateCompleted: new Date(2019, 0, 1),
  },
  {
    todoId: 3,
    title: 'Title3 test',
    description: 'Description3 test',
    userId: 'User1',
    dateDeadline: new Date(2019, 0, 1),
    dateCreated: new Date(2019, 0, 1),
    dateCompleted: new Date(2019, 0, 1),
  },
];

describe('TodoListStore', () => {
  it('Should remove todo from list using ID', () => {
    const store = new TodoListStore(RootStore);
    store.todoList = mockTodoList;

    expect(store.todoList.length).toEqual(3);
    expect(store.todoList.find((todo) => todo.todoId === 2)).toBeTruthy();
    store.removeTodo(2);
    expect(store.todoList.find((todo) => todo.todoId === 2)).not.toBeTruthy();
    expect(store.todoList.length).toEqual(2);
  });

  it('Should add todo to the list', () => {
    const store = new TodoListStore(RootStore);
    store.todoList = mockTodoList;

    const mockTodo: ITodo = {
      todoId: 4,
      title: 'Title4 test',
      description: 'Description4 test',
      userId: 'User1',
      dateDeadline: new Date(2019, 0, 1),
      dateCreated: new Date(2019, 0, 1),
      dateCompleted: new Date(2019, 0, 1),
    };

    expect(store.todoList.length).toEqual(3);
    expect(store.todoList.find((todo) => todo.todoId === 4)).not.toBeTruthy();
    store.addTodo(mockTodo);
    expect(store.todoList.find((todo) => todo.todoId === 4)).toBeTruthy();
    expect(store.todoList.length).toEqual(4);
  });

  it('Should update existing todo in list', () => {
    const store = new TodoListStore(RootStore);
    store.todoList = mockTodoList;

    const updatedTodo3: ITodo = {
      todoId: 3,
      title: 'Updated Title3 test',
      description: 'Description3 test',
      userId: 'User1',
      dateDeadline: new Date(2019, 0, 1),
      dateCreated: new Date(2019, 0, 1),
      dateCompleted: new Date(2019, 0, 1),
    };

    expect(store.todoList.length).toEqual(3);
    expect(store.todoList.find((todo) => todo.todoId === 3)?.title).toEqual(
      'Title3 test',
    );
    store.updateTodo(updatedTodo3);
    expect(store.todoList.find((todo) => todo.todoId === 3)?.title).toEqual(
      'Updated Title3 test',
    );
    expect(store.todoList.length).toEqual(3);
  });
});
