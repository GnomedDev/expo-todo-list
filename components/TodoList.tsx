import { Text, ListItem, Stack } from "tamagui";

import { TodoStore } from "../stores/Todo.store";
import { observer } from "mobx-react-lite";

type Props = { store: TodoStore };

function EmptyTodo() {
  return (
    <Text>No to-dos created... make one with the button in the corner!</Text>
  );
}

const ListTodos = observer(function ListTodos({ store }: Props) {
  return store.todos.map((todo) => <ListItem title={todo.text} />);
});

const TodoContents = observer(function TodoContents({ store }: Props) {
  if (store.todos.length === 0) {
    return <EmptyTodo />;
  } else {
    return <ListTodos store={store} />;
  }
});

export const TodoList = observer(function TodoList({ store }: Props) {
  return (
    <Stack paddingHorizontal="$3">
      <TodoContents store={store} />
    </Stack>
  );
});
