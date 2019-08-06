import React, { Component } from "react";
import loadTasks from "../../utils/localStorageAPI";
import { Card, Grid } from "semantic-ui-react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoTasks: [],
      completedTasks: [],
      searchResults: []
    };
  }

  componentDidMount() {
    const { toDoTasks, completedTasks } = loadTasks();

    this.setState({ toDoTasks, completedTasks });
  }

  handleSearch = task => {
    const results = this.state.toDoTasks.filter(toDoTask => {
      return toDoTask.name.toLowerCase().includes(task);
    });
    this.setState({ searchResults: results });
  };
  render() {
    return (
      <div>
        <Grid columns={2} {...this.props} padded="horizontally" stackable>
          <Grid.Row>
            <Grid.Column computer={6}>
              <SearchForm searchTask={this.handleSearch} />
            </Grid.Column>
            <Grid.Column computer={6}>
              {this.state.searchResults.length > 0 && (
                <SearchResult searchResults={this.state.searchResults} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
