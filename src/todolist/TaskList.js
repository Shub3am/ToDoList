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
  Editor,
  Edit,
}) => {
  const val = tasks.map((task, index) => {
    return (
      <>
        <div className="Task" key={index}>
          <h1 className={IsDone && EditIndex == index ? "MarkTask" : null}>
            {task}
            {index}
          </h1>
          <button onClick={() => EditTask(index)}> Edit</button>
          <button onClick={() => MarkToggle(index)}> Mark</button>
          <button onClick={() => RemoveTask(index)}>Remove</button>
        </div>
        <div>
          {EditMode && EditModeIndex == index ? (
            <div key={index} className="Editor">
              <input onChange={Editor} placeholder="Edit" type="text" />
              <input onClick={() => Edit(index)} type="button" value="Change" />
            </div>
          ) : null}
        </div>
      </>
    );
  });
  return <div>{val}</div>;
};

export default List;
