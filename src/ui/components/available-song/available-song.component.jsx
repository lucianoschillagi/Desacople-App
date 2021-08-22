import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container,
         Title,
         AuthorRelease,
         Description } from './available-song.styles';

class AvailableSong extends Component {
   render() {
      return (
			<Container>
				<Title>
					{this.props.songTitle}
				</Title>
				<AuthorRelease>
					{this.props.authorRelease}
				</AuthorRelease>
				<Description>
					{this.props.description}
				</Description>
			</Container>
      );
   }
}

export default AvailableSong

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
