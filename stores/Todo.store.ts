import { createContext } from "react";
import { action, makeAutoObservable } from "mobx";

import { ITodoGateway, TodoStorageGateway } from "../gateways/Todo.gateway";

export type Todo = {
  title: string;
  text: string;
  id: string;
};

export class TodoStore {
  private _todos: Todo[] = [];
  private _isLoaded: boolean = false;

  constructor(private gateway: ITodoGateway) {
    this.initialiseTodos();
    makeAutoObservable(this, {
      setTodos: action,
      setIsLoaded: action,
    });
  }

  initialiseTodos = async () => {
    const todos = await this.gateway.load();

    this.setTodos(todos);
    this.setIsLoaded(true);
  };

  get isLoaded() {
    return this._isLoaded;
  }

  setIsLoaded = (isLoaded: boolean) => {
    this._isLoaded = isLoaded;
  };

  get todos() {
    return this._todos;
  }

  setTodos = (todos: Todo[]) => {
    this._todos = todos;
  };

  addTodo = (todo: Todo) => {
    this._todos.push(todo);
  };

  saveTodos = () => {
    this.gateway.save(this.todos);
  };
}

export const TodoContext = createContext<TodoStore | undefined>(undefined);

export function newTodoStore() {
  return new TodoStore(new TodoStorageGateway());
}
