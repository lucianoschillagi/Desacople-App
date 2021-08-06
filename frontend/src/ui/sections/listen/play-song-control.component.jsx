import React, { Component } from 'react';
import { Container, 
			TimerContainer,
			PlaySongName,
			PlaySongControlTimer,
			PlayPauseBtnContainer,
			PlayButton,
			PauseButton,
		 	Pulse } from './play-song-control.styles';

import playButtonIcon from '../../../assets/play-button.png';
import pauseButtonIcon from '../../../assets/pause-button.png';

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

					<PlaySongName>
						Another Ones Bites The Dust
					</PlaySongName>

					<PlaySongControlTimer>
						{minutes}:{seconds}:{centiseconds}
					</PlaySongControlTimer>

				</TimerContainer>

				<PlayPauseBtnContainer>
				
					<PauseButton id="pause-button">
						<img
							src={pauseButtonIcon}
							width={25}
							heigth={17}
							alt="PAUSE"
						/>
					</PauseButton>

					<PlayButton id="play-button">
						<img
							src={playButtonIcon}
							width={25}
							heigth={17}
							alt="PLAY"
						/>
					</PlayButton>
		
				</PlayPauseBtnContainer>

				<Pulse id="pulse"/>

			</Container>
	    );
    }
}

export default PlaySongControl;

