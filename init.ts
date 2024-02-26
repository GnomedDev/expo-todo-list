import { createTamagui } from "tamagui";

import config from "./tamagui.config";

// This import is needed before any UUID imports.
import "react-native-get-random-values";
// This import is needed for expo-dev-client error handling.
import "expo-dev-client";

export function initializeLibraries() {
  if (
    !new (class {
      x: undefined;
    })().hasOwnProperty("x")
  ) {
    throw new Error("Mobx transpiler is not configured correctly");
  }

  return {
    tamaguiConfig: createTamagui(config),
  };
}
