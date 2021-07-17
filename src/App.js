import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Input from "../src/components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [
  { id: Date.now(), item: "Todo 1", done: false },
  { id: Date.now(), item: "Todo 2", done: true },
];
const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-todoContainer">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
