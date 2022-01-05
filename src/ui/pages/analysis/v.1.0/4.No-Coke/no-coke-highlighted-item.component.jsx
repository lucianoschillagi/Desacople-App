import React, { Component } from "react";
import {
  Container,
  Title,
  Content,
  Where,
  Segment,
} from "../../../../sections/highlighted/highlighted-item.styles.js";

class NoCoke_HighlightedItem extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Content>{this.props.content}</Content>
        <Where>Where?</Where>
        <Segment>{this.props.segment}</Segment>
      </Container>
    );
  }
}

export default NoCoke_HighlightedItem;
