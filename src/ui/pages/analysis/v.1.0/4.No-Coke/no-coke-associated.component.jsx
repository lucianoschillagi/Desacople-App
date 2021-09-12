import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';
import NoCoke_AssociatedItem from './no-coke-associated-item.component';

class NoCoke_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>

					<NoCoke_AssociatedItem 
						title={"No Coke - [Official Video]"}
						subtitle="Dr Alban - No Coke (LIVE 1990) HQ Robin (TP) / Remastered / 2016"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=4uPDfuC3Jck"/>
											
					<NoCoke_AssociatedItem 
						title={"No Coke - [Live TV Show]"}
						subtitle="Dr Alban - No Coke (LIVE 1990) HQ Robin (TP) / Remastered / 2016"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=idNclkmpBJY&feature=youtu.be"/>
						
				</ContainerCentered>
			</Container>
		);
   }
}

export default NoCoke_AssociatedSection;