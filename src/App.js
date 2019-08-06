import React from "react";
import { Card, Grid, Image, Message, Transition } from "semantic-ui-react";

import loadTasks from "./utils/localStorageAPI";
import AddTask from "./components/TodoComponents/TodoForm";
import CompletedTasks from "./components/TodoComponents/CompletedList";
import SearchPanel from "./components/Search/Search";
import Tasks from "./components/TodoComponents/TodoList";

import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPanel: false,
      completedTasks: [],
      toDoTasks: [],
      transition: { animation: "fade", duration: 400 }
    };
  }
  /* Lifecycle Methods */
  componentDidMount() {
    const { toDoTasks, completedTasks } = loadTasks();

    this.setState({ toDoTasks, completedTasks });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toDoTasks !== prevState.toDoTasks) {
      localStorage.setItem("to_do_tasks", JSON.stringify(this.state.toDoTasks));
    }

    if (this.state.completedTasks !== prevState.completedTasks) {
      localStorage.setItem(
        "completed_tasks",
        JSON.stringify(this.state.completedTasks)
      );
    }
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

  handleSearchPanel = () => {
    this.setState(prevState => ({ searchPanel: !prevState.searchPanel }));
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
        <Navbar showSearchPanel={this.handleSearchPanel} />

        <Transition.Group animation="fade down" duration="400">
          {this.state.searchPanel && <SearchPanel />}
        </Transition.Group>
        <Transition.Group animation="fade" duration="400">
          {!this.state.searchPanel && (
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
                      removeAllCompletedTasks={
                        this.handleRemoveAllCompletedTasks
                      }
                    />
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        </Transition.Group>
      </div>
    );
  }
}

export default App;
