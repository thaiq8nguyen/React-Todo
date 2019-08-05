import React, { Component } from "react";
import loadTasks from "../../utils/localStorageAPI";
import { Grid } from "semantic-ui-react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      toDoTasks: [],
      completedTasks: []
    };
  }

  componentDidMount() {
    const { toDoTasks, completedTasks } = loadTasks();

    this.setState({ toDoTasks, completedTasks });
  }
  render() {
    return (
      <>
        <Grid>Search Functionality</Grid>
      </>
    );
  }
}
