import { createTamagui } from "tamagui";

import config from "./tamagui.config";

// This import is needed before any UUID imports.
import "react-native-get-random-values";
// This import is needed for expo-dev-client error handling.
import "expo-dev-client";

export function initializeLibraries() {
  return {
    tamaguiConfig: createTamagui(config),
  };
}
