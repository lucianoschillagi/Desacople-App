import React from 'react';
import Header from '../../../../components/header/header.component.jsx';
import Another_CoverSection from './another-one-bites-the-dust-cover.component.jsx';
import Another_ActorsSection from './another-one-bites-the-dust-actors.component.jsx';
import Another_ListenSection from './another-one-bites-the-dust-listen.component.jsx';
import Another_LyricsSection from './another-one-bites-the-dust-lyrics.component.jsx';
import Another_AssociatedSection from './another-one-bites-the-dust-associated.component.jsx';
import Another_HighlightedSection from './another-one-bites-the-dust-highlighted.component.jsx';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';
import Another_PlaySong from './another-one-bites-the-dust-play-song.component';

import { DatePicker } from 'antd';

class AnotherOneBitesTheDust_Page extends React.Component {

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
				<Another_CoverSection/>
				<Another_ListenSection 
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
					currentTimeSong={this.state.currentTimeSong}
					timerOn={this.state.timerOn}
					coverSectionData={this.state.coverSectionData}
				/> 
				<Another_ActorsSection/>
				<Another_LyricsSection 
					currentTimeSong={this.state.currentTimeSong}
				/>
				<Another_HighlightedSection/> 
				<Another_AssociatedSection/>
				<BlackHoleSection
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
				/>
				<Another_PlaySong 
					timerOn={this.state.timerOn}
					currentTimeSong={this.state.currentTimeSong}
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
				/>

				
			</div>
      );
   }
}

export default AnotherOneBitesTheDust_Page;

