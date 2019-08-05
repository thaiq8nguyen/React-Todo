import React, { Component } from "react";
import { Button, Grid, Icon, List, Checkbox } from "semantic-ui-react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: false };
  }

  render() {
    return (
      <List.Item>
        <Grid>
          <Grid.Row columns={2} verticalAlign="middle">
            <Grid.Column width={2}>
              <Checkbox
                checked={this.state.completed}
                onChange={() => this.props.completeTask(this.props.taskIndex)}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <List.Content>
                <List.Header>{this.props.taskName}</List.Header>
              </List.Content>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button
                icon
                size="small"
                basic
                color="red"
                onClick={() => this.props.deleteTask(this.props.taskIndex)}
              >
                <Icon name="trash" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
  }
}
