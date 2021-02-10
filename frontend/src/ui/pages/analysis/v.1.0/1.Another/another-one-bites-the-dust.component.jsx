// Imported Modules
import React, { Component } from 'react';
import Another_CoverSection from './another-one-bites-the-dust-cover.component.jsx';
import Another_ActorsSection from './another-one-bites-the-dust-actors.component.jsx';
import Another_ListenSection from './another-one-bites-the-dust-listen.component.jsx';
import Another_LyricsSection from './another-one-bites-the-dust-lyrics.component.jsx';
import Another_AssociatedSection from './another-one-bites-the-dust-associated.component.jsx';
import Another_HighlightedSection from './another-one-bites-the-dust-highlighted.component.jsx';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';
import Header from '../../../../components/header/header.component.jsx';

import { Container,
	ContainerCentered,
	QuoteSong,
	SongTitle,
	Composers,
	SongInfoContainer,
	SongInfo,
	FromYears
} from '../../../../sections/cover/cover.styles.js';

// Imported Styles
// import { Container } from './analysis.styles';
// import { StyledSpinner } from '../../../utils/spinner';

class AnotherOneBitesTheDust_Page extends Component {

   // constructor(props) {
	// 	super(props);
	// 	this.state = { 
	// 						// Loading...
	// 						loading: true, // indica que la página se está cargando aún
							
	// 						// Song Timer
	// 						currentTimeSong: 0,  // el tiempo actual de la canción
	// 						timerOn: null,// indica si el timer está prendido o no

	// 						// Cover Section Info
	// 						coverSectionData: {},

	// 						// Actors Section Info
	// 						actorsSectionData: {},

	// 						// Lyrics Section Info
	// 						lyricsSectionData: {},

	// 						// Associated Section Info
	// 						associatedSectionData: {},

	// 						// Highlighted Section Info
	// 						highlightedSectionData: {},

	// 						blackHoleSectionData: {},
							
	// 						// las "cartas" de la canción seleccionada
	// 						cardsData: {},

	// 						// las estrofas de la canción seleccionada
	// 						estrofasArray: [],

	// 						// las "marcas de tiempo" de la canción seleccionada
	// 						timestamps: {}

	// 				}
  
	// 	this.getCurrentTimeSong = this.getCurrentTimeSong.bind(this);
	// 	this.getTimerInfo = this.getTimerInfo.bind(this);
	// 	this.getDataSong = this.getDataSong.bind(this);
   // }

	// Task: Ejecutar una vez que el componente se haya montado
	componentDidMount() {

		window.scrollTo(0, 0); // Pone la ventana en el tope
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
				<Another_ActorsSection/>
				{/* <Another_ListenSection/> */}
				<Another_LyricsSection/>
				<Another_AssociatedSection/>
				<Another_HighlightedSection/> 
				<BlackHoleSection/>
			</div>
    );
  }
}

export default AnotherOneBitesTheDust_Page;

