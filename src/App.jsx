import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import TodosList from "./Components/Todos/TodosList";
import { NavbarComponent } from "./Common/NavBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <TodosList />
    </Provider>
  );
}

export default App;
