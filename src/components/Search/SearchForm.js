import React, { Component } from "react";
import { Grid, Form } from "semantic-ui-react";
export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleSearchSubmit = event => {};

  handleInputChange = event => {};
  render() {
    return (
      <>
        <Form onSubmit={this.handleSearchSubmit}>
          <Form.Group>
            <Form.Input
              name="task"
              onChange={this.handleInputChange}
              value={this.state.task}
            ></Form.Input>
            <Form.Button type="submit">Search</Form.Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}
