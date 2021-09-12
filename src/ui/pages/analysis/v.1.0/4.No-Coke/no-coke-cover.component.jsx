import React from 'react';
import TextyAnim from 'rc-texty';
import { Container,
			ContainerCentered,
			SongTitle,
			SongWrittenBy,
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
						"Hip-hop reaggae inna dance hall style"
					</TextyAnim>
					{/* FIXME */}

					<SongTitle>
						No Coke
					</SongTitle>

					<SongWrittenBy>
						written by
					</SongWrittenBy>

					<SongComposer>
						Denniz Pop - Dr Alban
					</SongComposer>

					<SongInfoContainer>

						{/* Song Album */}
						<SongInfo>
							Album: Hello Afrika
						</SongInfo>

						{/* Song Artist */}
						<SongInfo>
							Artist: Dr. Alban
						</SongInfo>

						{/* Song Release Date */}
						<SongInfo>
							Release Date: 18 Febraury 1991
						</SongInfo> 

						{/* Song Genre */}
						<SongInfo>
							Genre: Hip hop, Reggae, Dance hall, Pop
						</SongInfo>

						{/* Song Lenght */}
						<SongInfo>
							Length: 3:43
						</SongInfo>

						{/* Song Moods */}
						<SongInfo>
							groovy, positive, narcotic
						</SongInfo>

					</SongInfoContainer>
					
					{/* Song Age */}
					<SongAge>
						since {this.state.currentYear - 1991} years!
					</SongAge>
						
				</ContainerCentered>

			</Container>
      );
   }
}

export default NoCoke_CoverSection;
					