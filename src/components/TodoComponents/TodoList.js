import React, { Component } from "react";
import { Card, List, Transition } from "semantic-ui-react";

import Task from "./Todo";
import styles from "./ToDoList.module.scss";

export default class TodoList extends Component {
  render() {
    return (
      <>
        <Card centered fluid>
          <Card.Content>
            <Card.Header>To Do</Card.Header>
          </Card.Content>
          <Card.Content>
            <Transition.Group as={List} divided duration={200}>
              {this.props.tasks.map((task, index) => (
                <List.Item key={index}>
                  <Task
                    key={index}
                    taskName={task.name}
                    taskIndex={index}
                    completeTask={this.props.completeTask}
                    deleteTask={this.props.deleteToDoTask}
                  />
                </List.Item>
              ))}
            </Transition.Group>
          </Card.Content>
        </Card>
      </>
    );
  }
}
