import React, { Component } from 'react';
import { Container, 
			CardDetailTitle, 
			CardDetailDescription } from '../../../../sections/actors/card-detail.styles.js';

class NoCoke_CardDetail extends Component {

	render() {
		return (
			<Container>

				<CardDetailTitle>
					{this.props.cardTitle}
				</CardDetailTitle>

				<CardDetailDescription>
					{this.props.cardDescription}
				</CardDetailDescription>
				 
         </Container>
		)
	}
}

export default NoCoke_CardDetail;