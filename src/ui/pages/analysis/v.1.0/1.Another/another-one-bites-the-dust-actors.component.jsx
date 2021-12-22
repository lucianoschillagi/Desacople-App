import React from 'react';
import { Container,ContainerCentered } from '../../../../sections/actors/actors.styles.js';
import Another_CardDetail from './another-one-bites-the-dust-card-detail.component';
import Another_Cards from './another-one-bites-the-dust-cards.component';

class Another_ActorsSection extends React.Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Guitar",
			cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend."
		};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription) {
		this.setState({ cardTitle, cardDescription })
 }
 
	actorsSectionCards =  [
		{ 
  		   cardTitle: "Voz",
		   cardDescription: "Acá va la descripción sobre la voz de Freddy"
		},
		{
		   cardTitle: "Guitarra eléctrica",
			cardDescription: "Acá va la descripción sobre la guitarra de Brian"	
		},
		{
		   cardTitle: "Batería",
			cardDescription: "Acá va la descripción sobre la batería de Ryan"
		},
		{
			cardTitle: "Bajo",
			cardDescription: "Acá va la descripción sobre el emblemático bajo de Jhon Deacon"
		},
		{
			cardTitle: "Coros",
			cardDescription: "Lorem ipsum dolor sit amet"	
		},
		{
			cardTitle: "Guitarra eléctrica (efectos)",
			cardDescription: "Acá va la descripción sobre la gtr eléctrica de Brian usada como efecto sonoro"
		}
	]

	render() {
		return (
			<Container>
				<ContainerCentered>

					<Another_CardDetail 
						cardTitle = {this.state.cardTitle}
						cardDescription = {this.state.cardDescription}
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

