import { createContext, Dispatch, useEffect, useMemo, useReducer } from "react";
import TodoStorageGateway from "../gateways/Todo.gateway";
import { v4 as newUuidV4 } from "uuid";

export type Todo = {
  title: string;
  text: string;
  id: string;
  completed: boolean;
};

type TodoAction =
  | { type: "new"; title: string; text: string }
  | { type: "edit"; newTodo: Todo }
  | { type: "delete"; id: string };

function todoReducer(oldState: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "new":
      return [
        ...oldState,
        {
          id: newUuidV4(),
          title: action.title,
          text: action.text,
          completed: false,
        },
      ];
    case "edit":
      return oldState.map((todo) =>
        todo.id === action.newTodo.id ? action.newTodo : todo
      );
    case "delete":
      return oldState.filter((todo) => todo.id !== action.id);
  }
}

export const useTodoState = (initialTodos: Todo[]) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const context = useMemo(
    () => ({ todos: state, dispatch }),
    [state, dispatch]
  );

  useEffect(() => {
    TodoStorageGateway.save(state);
  }, [state]);

  return context;
};

export const TodoContext = createContext<
  | {
      todos: Todo[];
      dispatch: Dispatch<TodoAction>;
    }
  | undefined
>(undefined);
