import React from 'react';
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
				 
				<CardDetailPlayedBy>
					{this.props.cardPlayedBy}
				</CardDetailPlayedBy>

         </Container>
		)
	}
}

export default Another_CardDetail;