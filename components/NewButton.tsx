import { Pencil } from "@tamagui/lucide-icons";
import { Button, Stack } from "tamagui";

export function NewTodoButton({ onPress }: { onPress: () => void }) {
  return (
    <Stack
      style={{
        // Defines a bounding box for the button
        width: 50,
        height: 50,
        // Fix the position to the viewport, not the page content.
        position: "absolute",
        // Move the element to the bottom right, with a little bit of padding.
        bottom: 10,
        right: 10,
      }}
    >
      <Button
        aria-label="Create a new to-do!"
        onPress={onPress}
        icon={<Pencil />}
      />
    </Stack>
  );
}
