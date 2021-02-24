import TodoListStore from './TodoListStore/TodoListStore';

export interface RootStore {
  todoListStore: TodoListStore;
}

export class RootStore {
  constructor() {
    this.todoListStore = new TodoListStore(this);
  }
}

const store = new RootStore();

export default store;
