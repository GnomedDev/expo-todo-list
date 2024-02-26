import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Dialog, Input, TextArea, VisuallyHidden } from "tamagui";

import { Todo, TodoContext } from "../stores/Todo.store";
import { NewTodoButton } from "./NewButton";

type BaseDialogProps = {
  dialogTitle: string;
  dialogDescription: string;
  defaultTitle?: string;
  defaultText?: string;
  onPress: (title: string, text: string) => void;
  trigger: React.FunctionComponent<{ onPress: () => void }>;
};

const BaseDialog = observer(function BaseDialog({
  dialogTitle,
  dialogDescription,
  defaultTitle,
  defaultText,
  trigger: Trigger,
  onPress,
}: BaseDialogProps) {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(defaultTitle ?? "");
  const [text, setText] = useState(defaultText ?? "");

  return (
    <Dialog open={isOpen} defaultOpen={false}>
      <Dialog.Trigger asChild>
        <Trigger onPress={() => setOpen(true)} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content gap="$2" backgroundColor="$white1">
          <Dialog.Title>{dialogTitle}</Dialog.Title>
          <VisuallyHidden>
            <Dialog.Description>{dialogDescription}</Dialog.Description>
          </VisuallyHidden>

          <Input defaultValue={title} onChangeText={setTitle} />
          <TextArea defaultValue={text} onChangeText={setText} />

          <Dialog.Close asChild>
            <Button
              onPress={() => {
                onPress(title, text);
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

export const NewDialog = function NewDialog() {
  const store = useContext(TodoContext)!;

  return (
    <BaseDialog
      dialogTitle="Create a new to-do!"
      dialogDescription="Enter your text to create a new item to-do."
      trigger={NewTodoButton}
      onPress={store.newTodo}
    />
  );
};

type EditProps = {
  todo: Todo;
  trigger: React.FunctionComponent<{ onPress: () => void }>;
};

export const EditDialog = function EditDialog({ todo, trigger }: EditProps) {
  const store = useContext(TodoContext)!;
  const onPress = (title: string, text: string) =>
    store.editTodo(todo, title, text);

  return (
    <BaseDialog
      dialogTitle="Edit your to-do item."
      dialogDescription="Enter your text to edit your to-do item."
      defaultTitle={todo.title}
      defaultText={todo.text}
      trigger={trigger}
      onPress={onPress}
    />
  );
};
