import React from 'react';
import TextyAnim from 'rc-texty';
import { Container,
			ContainerCentered,
			SongTitle,
			SongComposer,
			SongInfoContainer,
			SongInfo,
			SongAge
		  } from '../../../../sections/cover/cover.styles.js';
import './cover.styles.css'; // FIXME

class Another_CoverSection extends React.Component {

	constructor(props) {
      super(props);
      this.state = {currentYear: new Date().getFullYear()};
   }

	render() {
		return (
			<Container>

				<ContainerCentered>

					{/* FIXME: change for 'SongQuote'*/}
					<TextyAnim className="song-quote">
						"Are you happy, are you satisfied?
						How long can you stand the heat?"
					</TextyAnim>
					{/* FIXME */}

					<SongTitle>
						Another One Bites the Dust
					</SongTitle>

					<SongComposer>
						John Deacon
					</SongComposer>

					<SongInfoContainer>

						{/* Song Album */}
						<SongInfo>
							Album: The Game
						</SongInfo>

						{/* Song Artist */}
						<SongInfo>
							Artist: Queen
						</SongInfo>

						{/* Song Release Date */}
						<SongInfo>
							Release Date: 1986
						</SongInfo> 

						{/* Song Genre */}
						<SongInfo>
							Genre: Rock
						</SongInfo>

					</SongInfoContainer>
					
					{/* Song Age */}
					<SongAge>
						for {this.state.currentYear - 1986} years!
					</SongAge>
						
				</ContainerCentered>

			</Container>
      );
   }
}

export default Another_CoverSection;
