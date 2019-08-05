// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import { Card, List } from "semantic-ui-react";

import Task from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header>To Do</Card.Header>
        </Card.Content>
        <Card.Content>
          <List divided>
            {this.props.tasks.map((task, index) => (
              <Task
                taskName={task.name}
                taskIndex={index}
                key={index}
                completeTask={this.props.completeTask}
                deleteTask={this.props.deleteToDoTask}
              />
            ))}
          </List>
        </Card.Content>
      </Card>
    );
  }
}
