import { Checkbox, CheckedState } from "tamagui";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Check } from "@tamagui/lucide-icons";

import { Todo, TodoContext } from "../stores/Todo.store";

export const CompletedCheck = observer(function ({ todo }: { todo: Todo }) {
  const store = useContext(TodoContext)!;
  const onCheckedChange = (checked: CheckedState) => {
    store.editChecked(todo, checked === true);
  };

  return (
    <Checkbox
      size="$8"
      alignSelf="center"
      marginHorizontal="0.5em"
      checked={todo.completed ?? false}
      onCheckedChange={onCheckedChange}
    >
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox>
  );
});
