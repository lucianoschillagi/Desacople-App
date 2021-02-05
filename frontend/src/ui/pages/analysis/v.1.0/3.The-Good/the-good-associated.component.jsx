import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';

import TheGood_AssociatedItem from './the-good-associated-item.component';

class TheGood_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<TheGood_AssociatedItem 
						title="AOBD - Official Video"
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com"/>
											
					<TheGood_AssociatedItem
						title="Freddie Mercury - Interview"
						subtitle="Freddie Mercury interview in 1987 with David Wigg in Ibiza"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=NVIbCvfkO3E"/>

					<TheGood_AssociatedItem
						title="AOBD - Live"
						subtitle="Subtitulo 3"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<TheGood_AssociatedItem
						title="AOBD - Film Clip"
						subtitle="Subtitulo"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<TheGood_AssociatedItem 
						title="Link three" 
						description="fhsalhfdjks" 
						source="source desc goes here"
						externalPage="https://www.fightpandemics.com"/>
				</ContainerCentered>
			</Container>
		);
   }
}

export default TheGood_AssociatedSection;