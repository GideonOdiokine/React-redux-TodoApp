import React from "react";

const TodoItem = ({ name, id, done }) => {
  return (
    <div className="todoItem">
      <p className={done && 'line-through'}>{name}</p>
    </div>
  );
};

export default TodoItem;
