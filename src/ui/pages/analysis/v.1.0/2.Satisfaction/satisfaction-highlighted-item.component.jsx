import React, { Component } from 'react';
import { Container, 
         ContainerDescription, 
         Title, 
         Content } from '../../../../sections/highlighted/highlighted-item.styles.js';

class Satisfaction_HighlightedItem extends Component {

   render() {
		return (
			<Container>
				<ContainerDescription>
               <Title>{this.props.hightlightedSectionItemData}</Title>
               <Content>{this.props.hightlightedSectionItemData}</Content>
            </ContainerDescription>
			</Container>
		)
   }
}

export default Satisfaction_HighlightedItem;
