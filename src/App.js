import React, { Component } from "react";
import "./App.css";
import List from "./todolist/TaskList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      EditIndex: "",
      isDone: false,
      EditMode: false,
      EditModeIndex: "",
      EditorInput: "",
    };
  }
  addTaskInput = (task) => {
    this.setState({ currentInputTask: task.target.value });
  };

  addTask = () => {
    if (this.state.list.includes(this.state.currentInputTask.toLowerCase())) {
      alert("Already Added");
    } else {
      this.setState({
        list: [...this.state.list, this.state.currentInputTask],
      });
    }
  };
  addTaskKeyboard = (task) => {
    if (task.key == "Enter") {
      this.setState({
        list: [...this.state.list, this.state.currentInputTask],
      });
    }
  };
  RemoveTask = (task) => {
    const LocalList = this.state.list.filter((x, index) => {
      return index !== task;
    });
    this.setState({ list: LocalList });
  };
  MarkToggle = (index) => {
    this.setState({ EditIndex: index });
    this.state.isDone == false
      ? this.setState({ isDone: true }, () => {
          console.log(index);
        })
      : this.setState({ isDone: false }, () => console.log(index));
  };
  EditTask = (index) => {
    this.setState({ EditModeIndex: index });
    !this.state.EditMode
      ? this.setState({ EditMode: true })
      : this.setState({ EditMode: false });
  };
  Editor = (evt) => {
    this.setState({ EditorInput: evt.target.value });
  };
  Edit = (index) => {
    const LocalList = this.state.list;
    LocalList[index] = this.state.EditorInput;
    this.setState({ list: LocalList }, () => {
      console.log("Done");
    });
    this.setState({ EditMode: false });
  };
  render() {
    return (
      <div>
        <div className="Header">
          <h1>ToDo List</h1>
        </div>
        <div className="Task-Form">
          <h3>Add a Task: </h3>
          <input
            onChange={this.addTaskInput}
            onKeyDown={this.addTaskKeyboard}
            type="text"
            id="task-input"
            placeholder="Add A Task"
          />
          <input onClick={this.addTask} type="button" value="Submit" />
        </div>
        <div>
          <List
            tasks={this.state.list}
            EditTask={this.EditTask}
            RemoveTask={this.RemoveTask}
            IsDone={this.state.isDone}
            MarkToggle={this.MarkToggle}
            EditIndex={this.state.EditIndex}
            EditModeIndex={this.state.EditModeIndex}
            EditMode={this.state.EditMode}
            Editor={this.Editor}
            Edit={this.Edit}
          />
        </div>
      </div>
    );
  }
}

export default App;
