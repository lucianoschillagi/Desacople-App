import React from 'react';
import Header from '../../../../components/header/header.component.jsx';
import NoCoke_CoverSection from './no-coke-cover.component.jsx';
import NoCoke_ActorsSection from './no-coke-actors.component.jsx';
import NoCoke_ListenSection from './no-coke-listen.component.jsx';
import NoCoke_LyricsSection from './no-coke-lyrics.component.jsx';
import NoCoke_AssociatedSection from './no-coke-associated.component.jsx';
import NoCoke_HighlightedSection from './no-coke-highlighted.component.jsx';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';
import NoCoke_PlaySong from './no-coke-play-song.component';

class NoCoke_Page extends React.Component {

   constructor(props) {
		super(props);
		this.state = { 
							pageLoading: false,
							currentTimeSong: 0, // esta info en principio a 0
							timerOn: null // esta info en principio a null
						 }
  
		this.getCurrentTimeSong = this.getCurrentTimeSong.bind(this);
		this.getTimerInfo = this.getTimerInfo.bind(this);
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
				<NoCoke_CoverSection/>
				<NoCoke_ListenSection 
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
					currentTimeSong={this.state.currentTimeSong}
					timerOn={this.state.timerOn}
					coverSectionData={this.state.coverSectionData}
				/> 
				<NoCoke_ActorsSection/>
				<NoCoke_LyricsSection 
					currentTimeSong={this.state.currentTimeSong}
				/>
				<NoCoke_HighlightedSection/> 
				<NoCoke_AssociatedSection/>
				<BlackHoleSection
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
				/>
				<NoCoke_PlaySong 
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
				/>

			</div>
      );
   }
}

export default NoCoke_Page;

