import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
const TodoItem = ({ name, id, done }) => {
  return (
    <div className="todoItem">
           <Checkbox
          checked={done}
          //   onChange={handleChange}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      <p className={done && "line-through"}>
     
        {name}
      </p>
    </div>
  );
};

export default TodoItem;
