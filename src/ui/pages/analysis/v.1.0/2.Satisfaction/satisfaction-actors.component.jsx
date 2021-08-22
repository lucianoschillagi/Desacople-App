import React, { Component } from 'react';
import { Container } from '../../../../sections/actors/actors.styles.js';

import Satisfaction_CardDetail from './satisfaction-card-detail.component';
import Satisfaction_Cards from './satisfaction-cards.component';

class Satisfaction_ActorsSection extends Component {

	render() {
		return (
			<Container>
				<Satisfaction_CardDetail/>
				<Satisfaction_Cards/>
			</Container>
		);
  }
}

export default Satisfaction_ActorsSection;