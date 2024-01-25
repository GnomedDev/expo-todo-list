import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v2";

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
