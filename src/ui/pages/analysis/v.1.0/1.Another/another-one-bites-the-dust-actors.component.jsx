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
		   cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
		},
		{
		   cardTitle: "Guitar",
		   cardDescription: "hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads"
		},
		{
		   cardTitle: "Drums",
		   cardDescription: "243234fhjaksd fkjlsdaf klads 243234fhjaksd fkjlsdaf klads 243234fhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Xilofon",
			cardDescription: "f654654jaksd fkjlsdaf klads f654654jaksd fkjlsdaf klads f654654jaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Bass",
			cardDescription: "fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Voice",
			cardDescription: "klads fasdfhjaksd fkjlsdaf kladsq"
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

