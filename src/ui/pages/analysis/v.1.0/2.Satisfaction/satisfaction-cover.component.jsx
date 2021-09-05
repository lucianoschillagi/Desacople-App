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

class Satisfaction_CoverSection extends React.Component {

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
						"I can't get me no satisfaction
						And I try and I try and I try t-t-t-t-try try"
					</TextyAnim>
					{/* FIXME */}

					<SongTitle>
						(I Can't Get No) Satisfaction [Devo Version]
					</SongTitle>

					<SongComposer>
						Mick Jagger - Keith Richards
					</SongComposer>

					<SongInfoContainer>

						{/* Song Album */}
						<SongInfo>
							Album: Q: Are We Not Men? A: We Are Devo!
						</SongInfo>

						{/* Song Artist */}
						<SongInfo>
							Artist: Devo 
						</SongInfo>

						{/* Song Release Date */}
						<SongInfo>
							Release Date: August 28, 1978
						</SongInfo> 

						{/* Song Genre */}
						<SongInfo>
							Genre: New Wave - Post-Punk - Art-Rock
						</SongInfo>

					</SongInfoContainer>
					
					{/* Song Age */}
					<SongAge>
						for {this.state.currentYear - 1978} years!
					</SongAge>
						
				</ContainerCentered>

			</Container>
      );
   }
}

export default Satisfaction_CoverSection;