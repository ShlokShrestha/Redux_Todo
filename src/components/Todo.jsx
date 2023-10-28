import React, { useState } from "react";
import { addTodo, deleteTodo } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";
import "../components/todo.css";
const todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.text);
  return (
    <div className="container">
      <div className="box">
        <div className="todo">TODO_APP</div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter your todo list"
            className="textbox"
            name="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => dispatch(addTodo(input), setInput(""))}>Add Task</button>
        </div>
        <div className="item">
          {data.map((item) => (
            <div className="eachitem">
              <p>{item.data}</p>
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                Delete Task
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default todo;
