import React from 'react';
import { Container,
			ContainerCentered,
			SongTitle,
			SongComposer,
			SongInfoContainer,
			SongInfo,
			SongAge
		  } from '../../../../sections/cover/cover.styles.js'

class Another_CoverSection extends React.Component {

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
						<em className="z">- for 41 years!</em>
					</SongAge>
						
				</ContainerCentered>

			</Container>
      );
   }
}

export default Another_CoverSection;