import { Pencil, Trash } from "@tamagui/lucide-icons";
import { useContext } from "react";
import { Button } from "tamagui";
import { observer } from "mobx-react-lite";

import { Todo, TodoContext } from "../stores/Todo.store";

type GenericProps = {
  icon: JSX.Element;
  onPress: () => void;
  "aria-label": string;
};

function ItemButton(props: GenericProps) {
  return <Button backgroundColor="$white1" alignSelf="center" {...props} />;
}

export function EditButton({ onPress }: { onPress: () => void }) {
  return (
    <ItemButton
      aria-label="Edit your to-do"
      onPress={onPress}
      icon={<Pencil />}
    />
  );
}

export type DeleteProps = {
  todo: Todo;
};

export const DeleteButton = observer(function DeleteButton({
  todo,
}: DeleteProps) {
  const store = useContext(TodoContext)!;
  const onPress = () => store.deleteTodo(todo.id);

  return (
    <ItemButton aria-label="Delete to-do" onPress={onPress} icon={<Trash />} />
  );
});
