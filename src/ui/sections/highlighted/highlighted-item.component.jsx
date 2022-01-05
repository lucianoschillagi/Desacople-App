import React, { Component } from "react";
import { Container, Title, Content } from "./highlighted-item.styles";

class HighlightedItem extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.highlightedSongTitle}</Title>
        <Content>{this.props.highlightedSongContent}</Content>
      </Container>
    );
  }
}

export default HighlightedItem;
