import React, { Component } from 'react';
// import { Container } from './cards.styles'
import TheGood_Card from './the-good-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class TheGood_Cards extends Component {

	render() {
		return (
			<Container>
				
				<TheGood_Card title="Guitarra"
								  desc="guitar desc goes here"/>

				<TheGood_Card title="Piano"
								  desc="piano desc goes here"/>

				<TheGood_Card title="Bateria"
								  desc="drums desc goes here"/>

				<TheGood_Card title="Bajo"
								  desc="bass desc goes here"/>

			</Container>
		)
	}
}

export default TheGood_Cards;