import React, { Component } from 'react';
import { Container, CardTitle, CardDescription } from '../../../../sections/actors/card.styles.js';

class Another_Card extends Component {

	render() {
		return (
			<Container>
				
				{/* Title */}
				<CardTitle>
					Guitar
				</CardTitle>
				
				{/* Description */}
				<CardDescription>
					Card guitar description goes here
				</CardDescription>

			</Container>
		);
	}
}

export default Another_Card;
