import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';

import Another_AssociatedItem from './another-one-bites-the-dust-associated-item.component';

class Another_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<Another_AssociatedItem 
						title="AOBD - Official Video"
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com"/>
											
					<Another_AssociatedItem
						title="Freddie Mercury - Interview"
						subtitle="Freddie Mercury interview in 1987 with David Wigg in Ibiza"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=NVIbCvfkO3E"/>

					<Another_AssociatedItem
						title="AOBD - Live"
						subtitle="Subtitulo 3"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<Another_AssociatedItem
						title="AOBD - Film Clip"
						subtitle="Subtitulo"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default Another_AssociatedSection;