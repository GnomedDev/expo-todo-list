import { memo } from "react";
import { Accordion, SizableText, XStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";

import { EditDialog } from "./CreateEditDialog";
import { CompletedCheck } from "./CompletedCheck";
import { Todo } from "../contexts/Todo.context";
import { EditButton, DeleteButton } from "./TodoItemButton";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <XStack width="100%" backgroundColor="$white1">
      <CompletedCheck todo={todo} />
      <SizableText
        flex={1}
        size="$6"
        alignSelf="center"
        textDecorationLine={todo.completed ? "line-through" : "unset"}
      >
        {todo.title}
      </SizableText>
      <DeleteButton id={todo.id} />
      <EditDialog todo={todo} trigger={EditButton} />
      <Accordion.Trigger backgroundColor="$white1">
        <ChevronDown size="$1" />
      </Accordion.Trigger>
    </XStack>
  );
};
