import React, { Component } from 'react';
import { Container, 
         ContainerDescription, 
         Title, 
         Content,
         Where,
         Segment } from '../../../../sections/highlighted/highlighted-item.styles.js';

class Another_HighlightedItem extends Component {

   render() {
		return (
			<Container>
				<ContainerDescription>
               <Title>{this.props.title}</Title>
               <Content>{this.props.content}</Content>
               <Where>Where?</Where>
               <Segment>{this.props.segment}</Segment>
            </ContainerDescription>
			</Container>
		)
   }
}

export default Another_HighlightedItem;
