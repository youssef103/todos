import React from "react";
import style from "./App.module.scss";
import { TodosList } from "./Components/Todos/TodosList";

function App() {
  return (
    <div className={style.App}>
      <TodosList />
    </div>
  );
}

export default App;
