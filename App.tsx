import { useState } from "react";
import { Spinner, TamaguiProvider, YStack } from "tamagui";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { initializeLibraries } from "./init";
import { TodoContext, TodoStore } from "./stores/Todo.store";
import { NewTodoButton } from "./components/NewButton";
import { observer } from "mobx-react-lite";

const { tamaguiConfig } = initializeLibraries();

const ThemedApp = observer(function ThemedApp() {
  const [store] = useState(() => new TodoStore());
  if (!store.isLoaded) {
    return <Spinner size="large" />;
  }

  return (
    <TodoContext.Provider value={store}>
      <YStack width="100%">
        <Header />
        <TodoList />
        <NewTodoButton />
      </YStack>
    </TodoContext.Provider>
  );
});

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ThemedApp />
    </TamaguiProvider>
  );
}
