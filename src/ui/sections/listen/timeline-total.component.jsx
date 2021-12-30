import React from 'react';
import {
	Container,
	ElementTracksContainer,
	ElementTrack,
	Element_ON,
	Element_ON_text,
	Element_OFF,
	CurrentTimeLine
} from './timeline-total.styles.js';

class TimelineTotal extends React.Component {

	render() {

		var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

		// Sections
		const intro = document.getElementById('Intro');
		const A1 = document.getElementById('A1');
		const B1 = document.getElementById('B1');
		const inter1 = document.getElementById('Inter1');
		const A2 = document.getElementById('A2');
		const B2 = document.getElementById('B2');
		const inter2 = document.getElementById('Inter2');
		const B3 = document.getElementById('B3');
		const A3 = document.getElementById('A3');
		const B4 = document.getElementById('B4');
		const final = document.getElementById('Final');

		// CSS values
		const borderBottomStyleOff = "0.25px solid gray"
		const borderBottomStyleOn = "none"
		const tabLetterOpacity = "1"

		// Timeline animation
		if (this.props.currentTimeSong > 1) {
			const cursor = document.getElementById('TimelineTotal_current_time_line');
			cursor.style.animationPlayState = "running";
		}

		if (this.props.timerOn === false) {
			// El cursor se detiene
			const cursor = document.getElementById('TimelineTotal_current_time_line');
			cursor.style.animationPlayState = "paused";
		}

		// Voice Elements
		const voiceTrack = {
			width: '100%'
		};

		const voiceON = {
			width: '10%',
			backgroundColor: 'green'
		};

		const voiceOFF = {
			width: '20%',
			backgroundColor: 'none'
		};

		// Guitar Elements
		const guitarTrack = {
			width: '100%'
		};

		const guitarON = {
			width: '32%',
			backgroundColor: 'purple'
		};

		const guitarOFF = {
			width: '10%',
			backgroundColor: 'none'
		};

		// Bass Elements
		const bassTrack = {
			width: '100%'
		};

		const bassON = {
			width: '72%',
			backgroundColor: 'red'
		};

		const bassOFF = {
			width: '12%',
			backgroundColor: 'none'
		};

		// Chorus Elements
		const chorusTrack = {
			width: '100%'
		};

		const chorusON = {
			width: '22%',
			backgroundColor: 'blue'
		};

		const chorusOFF = {
			width: '18%',
			backgroundColor: 'none'
		};

		// Drums Elements
		const drumsTrack = {
			width: '100%'
		};

		const drumsON = {
			width: '32%',
			backgroundColor: 'gray'
		};

		const drumsOFF = {
			width: '32%',
			backgroundColor: 'none'
		};

		return (

			<Container>


				<CurrentTimeLine id="TimelineTotal_current_time_line" />

				<ElementTracksContainer>

					{/* VOICE */}
					<ElementTrack id="A1" style={voiceTrack}>

						<Element_ON style={voiceON}>
							<Element_ON_text>
								voice
							</Element_ON_text>
						</Element_ON>

						<Element_OFF style={voiceOFF} />

						<Element_ON style={voiceON}>
							<Element_ON_text>
								voice
							</Element_ON_text>
						</Element_ON>

						<Element_OFF style={voiceOFF} />

						<Element_ON style={voiceON}>
							<Element_ON_text>
								voice
							</Element_ON_text>
						</Element_ON>

					</ElementTrack>

					{/* GUITAR */}
					<ElementTrack id="A1" style={guitarTrack}>

						<Element_ON style={guitarON}>
							<Element_ON_text>
								guitar
							</Element_ON_text>
						</Element_ON>

						<Element_OFF style={guitarOFF} />


						<Element_ON style={guitarON}>
							<Element_ON_text>
								guitar
							</Element_ON_text>
						</Element_ON>

					</ElementTrack>

					{/* BASS */}
					<ElementTrack id="B1" style={bassTrack}>

						<Element_OFF style={bassOFF} />
						<Element_OFF style={bassOFF} />

						<Element_ON style={bassON}>
							<Element_ON_text>
								bass
							</Element_ON_text>
						</Element_ON>

					</ElementTrack>

					{/* CHORUS */}
					<ElementTrack id="Inter1" style={chorusTrack}>

						<Element_OFF style={chorusOFF} />

						<Element_ON style={chorusON}>
							<Element_ON_text>
								chorus
							</Element_ON_text>
						</Element_ON>

						<Element_OFF style={chorusOFF} />

						<Element_ON style={chorusON}>
							<Element_ON_text>
								chorus
							</Element_ON_text>
						</Element_ON>

					</ElementTrack>

					{/* DRUMS */}
					<ElementTrack id="A2" style={drumsTrack}>

						<Element_ON style={drumsON}>
							<Element_ON_text>
								drums
							</Element_ON_text>
						</Element_ON>


						<Element_OFF style={drumsOFF} />


						<Element_ON style={drumsON}>
							<Element_ON_text>
								drums
							</Element_ON_text>
						</Element_ON>


					</ElementTrack>

				</ElementTracksContainer>



			</Container>



		);
	}
}

export default TimelineTotal;