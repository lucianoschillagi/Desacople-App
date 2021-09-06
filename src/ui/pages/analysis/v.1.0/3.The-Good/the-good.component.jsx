import React from 'react';
import Header from '../../../../components/header/header.component.jsx';
import TheGood_CoverSection from './the-good-cover.component';
import TheGood_ActorsSection from './the-good-actors.component';
import TheGood_ListenSection from './the-good-listen.component';
import TheGood_PlaySong from './the-good-play-song.component';
import TheGood_AssociatedSection from './the-good-associated.component';
import TheGood_HighlightedSection from './the-good-highlighted.component';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';

// Imported Styles
// import { Container } from './analysis.styles';
// import { StyledSpinner } from '../../../utils/spinner';

class TheGoodTheBadAndTheUgly_Page extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
							pageLoading: false,
							currentTimeSong: 0, // esta info en principio a 0
							timerOn: null // esta info en principio a null
						 }
  
		this.getCurrentTimeSong = this.getCurrentTimeSong.bind(this);
		this.getTimerInfo = this.getTimerInfo.bind(this);
		// this.getDataSong = this.getDataSong.bind(this);
   }

	componentDidMount() {
		window.scrollTo(0, 0); 
	}

	// Task: Obtener el tiempo actual de la canción
  	// (dato generado en el componente PlaySong) ⏱
 	getCurrentTimeSong(time) {
		this.setState({ currentTimeSong: time })
	}

	// Task: Determinar si el timer está encendido
	// obtener esa información
	// (dato generado en el componente PlaySong)
	getTimerInfo(timerState) {
		this.setState({ timerOn: timerState })
	}

	render() {
		return (
			<div>
				<Header/>
				<TheGood_CoverSection/>
				<TheGood_ListenSection/>
				<TheGood_ActorsSection/>
				<TheGood_HighlightedSection/>
				<TheGood_AssociatedSection/>
				<BlackHoleSection/>
				<TheGood_PlaySong 
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
				/>
			</div>
		);
	}
}

export default TheGoodTheBadAndTheUgly_Page;
