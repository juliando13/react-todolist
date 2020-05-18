import React from "react";
import "./styles.css";

import Paper from "./componets/Paper";
import Header from "./componets/Header";
import Todoform from "./componets/TodoForm";
import Todos from "./componets/Todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
}
