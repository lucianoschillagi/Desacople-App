import React, { Component } from 'react'
import { Container, 
		 TimerContainer,
		 PlaySongName,
		 PlaySongControlTimer,
		 PlayPauseBtnContainer,
		 PlayButton,
		 PauseButton,
		 Pulse } from './play-song-control.styles'

class PlaySongControl extends Component {

	render() {

		// Timer formatting
		const { currentTimeSong } = this.props;
		let seconds = ("0" + (Math.floor(currentTimeSong) % 60)).slice(-2);
		let minutes = ("0" + (Math.floor(currentTimeSong / 60) % 60)).slice(-2);
		let centiseconds = ("0" + (Math.floor(currentTimeSong * 100) % 100)).slice(-2);

		return (
			<Container>

				<TimerContainer>
					{/*  song title info */}
					<PlaySongName>
						{/* {this.props.coverSectionData.song_title} */}
					</PlaySongName>

					{/* timer */}
					<PlaySongControlTimer>
						{/* {minutes}:{seconds}:{centiseconds} */}
					</PlaySongControlTimer>

				</TimerContainer>


				{/* remote button play-pause youtube video */}
				<PlayPauseBtnContainer>
				
					{/* PAUSE BUTTON */}
					<PauseButton id="pause-button">
						<img
							src={require('../../../assets/pause-button.png')}
							alt="PAUSE"
					  />
					</PauseButton>

					{/* PLAY BUTTON */}
					<PlayButton id="play-button">
						<img
							src={require('../../../assets/play-button.png')}
							alt="PLAY"
					  />
					</PlayButton>
	
				</PlayPauseBtnContainer>

				<Pulse/>
				
			</Container>
		)
   }
}

export default PlaySongControl

