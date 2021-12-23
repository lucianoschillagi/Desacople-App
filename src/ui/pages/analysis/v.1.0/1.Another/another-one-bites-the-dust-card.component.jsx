import React, { Component } from 'react';
import { Container, CardTitle, CardDescription } from '../../../../sections/actors/card.styles';

class Another_Card extends Component {

	handleClick(cardTitle, cardDescription, cardPlayedBy) {
		this.props.getSelectedCardInfo(cardTitle, cardDescription, cardPlayedBy)
	}

	render() {
		return (
			<Container 
				onClick={(e) => this.handleClick(this.props.cardTitle,this.props.cardDescription, this.props.cardPlayedBy, e)}>

				<CardTitle>
					{this.props.cardTitle}
				</CardTitle>

				{/* <CardDescription>
					{this.props.cardDescription}
				</CardDescription> */}
				
			</Container>
		);
	}
}

export default Another_Card;
