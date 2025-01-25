import { Text, Stack, Accordion } from "tamagui";
import { useContext } from "react";

import { TodoContext } from "../reducers/Todo.reducer";
import { TodoItem } from "./TodoItem";

function EmptyTodo() {
  return (
    <Text>No to-dos created... make one with the button in the corner!</Text>
  );
}

const ListTodos = function ListTodos() {
  const { todos } = useContext(TodoContext)!;

  return (
    <Accordion type="multiple">
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

const TodoContents = function TodoContents() {
  const { todos } = useContext(TodoContext)!;

  if (todos.length === 0) {
    return <EmptyTodo />;
  } else {
    return <ListTodos />;
  }
};

export const TodoList = () => (
  <Stack paddingHorizontal="$3" paddingTop="$1">
    <TodoContents />
  </Stack>
);
