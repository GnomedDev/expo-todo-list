import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Dialog, Input, TextArea, VisuallyHidden } from "tamagui";
import { v4 as newUuidV4 } from "uuid";

import { TodoContext } from "../stores/Todo.store";
import { NewTodoButton } from "./NewButton";

export const NewDialog = observer(function NewDialog() {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const store = useContext(TodoContext)!;

  return (
    <Dialog open={isOpen} defaultOpen={false}>
      <Dialog.Trigger asChild>
        <NewTodoButton onPress={() => setOpen(true)} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Title>Create a new to-do!</Dialog.Title>
          <VisuallyHidden>
            <Dialog.Description>
              Enter your text to create a new item to-do.
            </Dialog.Description>
          </VisuallyHidden>

          <Input onChangeText={setTitle} />
          <TextArea onChangeText={setText} />

          <Dialog.Close asChild>
            <Button
              onPress={() => {
                const todo = {
                  id: newUuidV4(),
                  title: title,
                  text: text,
                };

                store.addTodo(todo);
                setOpen(false);
              }}
            >
              Save to-do item.
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
});
