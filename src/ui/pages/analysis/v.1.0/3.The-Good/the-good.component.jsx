import React from 'react';
import Header from '../../../../components/header/header.component.jsx';
import TheGood_CoverSection from './the-good-cover.component';
import TheGood_ActorsSection from './the-good-actors.component';
import TheGood_ListenSection from './the-good-listen.component';
import TheGood_LyricsSection from './the-good-lyrics.component';
import TheGood_AssociatedSection from './the-good-associated.component';
import TheGood_HighlightedSection from './the-good-highlighted.component';
import BlackHoleSection from '../../../../sections/black-hole/black-hole.component.jsx';

// Imported Styles
// import { Container } from './analysis.styles';
// import { StyledSpinner } from '../../../utils/spinner';

class TheGoodTheBadAndTheUgly_Page extends React.Component {

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
				<TheGood_CoverSection/>
				<TheGood_ListenSection/>
				<TheGood_ActorsSection/>
				<TheGood_HighlightedSection/>
				<TheGood_AssociatedSection/>
				<BlackHoleSection/>
			</div>
		);
	}
}

export default TheGoodTheBadAndTheUgly_Page;
