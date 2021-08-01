import React, { Component } from 'react';
// import { Container } from './cards.styles'
import Another_Card from './another-one-bites-the-dust-card.component';
import { Container } from '../../../../sections/actors/cards.styles.js';

class Another_Cards extends Component {

	render() {
		return (
			<Container>
				
				<Another_Card 
					cardTitle={this.props.cards[0].cardTitle}
					cardDescription={this.props.cards[0].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[1].cardTitle}
					cardDescription={this.props.cards[1].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[2].cardTitle}
					cardDescription={this.props.cards[2].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[3].cardTitle}
					cardDescription={this.props.cards[3].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[4].cardTitle}
					cardDescription={this.props.cards[4].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>

				<Another_Card 
					cardTitle={this.props.cards[5].cardTitle}
					cardDescription={this.props.cards[5].cardDescription}
					getSelectedCardInfo={this.props.getSelectedCardInfo}
				/>


			</Container>
		)
	}
}

export default Another_Cards;