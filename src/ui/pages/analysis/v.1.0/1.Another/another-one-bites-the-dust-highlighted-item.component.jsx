import React, { Component } from "react";
import PlayPauseButton from "./play-pause-button.component";
import {
  Container,
  Title,
  Content,
  Where,
  Segment,
} from "../../../../sections/highlighted/highlighted-item.styles.js";

class AnotherHighlightedItem extends Component {
  render() {
    return (
      <Container>
          <Title>{this.props.title}</Title>
          <Content>{this.props.content}</Content>
          <Where>Where?</Where>
          <Segment>{this.props.segment}</Segment>
          <PlayPauseButton />
      </Container>
    );
  }
}

export default AnotherHighlightedItem;
