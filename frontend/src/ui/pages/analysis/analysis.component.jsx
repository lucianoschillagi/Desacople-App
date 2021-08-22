import React from 'react';

import Header from '../../components/header/header.component';
import CoverSection from '../../sections/cover/cover.component';
import ActorsSection from '../../sections/actors/actors.component';
import ListenSection from '../../sections/listen/listen-section.component';
import LyricsSection from '../../sections/lyrics/lyrics.component';
import AssociatedMaterialSection from '../../sections/associated-material/associated-material.component';
import HighlightedSection from '../../sections/highlighted/highlighted.component';
import BlackHoleSection from '../../sections/black-hole/black-hole.component';

import { Container } from './analysis.styles';
import { StyledSpinner } from '../../../utils/spinner';

class AnalysisPage extends React.Component {

   constructor(props) {
		super(props);
		this.state = { 
			// Loading...
			loading: true, // indica que la página se está cargando aún
			
			// Song Timer
			currentTimeSong: 0,  // el tiempo actual de la canción
			timerOn: null,// indica si el timer está prendido o no

			// Cover Section Info
			coverSectionData: {},

			// Actors Section Info
			actorsSectionData: {},

			// Lyrics Section Info
			lyricsSectionData: {},

			// Associated Section Info
			associatedSectionData: {},

			// Highlighted Section Info
			highlightedSectionData: {},

			blackHoleSectionData: {},
			
			// las "cartas" de la canción seleccionada
			cardsData: {},

			// las estrofas de la canción seleccionada
			estrofasArray: [],

			// las "marcas de tiempo" de la canción seleccionada
			timestamps: {}

		}
  
		this.getCurrentTimeSong = this.getCurrentTimeSong.bind(this);
		this.getTimerInfo = this.getTimerInfo.bind(this);
		this.getDataSong = this.getDataSong.bind(this);
   }

	// Task: Ejecutar una vez que el componente se haya montado
	componentDidMount() {

		// Pone la ventana en el tope
		window.scrollTo(0, 0)

		// Mostrar un "activity view" hasta que lleguen los datos
		console.log("Esperando los datos de la canción seleccionada")

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
			<Container>

				<StyledSpinner/>

				<Header/>

				<CoverSection 
					coverSectionData={this.state.coverSectionData}
				/>

				<ActorsSection
					actorsSectionData={this.state.actorsSectionData}
				/> 

				<ListenSection 
					getCurrentTimeSong={this.getCurrentTimeSong}
					getTimerInfo={this.getTimerInfo}
					currentTimeSong={this.state.currentTimeSong}
					timerOn={this.state.timerOn}
					coverSectionData={this.state.coverSectionData}
				/> 

				<LyricsSection 
					currentTimeSong={this.state.currentTimeSong}
					lyricsSectionData={this.state.lyricsSectionData}
				/>

				<HighlightedSection 
					highlightedSectionData={this.state.highlightedSectionData}
				/> 

				<AssociatedMaterialSection 
					associatedSectionData={this.state.associatedSectionData}
				/>

				<BlackHoleSection/>
				
			</Container>
		)
	}
}

export default AnalysisPage;
