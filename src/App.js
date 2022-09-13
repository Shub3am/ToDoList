import React, { Component } from "react";
import "./App.css";
import List from "./todolist/List_Container";
class App extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  render() {
    return (
      <div>
        <div className="Header">
          <h1>ToDo List</h1>
        </div>
        <div className="Task-Form">
          <h3>Add a Task: </h3>
          <input
            type="text"
            id="task-input"
            for="Task"
            placeholder="Add A Task"
          />
          <input type="submit" />
        </div>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
