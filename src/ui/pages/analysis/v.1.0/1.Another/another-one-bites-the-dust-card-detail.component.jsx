import React from 'react';
import Music from './music';
import { Container, 
			CardDetailTitle, 
			CardDetailDescription,
			CardDetailPlayedBy } from '../../../../sections/actors/card-detail.styles.js';

class Another_CardDetail extends React.Component {

	render() {
		return (
			<Container>

				<CardDetailTitle>
					{this.props.cardTitle}
				</CardDetailTitle>

				<CardDetailDescription>
					{this.props.cardDescription}
				</CardDetailDescription>

				<Music/>
				 
				<CardDetailPlayedBy>
					{this.props.cardPlayedBy}
				</CardDetailPlayedBy>

         </Container>
		)
	}
}

export default Another_CardDetail;


