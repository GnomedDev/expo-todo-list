import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

config.themes.light.background = config.themes.light.blue12;

export default createTamagui(config);
