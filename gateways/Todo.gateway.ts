import AsyncStorage from "@react-native-async-storage/async-storage";

import { TODO_STORAGE_KEY } from "../utils/constants";

export async function loadFromStorage() {
  const serializedTodos = await AsyncStorage.getItem(TODO_STORAGE_KEY);
  return serializedTodos ? JSON.parse(serializedTodos) : [];
}
