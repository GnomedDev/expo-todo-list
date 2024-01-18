import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { Todo } from "../stores/Todo.store";

import { TODO_STORAGE_KEY } from "../utils/constants";

export interface ITodoGateway {
  load: () => Promise<Todo[]>;
  save: (todos: Todo[]) => void;
}

export class TodoStorageGateway implements ITodoGateway {
  load = async () => {
    const serializedTodos = await AsyncStorage.getItem(TODO_STORAGE_KEY);
    return serializedTodos ? JSON.parse(serializedTodos) : [];
  };

  save = (todos: Todo[]) => {
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
}
