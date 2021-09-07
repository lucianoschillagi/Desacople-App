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

class NoCoke_CoverSection extends React.Component {

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
						"Mi have one friend, them a call him Denniz Pop
Him have a little son, them a call him Daniel"
					</TextyAnim>
					{/* FIXME */}

					<SongTitle>
						No Coke
					</SongTitle>

					<SongComposer>
						Dr. Alban
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

export default NoCoke_CoverSection;
					