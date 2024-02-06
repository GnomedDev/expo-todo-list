import { initializeLibraries } from "./init";

import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Spinner, TamaguiProvider, YStack } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoContext, newTodoStore } from "./stores/Todo.store";
import { NewDialog } from "./components/CreateEditDialog";
import { useFonts } from "expo-font";

const { tamaguiConfig } = initializeLibraries();

const ThemedApp = observer(function ThemedApp() {
  const [store] = useState(newTodoStore);
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!store.isLoaded || !loaded) {
    return <Spinner size="large" />;
  }

  return (
    <TodoContext.Provider value={store}>
      <YStack width="100%" height='100%'>
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
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
