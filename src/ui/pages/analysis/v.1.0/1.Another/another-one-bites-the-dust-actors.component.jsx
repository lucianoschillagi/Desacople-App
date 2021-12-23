import React from 'react';
import { Container,ContainerCentered } from '../../../../sections/actors/actors.styles.js';
import Another_CardDetail from './another-one-bites-the-dust-card-detail.component';
import Another_Cards from './another-one-bites-the-dust-cards.component';

class Another_ActorsSection extends React.Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Voz",
			cardDescription: "Acá va la descripción sobre la voz de Freddy",
			cardPlayedBy: "Freddy Mercury"
		};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription, cardPlayedBy) {
		this.setState({ cardTitle, cardDescription, cardPlayedBy })
 }
 
	actorsSectionCards =  [
		{ 
  		   cardTitle: "Voz",
		   cardDescription: "Acá va la descripción sobre la voz de Freddy",
			cardPlayedBy: "Freddy Mercury"
		},
		{
		   cardTitle: "Guitarra eléctrica",
			cardDescription: "Acá va la descripción sobre la guitarra de Brian",
			cardPlayedBy: "Brian May"	
		},
		{
		   cardTitle: "Batería",
			cardDescription: "Acá va la descripción sobre la batería de Ryan",
			cardPlayedBy: "Roger Taylor"
		},
		{
			cardTitle: "Bajo",
			cardDescription: "Acá va la descripción sobre el emblemático bajo de Jhon Deacon",
			cardPlayedBy: "John Deacon"
		},
		{
			cardTitle: "Coros",
			cardDescription: "Lorem ipsum dolor sit amet",
			cardPlayedBy: "Brian May"	
		},
		{
			cardTitle: "Guitarra eléctrica (efectos)",
			cardDescription: "Acá va la descripción sobre la gtr eléctrica de Brian usada como efecto sonoro",
			cardPlayedBy: "Brian May"
		}
	]

	render() {
		return (
			<Container>
				<ContainerCentered>

					<Another_CardDetail 
						cardTitle = {this.state.cardTitle}
						cardDescription = {this.state.cardDescription}
						cardPlayedBy = {this.state.cardPlayedBy}
					/>
					<Another_Cards 
						cards={this.actorsSectionCards}
						getSelectedCardInfo={this.getSelectedCardInfo}
					/>
					
				</ContainerCentered>

			</Container>
		);
   }
}

export default Another_ActorsSection;

