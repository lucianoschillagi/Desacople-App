import React, { Component } from 'react';
import PlaySong from '../../../../sections/listen/play-song.component.jsx';
import { Container, ContainerCentered } from '../../../../sections/listen/listen-section.styles.js';

class Satisfaction_ListenSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<PlaySong currentTimeSong={this.props.currentTimeSong}
								 getTimerInfo={this.props.getTimerInfo}
								 getCurrentTimeSong={this.props.getCurrentTimeSong}
								 coverSectionData={this.props.coverSectionData}
					/>
					<h1>hola</h1>
				</ContainerCentered>
			</Container>

		);
   }
}

export default Satisfaction_ListenSection;