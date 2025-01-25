import { Pencil, Trash } from "@tamagui/lucide-icons";
import { memo, useCallback } from "react";
import { Button } from "tamagui";
import { useTodoDispatch } from "../contexts/Todo.context";

type GenericProps = {
  icon: JSX.Element;
  onPress: () => void;
  "aria-label": string;
};

function ItemButton(props: GenericProps) {
  return <Button backgroundColor="$white1" alignSelf="center" {...props} />;
}

export const EditButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <ItemButton
      aria-label="Edit your to-do"
      onPress={onPress}
      icon={<Pencil />}
    />
  );
};

export const DeleteButton = memo(function DeleteButton({ id }: { id: string }) {
  const dispatch = useTodoDispatch();
  const onPress = useCallback(
    () => dispatch({ type: "delete", id }),
    [dispatch, id]
  );

  return (
    <ItemButton aria-label="Delete to-do" onPress={onPress} icon={<Trash />} />
  );
});
