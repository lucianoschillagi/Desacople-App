import React, { Component } from 'react'
import { Container, 
			Title, 
			Description } from './highlighted-cover.styles'

class HighlightedCover extends Component {
   render() {
		return (
			<Container>
				<Title>
					{this.props.highlightedSongTitleOne}
				</Title>
				<Description>
					<br></br>
					<p>{this.props.highlightedSongTitleOne}</p>
					<p>{this.props.highlightedSongTitleTwo}</p>
					<p>{this.props.highlightedSongTitleThree}</p>
				</Description>
			</Container>
      )
   }
}

export default HighlightedCover

