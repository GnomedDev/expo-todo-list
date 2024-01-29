import { Text, Stack, Accordion, XStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { TodoContext } from "../stores/Todo.store";
import { EditButton } from "./EditButton";
import { EditDialog } from "./CreateEditDialog";
import { Spacer } from "./Spacer";

function EmptyTodo() {
  return (
    <Text>No to-dos created... make one with the button in the corner!</Text>
  );
}

const ListTodos = observer(function ListTodos() {
  const store = useContext(TodoContext)!;

  return (
    <Accordion type="multiple">
      {store.todos.map((todo) => (
        <Accordion.Item
          key={todo.id}
          value={todo.id}
          borderColor="black"
          borderWidth="0.1em"
        >
          <Accordion.Header>
            <XStack alignContent="center">
              <Text paddingLeft="0.5em">{todo.title}</Text>
              <Spacer />
              <EditDialog todo={todo} trigger={EditButton} />
              <Accordion.Trigger>
                <ChevronDown size="$1" />
              </Accordion.Trigger>
            </XStack>
          </Accordion.Header>
          <Accordion.Content>
            <Text>{todo.text}</Text>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
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
    <Stack paddingHorizontal="$3" paddingTop="$1">
      <TodoContents />
    </Stack>
  );
});
