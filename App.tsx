import { initializeLibraries } from "./init";

import { useEffect, useState } from "react";
import { Spinner, TamaguiProvider, YStack } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { Todo, TodoProvider } from "./contexts/Todo.context";
import { NewDialog } from "./components/CreateEditDialog";
import TodoStorageGateway from "./gateways/Todo.gateway";

const { tamaguiConfig } = initializeLibraries();

const LoadedApp = () => {
  return (
    <YStack width="100%" height="100%" backgroundColor="$blue12">
      <Header />
      <TodoList />
      <NewDialog />
    </YStack>
  );
};

const ThemedApp = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const [initialTodos, setInitialTodos] = useState<Todo[]>();
  const loadState = async () => {
    const initialTodos = await TodoStorageGateway.load();
    setInitialTodos(initialTodos);
  };

  useEffect(() => {
    loadState();
  }, []);

  if (loaded && initialTodos !== undefined) {
    return (
      <TodoProvider initialTodos={initialTodos}>
        <LoadedApp />
      </TodoProvider>
    );
  } else {
    return <Spinner size="large" position="absolute" left="50%" top="50%" />;
  }
};

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
