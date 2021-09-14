import React from 'react';
import { Container,ContainerCentered } from '../../../../sections/actors/actors.styles.js';
import NoCoke_CardDetail from './no-coke-card-detail.component';
import NoCoke_Cards from './no-coke-cards.component';

class NoCoke_ActorsSection extends React.Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Lead Voice",
			cardDescription: "lead voice description goes here. fhlsa fask hflaksdh flasd asdf fadlh fdsalh asdf adfslhfd klhfdsaklj flkasdh afsdlhdfs ak"
			};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription) {
		this.setState({ cardTitle, cardDescription })
 }
 
	actorsSectionCards =  [
		{ 
		   cardTitle: "Drums",
			cardDescription: "drums description goes here."
		},
		{
		   cardTitle: "Bass",
			cardDescription: "bass description goes here."
		},
		{
		   cardTitle: "Sinthe",
			cardDescription: "sinthe description goes here."
		},
		{
		   cardTitle: "Electric Guitar",
			cardDescription: "electric guitar description goes here."		
		}
	]

	render() {
		return (
			<Container>
				<ContainerCentered>

					<NoCoke_CardDetail 
						cardTitle = {this.state.cardTitle}
						cardDescription = {this.state.cardDescription}
					/>
					<NoCoke_Cards 
						cards={this.actorsSectionCards}
						getSelectedCardInfo={this.getSelectedCardInfo}
					/>
				</ContainerCentered>

			</Container>
		);
   }
}

export default NoCoke_ActorsSection;

