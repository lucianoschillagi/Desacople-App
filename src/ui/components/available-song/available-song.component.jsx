import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container,
         Title,
			ComposerDateContainer,
         Composer,
			ReleaseDate,
			BriefIntro
		 } from './available-song.styles';

class AvailableSong extends React.Component {

   render() {
      return (
			<Container>
				
				<Title>
					{this.props.songTitle}
				</Title>

				<ComposerDateContainer>
					<Composer>
						{this.props.songComposer}
					</Composer>
					<ReleaseDate>
						{this.props.songReleaseDate}
					</ReleaseDate>
				</ComposerDateContainer>

				<BriefIntro>
					{this.props.songBriefIntro}
				</BriefIntro>

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
