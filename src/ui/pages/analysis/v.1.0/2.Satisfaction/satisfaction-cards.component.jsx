import React, { Component } from 'react';
// import { Container } from './cards.styles'
import Satisfaction_Card from './satisfaction-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class Satisfaction_Cards extends Component {

	render() {
		return (
			<Container>
				
				<Satisfaction_Card title="Guitarra"
								  desc="guitar desc goes here"/>

				<Satisfaction_Card title="Piano"
								  desc="piano desc goes here"/>

				<Satisfaction_Card title="Bateria"
								  desc="drums desc goes here"/>

				<Satisfaction_Card title="Bajo"
								  desc="bass desc goes here"/>

			</Container>
		)
	}
}

export default Satisfaction_Cards;