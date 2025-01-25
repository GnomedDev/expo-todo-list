import { initializeLibraries } from "./init";

import { useEffect, useMemo, useReducer, useState } from "react";
import { Spinner, TamaguiProvider, YStack } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { Todo, TodoContext, useTodoState } from "../reducers/Todo.reducer";
import { NewDialog } from "../components/CreateEditDialog";
import TodoStorageGateway from "../gateways/Todo.gateway";

const { tamaguiConfig } = initializeLibraries();

const LoadedApp = ({ initialTodos }: { initialTodos: Todo[] }) => {
  const todoContext = useTodoState(initialTodos);

  return (
    <TodoContext.Provider value={todoContext}>
      <YStack width="100%" height="100%" backgroundColor="$blue12">
        <Header />
        <TodoList />
        <NewDialog />
      </YStack>
    </TodoContext.Provider>
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
    return <LoadedApp initialTodos={initialTodos} />;
  } else {
    return <Spinner size="large" />;
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
