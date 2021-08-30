import React from 'react';
import { Container,
			ContainerCentered,
			QuoteSong,
			SongTitle,
			Composers,
			SongInfoContainer,
			SongInfo,
			FromYears
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