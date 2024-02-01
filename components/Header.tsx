import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H2 } from "tamagui";

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <H2 backgroundColor="grey" textAlign="center" paddingTop={insets.top}>
      Your TO-DO app
    </H2>
  );
}
