import React, { Component } from 'react';
import { Container, 
         ContainerDescription, 
         Title, 
         Content } from '../../../../sections/highlighted/highlighted-item.styles.js';

class NoCoke_HighlightedItem extends Component {

   render() {
		return (
			<Container>
				<ContainerDescription>
               <Title>{this.props.title}</Title>
               <Content>{this.props.content}</Content>
            </ContainerDescription>
			</Container>
		)
   }
}

export default NoCoke_HighlightedItem;
