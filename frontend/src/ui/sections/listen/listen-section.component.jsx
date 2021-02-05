import React, { Component } from 'react'
import PlaySong from './play-song.component'
import { Container, ContainerCentered } from './listen-section.styles'

class ListenSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<PlaySong currentTimeSong={this.props.currentTimeSong}
								 getTimerInfo={this.props.getTimerInfo}
								 getCurrentTimeSong={this.props.getCurrentTimeSong}
								 coverSectionData={this.props.coverSectionData}
					/>
				</ContainerCentered>
			</Container>

		)
   }
}

export default ListenSection




