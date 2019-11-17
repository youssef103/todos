import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import TodosList from "./Components/Todos/TodosList";

function App() {
  return (
    <Provider store={store}>
      <TodosList />
    </Provider>
  );
}

export default App;
