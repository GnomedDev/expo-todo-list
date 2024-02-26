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
});
