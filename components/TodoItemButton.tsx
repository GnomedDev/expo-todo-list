import { Pencil, Trash } from "@tamagui/lucide-icons";
import { useContext } from "react";
import { Button } from "tamagui";

import { TodoContext } from "../reducers/Todo.reducer";

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
  id: string;
};

export const DeleteButton = function DeleteButton({ id }: DeleteProps) {
  const context = useContext(TodoContext)!;
  const onPress = () => context.dispatch({ type: "delete", id });

  return (
    <ItemButton aria-label="Delete to-do" onPress={onPress} icon={<Trash />} />
  );
};
