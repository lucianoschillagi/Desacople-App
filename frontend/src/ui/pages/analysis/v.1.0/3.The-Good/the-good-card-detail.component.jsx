import React, { Component } from 'react';
import { Container, 
			CardDetailTitle, 
			CardDetailDescription } from '../../../../sections/actors/card-detail.styles.js';

class TheGood_CardDetail extends Component {

	render() {
		return (
			<Container>

				<CardDetailTitle>
					Guiter
				</CardDetailTitle>

				<CardDetailDescription>
					guitar description goes here
				</CardDetailDescription>
				
         </Container>
		)
	}
}

export default TheGood_CardDetail;