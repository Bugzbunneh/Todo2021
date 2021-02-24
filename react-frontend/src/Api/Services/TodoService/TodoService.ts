import { getAccessToken } from 'Api/Auth';
import { http } from 'Api/http';
import {
  IPostTodoData,
  IPutTodoData,
  ITodo,
  ITodoFromServer,
} from 'Pages/Todo/Interfaces/ITodo';

abstract class TodoService {
  public static async getTodos(): Promise<ITodo[]> {
    const accessToken = await getAccessToken();
    const result = await http<ITodoFromServer[]>({
      path: '/todo',
      accessToken: accessToken,
    });

    if (result.ok && result.body) {
      return result.body.map(this.mapTodoFromServer);
    } else {
      return [];
    }
  }

  public static async getTodo(todoId: string): Promise<ITodo | null> {
    const accessToken = await getAccessToken();
    const result = await http<ITodoFromServer>({
      path: '/todo/' + todoId,
      accessToken: accessToken,
    });

    if (result.ok && result.body) {
      return this.mapTodoFromServer(result.body);
    } else {
      return null;
    }
  }

  public static async postTodo(
    todo: IPostTodoData,
  ): Promise<ITodo | undefined> {
    const accessToken = await getAccessToken();
    const result = await http<ITodoFromServer, IPostTodoData>({
      path: '/todo',
      method: 'post',
      body: todo,
      accessToken: accessToken,
    });

    if (result.ok && result.body) {
      return this.mapTodoFromServer(result.body);
    } else {
      return undefined;
    }
  }

  public static async putTodo(todo: IPutTodoData): Promise<ITodo | undefined> {
    const accessToken = await getAccessToken();
    const result = await http<ITodoFromServer, IPutTodoData>({
      path: '/todo/' + todo.todoId,
      method: 'put',
      body: todo,
      accessToken: accessToken,
    });

    if (result.ok && result.body) {
      return this.mapTodoFromServer(result.body);
    } else {
      return undefined;
    }
  }

  public static async deleteTodo(todoId: number): Promise<boolean> {
    const accessToken = await getAccessToken();
    const result = await http<null>({
      path: '/todo/' + todoId,
      method: 'delete',
      accessToken: accessToken,
    });

    if (result.ok) {
      return true;
    }
    return false;
  }

  public static mapTodoFromServer = (todo: ITodoFromServer): ITodo => ({
    ...todo,
    dateCreated: new Date(todo.dateCreated),
    dateDeadline: todo.dateDeadline ? new Date(todo.dateDeadline) : null,
    dateCompleted: todo.dateCompleted ? new Date(todo.dateCompleted) : null,
  });
}

export default TodoService;
