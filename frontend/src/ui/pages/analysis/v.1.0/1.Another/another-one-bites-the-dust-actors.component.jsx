// Imported Modules
import React, { Component } from 'react';
import { Container } from '../../../../sections/actors/actors.styles.js';

import Another_CardDetail from './another-one-bites-the-dust-card-detail.component';
import Another_Cards from './another-one-bites-the-dust-cards.component';

class Another_ActorsSection extends Component {

	render() {
		return (
			<Container>
				<Another_CardDetail/>
				<Another_Cards/>
			</Container>
		);
  }
}

export default Another_ActorsSection;
