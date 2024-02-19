import { observer } from "mobx-react-lite";
import { Accordion, SizableText, XStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";

import { EditDialog } from "./CreateEditDialog";
import { CompletedCheck } from "./CompletedCheck";
import { Todo } from "../stores/Todo.store";
import { EditButton, DeleteButton } from "./TodoItemButton";

export const TodoItem = observer(function TodoItem({ todo }: { todo: Todo }) {
  return (
    <XStack>
      <CompletedCheck todo={todo} />
      <SizableText flex={1} alignSelf="center" size="$9">
        {todo.title}
      </SizableText>
      <DeleteButton todo={todo} />
      <EditDialog todo={todo} trigger={EditButton} />
      <Accordion.Trigger backgroundColor="$white1">
        <ChevronDown size="$1" />
      </Accordion.Trigger>
    </XStack>
  );
});
