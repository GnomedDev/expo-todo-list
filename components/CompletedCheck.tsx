import { Checkbox } from "tamagui";
import { Check } from "@tamagui/lucide-icons";

import { Todo, useTodoDispatch } from "../contexts/Todo.context";

export const CompletedCheck = ({ todo }: { todo: Todo }) => {
  const dispatch = useTodoDispatch();
  const onCheckedChange = (checked: boolean) => {
    dispatch({ type: "edit", newTodo: { ...todo, completed: checked } });
  };

  return (
    <Checkbox
      size="$6"
      alignSelf="center"
      borderColor="$black1"
      marginHorizontal="$4"
      onCheckedChange={onCheckedChange}
      defaultChecked={todo.completed ?? false}
    >
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  );
};
