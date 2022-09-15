import React from "react";
import "./Task.css";
const List = ({ tasks, RemoveTask, IsDone, MarkToggle }) => {
  const val = tasks.map((task, index) => {
    return (
      <div className="Task" key={index}>
        <h1 className={IsDone ? "MarkTask" : null}>
          {task}
          {index}
        </h1>
        <button onClick={() => MarkToggle(index)}> Mark</button>
        <button onClick={() => RemoveTask(index)}>Remove</button>
      </div>
    );
  });
  return <div>{val}</div>;
};

export default List;
