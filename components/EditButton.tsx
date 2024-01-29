import { Pencil } from "@tamagui/lucide-icons";
import { Button } from "tamagui";

export function EditButton({ onPress }: { onPress: () => void }) {
  return (
    <Button
      accessibilityLabel="Edit your to-do"
      onPress={onPress}
      icon={<Pencil />}
    />
  );
}
