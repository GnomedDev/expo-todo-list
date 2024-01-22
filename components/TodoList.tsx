import { Text, ListItem, Stack } from "tamagui";

import { TodoContext, TodoStore } from "../stores/Todo.store";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

function EmptyTodo() {
  return (
    <Text>No to-dos created... make one with the button in the corner!</Text>
  );
}

const ListTodos = observer(function ListTodos() {
  const store = useContext(TodoContext)!;

  return store.todos.map((todo) => <ListItem title={todo.text} />);
});

const TodoContents = observer(function TodoContents() {
  const store = useContext(TodoContext)!;

  if (store.todos.length === 0) {
    return <EmptyTodo />;
  } else {
    return <ListTodos />;
  }
});

export const TodoList = observer(function TodoList() {
  return (
    <Stack paddingHorizontal="$3">
      <TodoContents />
    </Stack>
  );
});
