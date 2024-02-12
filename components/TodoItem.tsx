import { observer } from "mobx-react-lite";
import { Accordion, XStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text } from "tamagui";

import { EditDialog } from "./CreateEditDialog";
import { CompletedCheck } from "./CompletedCheck";
import { Todo } from "../stores/Todo.store";
import { EditButton } from "./EditButton";

export const TodoItem = observer(function TodoItem({ todo }: { todo: Todo }) {
  return (
    <XStack alignContent="center">
      <Text flex={1} paddingLeft="0.5em">
        {todo.title}
      </Text>
      <CompletedCheck todo={todo} />
      <EditDialog todo={todo} trigger={EditButton} />
      <Accordion.Trigger>
        <ChevronDown size="$1" />
      </Accordion.Trigger>
    </XStack>
  );
});
