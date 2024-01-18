import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Spinner, TamaguiProvider, YStack } from "tamagui";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { initializeLibraries } from "./init";
import { TodoContext, newTodoStore } from "./stores/Todo.store";
import { NewDialog } from "./components/NewDialog";

const { tamaguiConfig } = initializeLibraries();

const ThemedApp = observer(function ThemedApp() {
  const [store] = useState(newTodoStore);
  if (!store.isLoaded) {
    return <Spinner size="large" />;
  }

  return (
    <TodoContext.Provider value={store}>
      <YStack width="100%">
        <Header />
        <TodoList />
        <NewDialog />
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
