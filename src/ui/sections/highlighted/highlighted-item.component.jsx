import React, { Component } from 'react'
import { Container, 
         ContainerDescription, 
         Title, 
         Content } from './highlighted-item.styles'

class HighlightedItem extends Component {

   render() {
		return (
			<Container>
				<ContainerDescription>
               <Title>{this.props.highlightedSongTitle}</Title>
               <Content>{this.props.highlightedSongContent}</Content>
            </ContainerDescription>
			</Container>
		)
   }
}

export default HighlightedItem
