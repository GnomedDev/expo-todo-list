import { createContext } from "react";
import { action, makeAutoObservable } from "mobx";

import { loadFromStorage } from "../gateways/Todo.gateway";

export type Todo = {
  text: string;
};

export class TodoStore {
  private _todos: Todo[] = [];
  private _isLoaded: boolean = false;

  constructor() {
    this.initialiseTodos();
    makeAutoObservable(this, {
      setTodos: action,
    });
  }

  initialiseTodos = async () => {
    const todos = await loadFromStorage();

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
}

export const TodoContext = createContext<TodoStore | undefined>(undefined);
