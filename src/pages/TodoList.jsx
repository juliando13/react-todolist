import React from "react";

import Paper from "../componets/Paper";
import Header from "../componets/Header";
import Todoform from "../componets/TodoForm";
import Todos from "../componets/Todos";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
};

export default TodoList;
