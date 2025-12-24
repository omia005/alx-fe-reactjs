import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
