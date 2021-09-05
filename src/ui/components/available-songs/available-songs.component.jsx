import React, { Component } from 'react';
import AvailableSong from '../available-song/available-song.component';
import styled from 'styled-components';
import { Container, ContainerCentered } from './available-songs.styles';

import { Link } from 'react-router-dom';

class AvailableSongs extends Component {
    
	render() {
		return (

			<Container>
				<ContainerCentered>

					{/* Another One Bites the Dust */}
					<LinkTo to= {{ pathname: "/another-one-bites-the-dust" }}>
						<AvailableSong songId="song_001"
											songTitle="Another One Bites the Dust"
											songComposer="(John Deacon) - "
											songReleaseDate="1980"
											songBriefIntro="El primer tema, “Bells & Circles” es también la primera 
											colaboración que hicieron."
						/>
					</LinkTo>

					{/* Satisfaction (Devo Version) */}
					<LinkTo to= {{ pathname: "/satisfaction"}}>
						<AvailableSong songId="song_002"
											songTitle="Satisfaction"
											songComposer="(Jagger - Richards) - "
											songReleaseDate="1966"
											songBriefIntro="El primer tema, “Bells & Circles” es también la primera 
											colaboración que hicieron."
						/>
					</LinkTo>

					{/* The Good, The Bad and The Ugly */}
					<LinkTo to= {{ pathname: "/the-good-the-bad-and-the-ugly"}}>
						<AvailableSong songId="song_003"
											songTitle="The Good, The Bad and The Ugly"
											songComposer="(Ennio Morricone) - "
											songReleaseDate="1980"
											songBriefIntro="El primer tema, “Bells & Circles” es también la primera 
											colaboración que hicieron."
						/>
					</LinkTo>

				</ContainerCentered>
			</Container>
		);
   }
}

export default AvailableSongs;

// Styled Components
const LinkTo = styled(Link)`
text-decoration: none;
`


// For V 1.1  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️

{/* <Container>
	<ContainerCentered>
		<AvailableSong songId="song_001"
							songTitle="Another One Bites the Dust"
							authorRelease="(John Deacon) - 1980"
							description="El primer tema, “Bells & Circles” es también la primera 
							colaboración que hicieron."
		/>
		<AvailableSong songId="song_002"
							songTitle="(I Can't Get) Satisfaction"
							authorRelease="(Jagger - Richards) - 1966 [Devo Version]"
							description="El primer tema, “Bells & Circles” es también la primera 
							colaboración que hicieron."
		/>
		<AvailableSong songId="song_003"
							songTitle="The good, the bad and the ugly"
							authorRelease="(Ennio Morricone) - 1966"
							description="El primer tema, “Bells & Circles” es también la primera 
							colaboración que hicieron."
		/>
	</ContainerCentered>
</Container> */}