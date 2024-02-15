import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H2 } from "tamagui";

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <H2
      textAlign="center"
      marginTop={insets.top}
      paddingVertical="$3"
      backgroundColor="#334e83"
      color="$white1"
    >
      Your TO-DO list
    </H2>
  );
}
