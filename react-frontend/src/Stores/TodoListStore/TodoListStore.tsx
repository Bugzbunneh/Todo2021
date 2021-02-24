import { RootStore } from '../RootStore';
import { action, makeAutoObservable } from 'mobx';
import {
  IPostTodoData,
  IPutTodoData,
  ITodo,
} from 'Pages/Todo/Interfaces/ITodo';
import TodoService from 'Api/Services/TodoService/TodoService';

interface TodoListStore {
  rootStore: RootStore;
}

class TodoListStore {
  private _todoList: ITodo[];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this._todoList = [];
  }

  public get todoList(): ITodo[] {
    return this._todoList;
  }

  @action
  public set todoList(todoList: ITodo[]) {
    this._todoList = todoList;
  }

  @action
  public async fetchTodos() {
    const todos = await TodoService.getTodos();
    this._todoList = todos;
  }

  @action
  public async deleteTodo(todoId: number): Promise<Boolean> {
    const successfullyDeleted = await TodoService.deleteTodo(todoId);
    if (successfullyDeleted) this.removeTodo(todoId);

    return successfullyDeleted;
  }

  @action
  public async postTodo(todo: IPostTodoData): Promise<ITodo | undefined> {
    const createdTodo = await TodoService.postTodo(todo);
    if (createdTodo) this.addTodo(createdTodo);

    return createdTodo;
  }

  @action
  public async putTodo(todo: IPutTodoData): Promise<ITodo | undefined> {
    const updatedTodo = await TodoService.putTodo(todo);
    if (updatedTodo) this.updateTodo(updatedTodo);

    return updatedTodo;
  }

  @action
  public removeTodo(todoId: number) {
    const index = this._todoList.findIndex((todo) => todo.todoId === todoId);
    if (index > -1) {
      this._todoList.splice(index, 1);
    }
  }

  @action
  public addTodo(todo: ITodo) {
    this._todoList.push(todo);
  }

  @action
  public updateTodo(todo: ITodo) {
    const index = this._todoList.findIndex((x) => x.todoId === todo.todoId);
    if (index > -1) {
      this._todoList.splice(index, 1, todo);
    }
  }
}

export default TodoListStore;
