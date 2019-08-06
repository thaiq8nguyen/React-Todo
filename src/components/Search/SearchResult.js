import React, { Component } from "react";
import { Container, List, Message } from "semantic-ui-react";
export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container>
          <Message success>
            <List>
              {this.props.searchResults.map((task, index) => (
                <List.Item key={index}>{task.name}</List.Item>
              ))}
            </List>
          </Message>
        </Container>
      </>
    );
  }
}
