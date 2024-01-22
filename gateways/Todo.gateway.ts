import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadFromStorage() {
  const serializedTodos = await AsyncStorage.getItem("todos");
  return serializedTodos ? JSON.parse(serializedTodos) : [];
}
