import React, { Component } from 'react';
import { Container } from '../../../../sections/actors/actors.styles.js';

import TheGood_CardDetail from './the-good-card-detail.component';
import TheGood_Cards from './the-good-cards.component';

class TheGood_ActorsSection extends Component {

	render() {
		return (
			<Container>
				<TheGood_CardDetail/>
				<TheGood_Cards/>
			</Container>
		);
  }
}

export default TheGood_ActorsSection;