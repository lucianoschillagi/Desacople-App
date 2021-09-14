import React, { Component } from 'react';
import { Container, CardTitle, CardDescription } from '../../../../sections/actors/card.styles';

class NoCoke_Card extends Component {

	handleClick(cardTitle, cardDescription) {
		this.props.getSelectedCardInfo(cardTitle, cardDescription)
	}

	render() {
		return (
			<Container 
				onClick={(e) => this.handleClick(this.props.cardTitle,this.props.cardDescription, e)}>

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

export default NoCoke_Card;
