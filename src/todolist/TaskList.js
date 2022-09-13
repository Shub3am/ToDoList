import React from "react";
import "./Task.css";
const List = ({ tasks }) => {
  const val = tasks.map((task, index) => {
    return (
      <div className="Task" key={index}>
        <h1>
          {task}
          {index}
        </h1>
        <button>Remove</button>
      </div>
    );
  });
  return <div>{val}</div>;
};

export default List;
