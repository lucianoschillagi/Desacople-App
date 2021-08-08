import React from 'react';
import { Container, 
			TimerContainer,
			PlaySongName,
			PlaySongControlTimer,
			PlayPauseBtnContainer,
			PlayButton,
			PauseButton,
			PulseContainer,
		 	Pulse,
			PlayIcon,
			PauseIcon,
			TC } from './play-song-control.styles';

import playButtonIcon from '../../../assets/play-button.png';
import pauseButtonIcon from '../../../assets/pause-button.png';

class PlaySongControl extends React.Component {

	render() {

		// Timer formatting
		const { currentTimeSong } = this.props;
		let seconds = ("0" + (Math.floor(currentTimeSong) % 60)).slice(-2);
		let minutes = ("0" + (Math.floor(currentTimeSong / 60) % 60)).slice(-2);
		let centiseconds = ("0" + (Math.floor(currentTimeSong * 100) % 100)).slice(-2);

		return (
			<Container>

				<TimerContainer>

					<TC>
						<PlaySongName>
							Another Ones Bites The Dust
						</PlaySongName>

						<PlaySongControlTimer>
							{minutes}:{seconds}:{centiseconds}
						</PlaySongControlTimer> 
					</TC>


				</TimerContainer>

				<PlayPauseBtnContainer>
				
					<PauseButton id="pause-button">
						<PauseIcon
							src={pauseButtonIcon}
							alt="PAUSE"
						/>
						</PauseButton>

					<PlayButton id="play-button">
						<PlayIcon
							src={playButtonIcon}
							alt="PLAY"
						/>
					</PlayButton>
		
				</PlayPauseBtnContainer>
				
				<PulseContainer>
					<Pulse id="pulse"/>
				</PulseContainer>
				
			</Container>
	    );
    }
}

export default PlaySongControl;

