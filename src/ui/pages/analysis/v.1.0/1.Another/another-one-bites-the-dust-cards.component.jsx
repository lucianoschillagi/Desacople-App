import React, { Component } from 'react';
import Another_Card from './another-one-bites-the-dust-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class Another_Cards extends Component {

	render() {
		return (
			<Container>
				
				<Another_Card 
					cardTitle={this.props.cards[0].cardTitle}
					cardDescription={this.props.cards[0].cardDescription}
					cardPlayedBy={this.props.cards[0].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[1].cardTitle}
					cardDescription={this.props.cards[1].cardDescription}
					cardPlayedBy={this.props.cards[1].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[2].cardTitle}
					cardDescription={this.props.cards[2].cardDescription}
					cardPlayedBy={this.props.cards[2].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[3].cardTitle}
					cardDescription={this.props.cards[3].cardDescription}
					cardPlayedBy={this.props.cards[3].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[4].cardTitle}
					cardDescription={this.props.cards[4].cardDescription}
					cardPlayedBy={this.props.cards[4].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[5].cardTitle}
					cardDescription={this.props.cards[5].cardDescription}
					cardPlayedBy={this.props.cards[5].cardPlayedBy}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

			</Container>
		)
	}
}

export default Another_Cards;