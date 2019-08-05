import React, { Component } from "react";
import { Checkbox, Grid, List } from "semantic-ui-react";
export default class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: true };
  }
  render() {
    return (
      <List.Item>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Checkbox
                checked={this.state.completed}
                onChange={() =>
                  this.props.undoCompletedTask(this.props.taskIndex)
                }
              />
            </Grid.Column>
            <Grid.Column>
              <List.Content>
                <List.Header>{this.props.taskName}</List.Header>
              </List.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
  }
}
