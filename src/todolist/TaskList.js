import React from "react";
import "./Task.css";
const List = ({
  tasks,
  RemoveTask,
  IsDone,
  MarkToggle,
  EditIndex,
  EditTask,
  EditModeIndex,
  EditMode,
}) => {
  const val = tasks.map((task, index) => {
    return (
      <div className="Task" key={index}>
        <h1 className={IsDone && EditIndex == index ? "MarkTask" : null}>
          {task}
          {index}
        </h1>
        {EditMode && EditModeIndex == index ? (
          <h1 className="TaskEdit">Editor Opended</h1>
        ) : null}
        <button onClick={() => EditTask(index)}> Edit</button>
        <button onClick={() => MarkToggle(val[index].key)}> Mark</button>
        <button onClick={() => RemoveTask(index)}>Remove</button>
      </div>
    );
  });
  return <div>{val}</div>;
};

export default List;
