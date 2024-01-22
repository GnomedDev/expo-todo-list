import AsyncStorage from "@react-native-async-storage/async-storage";
import { action, makeAutoObservable } from "mobx";
import { createContext } from "react";

export type Todo = {
  text: string;
};

export class TodoStore {
  private _todos: Todo[] = [];

  constructor(todos: Todo[]) {
    this._todos = todos;
    makeAutoObservable(this, {
      setTodos: action,
    });
  }

  get todos() {
    return this._todos;
  }

  setTodos = (todos: Todo[]) => {
    this._todos = todos;
  };

  addTodo = (todo: Todo) => {
    this.setTodos([todo, ...this.todos]);
  };
}

export const TodoContext = createContext<TodoStore | undefined>(undefined);

export async function loadFromStorage() {
  const serializedTodos = await AsyncStorage.getItem("todos");
  return serializedTodos ? JSON.parse(serializedTodos) : [];
}
