import React from "react";
import { Grid, Message } from "semantic-ui-react";
import AddTask from "./components/TodoComponents/TodoForm";
import Tasks from "./components/TodoComponents/TodoList";
import CompletedTasks from "./components/TodoComponents/CompletedList";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoTasks: [],
      completedTasks: []
    };
  }

  addToDoTask = task => {
    this.setState({ toDoTasks: [...this.state.toDoTasks, task] });
  };

  handleCompleteTask = taskIndex => {
    this.addTaskToCompletedList(taskIndex);

    const newToDoTasks = this.removeTaskFromList(
      this.state.toDoTasks,
      taskIndex
    );

    this.setState({ toDoTasks: newToDoTasks });
  };

  handleUndoCompletedTask = taskIndex => {
    const task = this.state.completedTasks[taskIndex];

    this.addToDoTask(task);

    const newCompletedTasks = this.removeTaskFromList(
      this.state.completedTasks,
      taskIndex
    );

    this.setState({ completedTasks: newCompletedTasks });
  };

  handleDeleteToDoTask = taskIndex => {
    const newToDoTasks = this.removeTaskFromList(
      this.state.toDoTasks,
      taskIndex
    );
    this.setState({ toDoTasks: newToDoTasks });
  };

  handleRemoveAllCompletedTasks = () => {
    this.setState({ completedTasks: [] });
  };

  removeTaskFromList = (list, taskIndex) => {
    return list.filter((task, index) => {
      return index !== taskIndex;
    });
  };

  addTaskToCompletedList = taskIndex => {
    const task = this.state.toDoTasks[taskIndex];
    this.setState({
      completedTasks: [...this.state.completedTasks, task]
    });
  };

  render() {
    const hasToDoTask = this.state.toDoTasks.length > 0;

    let displayToDo;

    if (hasToDoTask) {
      displayToDo = (
        <Tasks
          tasks={this.state.toDoTasks}
          completeTask={this.handleCompleteTask}
          deleteToDoTask={this.handleDeleteToDoTask}
        />
      );
    } else {
      displayToDo = (
        <Message
          className={styles.messageContainer}
          header="You do not have any todos"
        />
      );
    }
    return (
      <div>
        <Navbar />
        <Grid stackable columns={2} padded={"horizontally"}>
          <Grid.Row>
            <Grid.Column computer={6}>
              <AddTask newTask={this.addToDoTask} />
            </Grid.Column>
            <Grid.Column computer={6}>
              {displayToDo}
              {this.state.completedTasks.length > 0 && (
                <CompletedTasks
                  completedTasks={this.state.completedTasks}
                  undoCompletedTask={this.handleUndoCompletedTask}
                  removeAllCompletedTasks={this.handleRemoveAllCompletedTasks}
                />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
