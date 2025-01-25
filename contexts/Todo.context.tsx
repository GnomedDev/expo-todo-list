import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
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

const TodoContext = createContext<Todo[]>([]);
const TodoDispatchContext = createContext<Dispatch<TodoAction> | undefined>(
  undefined
);

export const useTodos = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext)!;

type ProviderProps = {
  initialTodos: Todo[];
  children: ReactNode;
};

export const TodoProvider = ({ initialTodos, children }: ProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  useEffect(() => {
    TodoStorageGateway.save(todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
