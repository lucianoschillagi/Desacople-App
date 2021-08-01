import React, { Component } from 'react';
import { Container, 
		   Title, 
		   Description } from '../../../../sections/highlighted/highlighted-cover.styles.js';

class Satisfaction_HighlightedCover extends Component {
   render() {
		return (
			<Container>
				<Title>
					{this.props.highlightedSongTitleOne}
				</Title>
				<Title>
					{this.props.highlightedSongTitleTwo}
				</Title>
				<Title>
					{this.props.highlightedSongTitleThree}
				</Title>
			</Container>
      )
   }
}

export default Satisfaction_HighlightedCover;

