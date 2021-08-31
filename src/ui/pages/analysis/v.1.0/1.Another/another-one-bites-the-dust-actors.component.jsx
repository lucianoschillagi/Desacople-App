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
			cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend."
		};
	  }	

  	getSelectedCardInfo(cardTitle, cardDescription) {
		this.setState({ cardTitle, cardDescription })
 }
	actorsSectionCards =  [
		{ 
		   cardTitle: "Piano",
		   cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
		},
		{
		   cardTitle: "Guitar",
		   cardDescription: "hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads hfhkdsfhjaksd fkjlsdaf klads"
		},
		{
		   cardTitle: "Drums",
		   cardDescription: "243234fhjaksd fkjlsdaf klads 243234fhjaksd fkjlsdaf klads 243234fhjaksd fkjlsdaf klads  fkjlsdaf klads 243234fhjaksd fkjlsdaf klads  fkjlsdaf klads 243234fhjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Xilofon",
			cardDescription: "f654654jaksd fkjlsdaf klads f654654jaksd fkjlsdaf klads f654654jaksd fkjlsdaf klads klads f654654jaksd fkjlsdaf klads klads f654654jaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Bass",
			cardDescription: "fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads fasIIIIIIjaksd fkjlsdaf klads"
		},
		{
			cardTitle: "Voice",
			cardDescription: "klads fasdfhjaksd fkjlsdaf kladsq  shalf saljkdf lksad fdsalhfdk lajs dfsfhsdal sdf sadfih asdfp9y asdfñnj.asdf9 fsad,nk asdf kjsda zxvhcl vczhxljkhvcxz ñcv hv xczklvxzc"
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

