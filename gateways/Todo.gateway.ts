import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { Todo } from "../contexts/Todo.context";

import { TODO_STORAGE_KEY } from "../utils/constants";

const load = async () => {
  const serializedTodos = await AsyncStorage.getItem(TODO_STORAGE_KEY);
  return serializedTodos ? JSON.parse(serializedTodos) : [];
};

const save = (todos: Todo[]) => {
  // Purposefully do not await this, we don't want to block
  // on the storage before showing the updated state, and
  // errors cannot be handled anyway.
  AsyncStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos)).then(
    () => {},
    (err) => {
      Alert.alert(
        "Could not save to local storage!",
        `Could not save your todos to the local storage, meaning they will be cleared on restart, the reason given was: ${err}`
      );
    }
  );
};

export default { load, save };
