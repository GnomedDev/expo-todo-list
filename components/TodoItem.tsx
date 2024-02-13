import { observer } from "mobx-react-lite";
import { Accordion, SizableText, XStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";

import { EditDialog } from "./CreateEditDialog";
import { CompletedCheck } from "./CompletedCheck";
import { Todo } from "../stores/Todo.store";
import { EditButton } from "./EditButton";

export const TodoItem = observer(function TodoItem({ todo }: { todo: Todo }) {
  return (
      // container should become full width
    <XStack width='100%'>
      <CompletedCheck todo={todo} />
      {/*  of the container's full width text, should be allowed to grow as possible */}
      <SizableText flex={1} alignSelf="center" size="$9">
        {todo.title}
      </SizableText>
      <EditDialog todo={todo} trigger={EditButton} />
      <Accordion.Trigger backgroundColor="$white1">
        <ChevronDown size="$1" />
      </Accordion.Trigger>
    </XStack>
  );
});
