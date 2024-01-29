import { createContext } from "react";
import { action, makeAutoObservable, runInAction } from "mobx";
import { v4 as newUuidV4 } from "uuid";

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
      newTodo: action,
      editTodo: action,
    });
  }

  initialiseTodos = async () => {
    const todos = await this.gateway.load();

    runInAction(() => {
      this._todos = todos;
      this._isLoaded = true;
    });
  };

  get isLoaded() {
    return this._isLoaded;
  }

  get todos() {
    return this._todos;
  }

  newTodo = (title: string, text: string) => {
    this._todos.push({
      id: newUuidV4(),
      title,
      text,
    });

    this.saveTodos();
  };

  editTodo = (todo: Todo, newTitle: string, newText: string) => {
    todo.title = newTitle;
    todo.text = newText;

    this.saveTodos();
  };

  private saveTodos = () => {
    this.gateway.save(this.todos);
  };
}

export const TodoContext = createContext<TodoStore | undefined>(undefined);

export function newTodoStore() {
  return new TodoStore(new TodoStorageGateway());
}
