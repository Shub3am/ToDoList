import React, { Component } from "react";
import "./App.css";
import List from "./todolist/TaskList";
class App extends Component {
  constructor() {
    super();
    this.state = { list: [], currentInputTask: "" };
  }
  addTaskInput = (task) => {
    this.setState({ currentInputTask: task.target.value });
  };

  addTask = () => {
    this.setState({
      list: [...this.state.list, this.state.currentInputTask],
    });
  };
  addTaskKeyboard = (evt) => {
    if (evt.key == "Enter") {
      this.setState({
        list: [...this.state.list, this.state.currentInputTask],
      });
    }
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
          <List tasks={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
