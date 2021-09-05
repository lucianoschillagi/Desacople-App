import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';

import TheGood_AssociatedItem from './the-good-associated-item.component';

class TheGood_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>

					<TheGood_AssociatedItem 
						title="The Good the Bad and the Ugly • Main Theme"
						subtitle="Soundtrack/theme music from the 1966 Sergio Leone film The Good, the Bad and the Ugly' with Clint Eastwood, Lee Van Cleef & Eli Wallach"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=h1PfrmCGFnk&t=33s"/>
											
					<TheGood_AssociatedItem
						title="Ennio Morricone on Kubrick & The Good, The Bad and The Ugly"
						subtitle="The Good, The Bad and The Ugly is among the best known film scores of all time – but Ennio Morricone gets “annoyed” when people just remember his Westerns"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=hcjnVyaIZXI"/>

					<TheGood_AssociatedItem
						title="Ennio Morricone - The Good, The Bad and The Ugly with Orchestra"
						subtitle="Ennio Morricone: Peace Notes - Live in Venice"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=1AyxDVBX2o0"/>

					<TheGood_AssociatedItem
						title="Ennio Morricone -- BBC2 Documentary"
						subtitle="BBC2 documentary on the legendary film composer Ennio Morricone"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=Tj6MWE4wZx4"/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default TheGood_AssociatedSection;