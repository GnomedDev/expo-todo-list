import { Checkbox } from "tamagui";
import { Check } from "@tamagui/lucide-icons";

import { useTodoDispatch } from "../contexts/Todo.context";
import { useCallback } from "react";

type Props = { id: string; completed: boolean };

export const CompletedCheck = ({ id, completed }: Props) => {
  const dispatch = useTodoDispatch();
  const onCheckedChange = useCallback(
    (checked: boolean) =>
      dispatch({ type: "edit", id, changes: { completed: checked } }),
    [dispatch, id]
  );

  return (
    <Checkbox
      size="$6"
      alignSelf="center"
      borderColor="$black1"
      marginHorizontal="$4"
      onCheckedChange={onCheckedChange}
      defaultChecked={completed ?? false}
    >
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  );
};
