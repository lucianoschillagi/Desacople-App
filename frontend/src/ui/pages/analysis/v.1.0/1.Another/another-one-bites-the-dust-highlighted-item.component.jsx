import React, { Component } from 'react';
import { Container, 
         ContainerDescription, 
         Title, 
         Content } from '../../../../sections/highlighted/highlighted-item.styles.js';

class Anoher_HighlightedItem extends Component {

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

export default Anoher_HighlightedItem;
