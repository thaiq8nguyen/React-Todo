import React, { Component } from "react";
import { Card, Grid, Form } from "semantic-ui-react";
export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.searchTask(this.state.task);
  };

  handleInputChange = event => {
    this.setState({ task: event.target.value });
  };
  render() {
    return (
      <>
        <Card centered fluid>
          <Card.Content>
            <Form onSubmit={this.handleSearchSubmit}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="11">
                    <Form.Input
                      name="task"
                      onChange={this.handleInputChange}
                      value={this.state.task}
                      placeholder="Search To Do Tasks"
                    ></Form.Input>
                  </Grid.Column>
                  <Grid.Column width="5" textAlign="right">
                    <Form.Button type="submit">Search</Form.Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Card.Content>
        </Card>
      </>
    );
  }
}
