import React from 'react';
import { Container, 
			CardDetailTitle, 
			CardDetailDescription } from '../../../../sections/actors/card-detail.styles.js';

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
				 
         </Container>
		)
	}
}

export default Another_CardDetail;