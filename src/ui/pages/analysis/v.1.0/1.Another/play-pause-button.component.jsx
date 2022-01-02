import React from 'react';
import { ReactComponent as PlayButton } from './play-button.svg';
import { ReactComponent as PauseButton } from './pause-button.svg';

// ref: https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
class PlayPauseButton extends React.Component {
	state = {
		play: false
	}
	// audio = new Audio(this.props.url)
	// http://streaming.tdiradio.com:8000/house.mp3
	audio = new Audio('http://streaming.tdiradio.com:8000/house.mp3');

	componentDidMount() {
		this.audio.addEventListener('ended', () => this.setState({ play: false }));
	}

	componentWillUnmount() {
		this.audio.removeEventListener('ended', () => this.setState({ play: false }));
	}

	togglePlay = () => {
		this.setState({ play: !this.state.play }, () => {
			this.state.play ? this.audio.play() : this.audio.pause();
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.togglePlay}>{this.state.play ? 
					<PauseButton width={20} height={30} /> : 
					<PlayButton width={20} height={30} />}
				</button>
			</div>
		);
	}
}

export default PlayPauseButton;