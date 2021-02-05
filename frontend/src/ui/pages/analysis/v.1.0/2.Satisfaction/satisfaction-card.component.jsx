import React, { Component } from 'react';
import { Container } from '../../../../sections/actors/card.styles.js';

class Satisfaction_Card extends Component {

	render() {
		return (
			<Container>
				{/* Title */}
				<h3>{this.props.title}</h3>
				{/* Description */}
				<p>{this.props.desc}</p>
			</Container>
		);
	}
}

export default Satisfaction_Card;
