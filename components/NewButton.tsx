import { Pencil } from "@tamagui/lucide-icons";
import { Button, Stack } from "tamagui";

export function NewTodoButton({ onPress }: { onPress: () => void }) {
  return (
    <Stack
      style={{
        // Defines a bounding box for the button
        width: "50px",
        height: "50px",
        // Fix the position to the viewport, not the page content.
        position: "fixed",
        // Move the element to the bottom right, with a little bit of padding.
        bottom: "10px",
        right: "10px",
      }}
    >
      <Button
        accessibilityLabel="Create a new to-do!"
        onPress={onPress}
        icon={<Pencil />}
      />
    </Stack>
  );
}
