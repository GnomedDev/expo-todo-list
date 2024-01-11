import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { initializeLibraries } from "./init";

initializeLibraries();

export default function App() {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}
