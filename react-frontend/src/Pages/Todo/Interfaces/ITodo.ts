export interface ITodo {
  todoId: number;
  title: string;
  description: string;
  userId: string;
  dateDeadline: Date | null;
  dateCompleted: Date | null;
  dateCreated: Date;
}

export interface ITodoFromServer {
  todoId: number;
  title: string;
  description: string;
  userId: string;
  dateDeadline: string | null;
  dateCompleted: string | null;
  dateCreated: string;
}

export interface IPostTodoData {
  title: string;
  description: string;
  dateDeadline?: Date;
}

export interface IPutTodoData {
  todoId: number;
  dateCompleted: Date;
}
