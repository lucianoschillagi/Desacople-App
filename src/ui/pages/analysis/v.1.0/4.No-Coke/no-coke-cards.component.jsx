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
					cardPlayedBy={this.props.cards[0].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[1].cardTitle}
					cardDescription={this.props.cards[1].cardDescription}
					cardPlayedBy={this.props.cards[1].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[2].cardTitle}
					cardDescription={this.props.cards[2].cardDescription}
					cardPlayedBy={this.props.cards[2].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<NoCoke_Card 
					cardTitle={this.props.cards[3].cardTitle}
					cardDescription={this.props.cards[3].cardDescription}
					cardPlayedBy={this.props.cards[3].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

			</Container>
		)
	}
}

export default NoCoke_Cards;