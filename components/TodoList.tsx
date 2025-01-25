import { Text, Accordion } from "tamagui";

import { useTodos } from "../contexts/Todo.context";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useTodos();
  if (todos.length === 0) {
    return (
      <Text>No to-dos created... make one with the button in the corner!</Text>
    );
  }

  return (
    <Accordion type="multiple" paddingHorizontal="$3" paddingTop="$1">
      {todos.map((todo, index) => (
        <Accordion.Item
          key={todo.id}
          value={todo.id}
          borderColor="$black1"
          borderTopWidth="$1.5"
          borderLeftWidth="$1.5"
          borderRightWidth="$1.5"
          borderBottomWidth={index == todos.length - 1 ? "$1.5" : "unset"}
        >
          {/* We cannot use Accordion.Header as it breaks width on mobile */}
          <TodoItem todo={todo} />
          <Accordion.Content
            borderTopWidth="$0.5"
            borderColor="$black1"
            backgroundColor="$white1"
          >
            <Text>{todo.text}</Text>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
