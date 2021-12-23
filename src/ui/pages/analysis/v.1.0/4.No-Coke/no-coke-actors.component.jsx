import React from 'react';
import { Container,ContainerCentered } from '../../../../sections/actors/actors.styles.js';
import NoCoke_CardDetail from './no-coke-card-detail.component';
import NoCoke_Cards from './no-coke-cards.component';

class NoCoke_ActorsSection extends React.Component {

	constructor(props) {
		super(props);
		this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this);
		this.state = {
			cardTitle: "Voz",
			cardDescription: "La performance vocal relata la letra en un modo repetitivo y rítmico (toasting)",
			cardPlayedBy: "Dr. Alban"
			};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription, cardPlayedBy) {
		this.setState({ cardTitle, cardDescription, cardPlayedBy })
 }
 
 actorsSectionCards =  [
	{
		cardTitle: "Voz",
		cardDescription: "La performance vocal relata la letra en un modo repetitivo y rítmico (toasting)",
		cardPlayedBy: "Played by Dr.Alban"
	},
	{ 
		cardTitle: "Batería",
		cardDescription: "El groove de batería está principalmente programado en un sequencer y mezcla una base hip hop con una percusión afro con una marcada figura ágil en hi hats para dar sensación de movimiento",
		cardPlayedBy: "Played by Dr.Alban & Deniz Pop"
	},
	{
		cardTitle: "Bajo",
		cardDescription: "Con un sonido ultra diseñado en un sinte(*), la línea repetitiva y profunda de bajo, típica del dub, pasea, con ligeras variaciones, un amplio rango de notas",
		cardPlayedBy: "Played by Dr.Alban & Deniz Pop"
	},
	{
		cardTitle: "Sinte",
		cardDescription: "El sinte marca los acordes en figuras de corcheas el ritmo característico de reggae",
		cardPlayedBy: "Played by Dr.Alban & Deniz Pop"
	}
]

	render() {
		return (
			<Container>
				<ContainerCentered>

					<NoCoke_CardDetail 
						cardTitle = {this.state.cardTitle}
						cardDescription = {this.state.cardDescription}
						cardPlayedBy = {this.state.cardPlayedBy}
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

