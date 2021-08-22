import React, { Component } from 'react'
import { Container, ContainerCentered } from './associated-material.styles.js'
import AssociatedMaterialItem from './associated-material-item.component';

class AssociatedMaterialSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<AssociatedMaterialItem
						title="AOBD - Official Video"
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<AssociatedMaterialItem
						title="Freddie Mercury - Interview"
						subtitle="Freddie Mercury interview in 1987 with David Wigg in Ibiza"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=NVIbCvfkO3E"/>

					<AssociatedMaterialItem
						title="AOBD - Live"
						subtitle="Subtitulo 3"
						source="YouTube"
						externalPage="https://www.youtube.com"/>

					<AssociatedMaterialItem
						title="AOBD - Film Clip"
						subtitle="Subtitulo"
						source="YouTube"
						externalPage="https://www.youtube.com"/>
				</ContainerCentered>
			</Container>
		)
  	}
}

export default AssociatedMaterialSection



                