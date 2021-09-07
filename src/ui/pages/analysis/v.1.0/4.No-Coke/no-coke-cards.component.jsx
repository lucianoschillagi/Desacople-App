import React, { Component } from 'react';
import NoCoke_Card from './no-coke-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class NoCoke_Cards extends Component {

	render() {
		return (
			<Container>
				
				<NoCoke_Card 
					cardTitle={this.props.cards[0].cardTitle}
					cardDescription={this.props.cards[0].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[1].cardTitle}
					cardDescription={this.props.cards[1].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[2].cardTitle}
					cardDescription={this.props.cards[2].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[3].cardTitle}
					cardDescription={this.props.cards[3].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[4].cardTitle}
					cardDescription={this.props.cards[4].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[5].cardTitle}
					cardDescription={this.props.cards[5].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>


			</Container>
		)
	}
}

export default NoCoke_Cards;