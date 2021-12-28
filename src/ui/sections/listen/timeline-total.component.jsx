import React from 'react';
import { Container, Section, CurrentTimeLine } from './timeline-total.styles.js';

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

		// Styles
		const introSectionStyle = {
			width: '10%'
			// backgroundColor: 'green',
		};

		const aSectionStyle = {
			width: '10%'
			// backgroundColor: 'cyan',
		};

		const bOneSectionStyle = {
			width: '5%'
			// backgroundColor: 'violet',
		};

		const interOneSectionStyle = {
			width: '10%'
			// backgroundColor: 'orange',
		};

		const aTwoSectionStyle = {
			width: '5%'
			// backgroundColor: 'brown',
		};

		const bTwoSectionStyle = {
			width: '10%'
			// backgroundColor: 'blue',
		};

		const interTwoSectionStyle = {
			width: '5%'
			// backgroundColor: 'gray',
		};

		const bThreeSectionStyle = {
			width: '10%'
			// backgroundColor: 'purple',
		};

		const aThreeSectionStyle = {
			width: '5%'
			// backgroundColor: 'orange',
		};

		const bFourSectionStyle = {
			width: '10%'
			// backgroundColor: 'red',
		};

		const finalSectionStyle = {
			width: '20%'
			// backgroundColor: 'orange',
		};

		return (

				<Container>


					<CurrentTimeLine id="TimelineTotal_current_time_line" />

					<Section id="Intro" style={introSectionStyle} />

					{/* A1 */}
					<Section id="A1" style={aSectionStyle} />

					{/* B1 */}
					<Section id="B1" style={bOneSectionStyle} />

					{/* Inter1 */}
					<Section id="Inter1" style={interOneSectionStyle} />

					{/* A2 */}
					<Section id="A2" style={aTwoSectionStyle} />

					{/* B2 */}
					<Section id="B2" style={bTwoSectionStyle} />

					{/* Inter 2 */}
					<Section id="Inter2" style={interTwoSectionStyle} />

					{/* B3 */}
					<Section id="B3" style={bThreeSectionStyle} />

					{/* A3 */}
					<Section id="A3" style={aThreeSectionStyle} />

					{/* B4 */}
					<Section id="B4" style={bFourSectionStyle} />

					{/* Final */}
					<Section id="Final" style={finalSectionStyle} />




					

				</Container>

				

		);
	}
}

export default TimelineTotal;