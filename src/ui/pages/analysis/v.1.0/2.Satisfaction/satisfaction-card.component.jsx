import React, { Component } from 'react';
import { Container, CardTitle, CardDescription } from '../../../../sections/actors/card.styles.js';

class Satisfaction_Card extends Component {

	render() {
		return (
			<Container>
				{/* Title */}
				<CardTitle>
					Voice
				</CardTitle>

				{/* Description */}
				<CardDescription>
					Card description goes here
				</CardDescription>
			</Container>
		);
	}
}

export default Satisfaction_Card;
