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

class Another_CoverSection extends Component {

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
						"Are you happy, are you satisfied? How long can you stand the heat?"
					</QuoteSong>

					<SongTitle>
						Another One Bites the Dust
					</SongTitle>

					<Composers>
						John Deacon
					</Composers>

					<SongInfoContainer>
						<SongInfo>
								Album: The Game
						</SongInfo>

						<SongInfo>
								Artist: Queen
						</SongInfo>

						<SongInfo>
								Release Date: 1986
						</SongInfo> 

						<SongInfo>
								Genre: Rock
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

export default Another_CoverSection;