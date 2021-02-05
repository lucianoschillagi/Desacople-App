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

class TheGood_CoverSection extends Component {

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

					<QuoteSong/>

					<SongTitle>
						The Good, The Bad and The Ugly
					</SongTitle>

					<Composers>
                  Ennio Morricone
					</Composers>

					<SongInfoContainer>
						<SongInfo>
							Album: Q: The Good, The Bad and The Ugly
						</SongInfo>

						<SongInfo>
							Artist: Ennio Morricone
						</SongInfo>

						<SongInfo>
                     September 1966
						</SongInfo> 

						<SongInfo>
							Genre: Soundtrack
						</SongInfo>

					</SongInfoContainer>

					<FromYears>
						<em className="z">- for XX years!</em>
					</FromYears>
						
				</ContainerCentered>
			</Container>
    );
  }
}

export default TheGood_CoverSection;