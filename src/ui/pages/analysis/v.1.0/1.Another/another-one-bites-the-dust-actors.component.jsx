import React from 'react';
import { Container } from '../../../../sections/actors/actors.styles.js';
import Another_CardDetail from './another-one-bites-the-dust-card-detail.component';
import Another_Cards from './another-one-bites-the-dust-cards.component';

class Another_ActorsSection extends React.Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Guitar",
			cardDescription: "fasdfhjaksd fkjlsdaf klads"
		};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription) {
		this.setState({ cardTitle, cardDescription })
 }

	actorsSectionCards =  [
		{ 
		  cardTitle: "Piano",
		  cardDescription: "dfsadfdfhjaksd fkjlsdaf klads"
		},
		{
		  cardTitle: "Guitar",
		  cardDescription: "hfhkdsfhjaksd fkjlsdaf klads"
		},
		{
		  cardTitle: "Drums",
		  cardDescription: "243234fhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Xilofon",
			cardDescription: "f654654jaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Bass",
			cardDescription: "fasIIIIIIjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Voice",
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

