import React, { Component } from 'react';
// import { Container } from './cards.styles'
import Another_Card from './another-one-bites-the-dust-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class Another_Cards extends Component {

	render() {
		return (
			<Container>
				
				<Another_Card title="Guitar"
								  desc="guitar desc goes here"/>

				<Another_Card title="Piano"
								  desc="piano desc goes here"/>

				<Another_Card title="Drums"
								  desc="drums desc goes here"/>

				<Another_Card title="Bass"
								  desc="bass desc goes here"/>

			</Container>
		)
	}
}

export default Another_Cards;