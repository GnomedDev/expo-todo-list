import { config } from "@tamagui/config/v2";
import { Suspense, useState } from "react";
import { Spinner, TamaguiProvider, YStack, createTamagui } from "tamagui";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { initializeLibraries } from "./init";
import { wrapPromise } from "./utils/wrapSuspendPromise";
import { TodoContext, TodoStore, loadFromStorage } from "./stores/Todo.store";
import { NewTodoButton } from "./components/NewButton";

initializeLibraries();

const todoLoader = wrapPromise(loadFromStorage(), []);

function LoadedApp() {
  const todos = todoLoader.suspendUntilLoaded();
  const [store] = useState(() => new TodoStore(todos ?? []));

  return (
    <TodoContext.Provider value={store}>
      <YStack width="100%">
        <Header />
        <TodoList />
        <NewTodoButton />
      </YStack>
    </TodoContext.Provider>
  );
}

export default function App() {
  const tamaguiConfig = createTamagui(config);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Suspense fallback={<Spinner size="large" />}>
        <LoadedApp />
      </Suspense>
    </TamaguiProvider>
  );
}
