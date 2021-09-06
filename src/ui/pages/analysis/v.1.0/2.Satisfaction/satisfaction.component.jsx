import React from 'react';
import Header from '../../../../components/header/header.component';
import Satisfaction_CoverSection from './satisfaction-cover.component';
import Satisfaction_ActorsSection from './satisfaction-actors.component';
import Satisfaction_ListenSection from './satisfaction-listen.component';
import Satisfaction_LyricsSection from './satisfaction-lyrics.component';
import Satisfaction_AssociatedSection from './satisfaction-associated.component';
import Satisfaction_Highlighted from './satisfaction-highlighted.component';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';
import Satisfaction_PlaySong from './satisfaction-play-song.component';

// Imported Styles
// import { Container } from './analysis.styles';
// import { StyledSpinner } from '../../../utils/spinner';

class Satisfaction_Page extends React.Component {

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
				<Satisfaction_CoverSection/>
				<Satisfaction_ListenSection 
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
					currentTimeSong={this.state.currentTimeSong}
					timerOn={this.state.timerOn}
					coverSectionData={this.state.coverSectionData}
				/> 
				<Satisfaction_ActorsSection/>
				<Satisfaction_LyricsSection/>
				<Satisfaction_Highlighted/>
				<Satisfaction_AssociatedSection/>
				<BlackHoleSection/> 
				<Satisfaction_PlaySong 
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
				/>
			</div>
		);
	}
}

export default Satisfaction_Page;
