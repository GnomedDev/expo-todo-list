import { config } from "@tamagui/config/v2";
import { useState } from "react";
import { Spinner, TamaguiProvider, YStack, createTamagui } from "tamagui";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { initializeLibraries } from "./init";
import { TodoContext, TodoStore } from "./stores/Todo.store";
import { NewTodoButton } from "./components/NewButton";
import { observer } from "mobx-react-lite";

initializeLibraries();

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
  const tamaguiConfig = createTamagui(config);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ThemedApp />
    </TamaguiProvider>
  );
}
