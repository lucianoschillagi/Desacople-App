import React, { Component } from 'react';

import { Container,
	ContainerCentered,
	QuoteSong,
	SongTitle,
	Composers,
	SongInfoContainer,
	SongInfo,
	FromYears
} from '../../../../sections/cover/cover.styles.js'

class Satisfaction_CoverSection extends Component {

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
			<Container>
				<ContainerCentered>

					<QuoteSong>
						"I can't get me no satisfaction, And I try and I try and I try, t-t-t-t-try, try I can't get no"
					</QuoteSong>

					<SongTitle>
						Satistaction
					</SongTitle>

					<Composers>
                  Jagger - Richards
					</Composers>

					<SongInfoContainer>
						<SongInfo>
							Album: Q: Are We Not Men? A: We Are Devo!
						</SongInfo>

						<SongInfo>
							Artist: Devo
						</SongInfo>

						<SongInfo>
                     September 1977
						</SongInfo> 

						<SongInfo>
							Genre: No Wave - Punk Rock
						</SongInfo>

					</SongInfoContainer>

					<FromYears>
						<em className="z">- for 41 years!</em>
					</FromYears>
						
				</ContainerCentered>
			</Container>
    );
  }
}

export default Satisfaction_CoverSection;