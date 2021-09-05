import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container,
         SongTitle,
			ComposerDateContainer,
         SongComposer,
			SongReleaseDate,
			SongBriefIntro
		 } from './available-song.styles';

class AvailableSong extends React.Component {

   render() {
      return (
			<Container>
				
				<SongTitle>
					{this.props.songTitle}
				</SongTitle>

				<ComposerDateContainer>

					<SongComposer>
						{this.props.songComposer}
					</SongComposer>

					<SongReleaseDate>
						{this.props.songReleaseDate}
					</SongReleaseDate>
					
				</ComposerDateContainer>

				<SongBriefIntro>
					{this.props.songBriefIntro}
				</SongBriefIntro>

			</Container>
      );
   }
}

export default AvailableSong;

const LinkTo = styled(Link)`
text-decoration: none;
`

// For V 1.1  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️

{/* <Container>
<LinkTo to={{
		  pathname: "/analysis",
		  data: this.props.songId }}>
	<Title>
		{this.props.songTitle}
	</Title>
</LinkTo>

<AuthorRelease>
	{this.props.authorRelease}
</AuthorRelease>

<Description>
	{this.props.description}
</Description>
</Container> */}
