import React, { Component } from 'react';
import { Container } from '../../../../sections/actors/actors.styles.js';
import Another_CardDetail from './another-one-bites-the-dust-card-detail.component';
import Another_Cards from './another-one-bites-the-dust-cards.component';

class Another_ActorsSection extends Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Card One",
			cardDescription: "fasdfhjaksd fkjlsdaf klads"

		};
	  }	

  getSelectedCardInfo(cardTitle, cardDescription) {
	this.setState({cardTitle: cardTitle, cardDescription: cardDescription})
 }

	actorsSectionCards =  [
		{ 
		  cardTitle: "Card One",
		  cardDescription: "fasdfhjaksd fkjlsdaf klads"
		},
		{
		  cardTitle: "Card Two",
		  cardDescription: "fasdfhjaksd fkjlsdaf klads"
		},
		{
		  cardTitle: "Card Thrre",
		  cardDescription: "fasdfhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Card Four",
			cardDescription: "fasdfhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Card Five",
			cardDescription: "fasdfhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Card Six",
			cardDescription: "fasdfhjaksd fkjlsdaf klads"
		}
	]

	render() {
		return (
			<Container>
				<Another_CardDetail 
					cardTitle = {this.state.cardTitle}
					cardDescription = {this.state.cardDescription}
				/>
				<Another_Cards 
					cards={this.actorsSectionCards}
					getSelectedCardInfo={this.getSelectedCardInfo}
				/>
			</Container>
		);
   }
}

export default Another_ActorsSection;