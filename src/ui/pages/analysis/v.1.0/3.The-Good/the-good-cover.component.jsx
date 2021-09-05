import React from 'react';

import { Container,
			ContainerCentered,
			SongQuote,
			SongTitle,
			SongComposer,
			SongInfoContainer,
			SongInfo,
			SongAge
} from '../../../../sections/cover/cover.styles.js';

class TheGood_CoverSection extends React.Component {

	constructor(props) {
      super(props);
      this.state = {currentYear: new Date().getFullYear()};
   }

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

					<SongQuote/>

					<SongTitle>
						The Good, The Bad and The Ugly
					</SongTitle>

					<SongComposer>
                  Ennio Morricone
					</SongComposer>

					<SongInfoContainer>
						<SongInfo>
							Album: The Good, The Bad and The Ugly
						</SongInfo>

						<SongInfo>
							Artist: Ennio Morricone
						</SongInfo>

						<SongInfo>
                     Release Date: 23 December 1966
						</SongInfo> 

						<SongInfo>
							Genre: Soundtrack
						</SongInfo>

					</SongInfoContainer>

					{/* Song Age */}
					<SongAge>
						for {this.state.currentYear - 1966} years!
					</SongAge>

						
				</ContainerCentered>
			</Container>
    );
  }
}

export default TheGood_CoverSection;