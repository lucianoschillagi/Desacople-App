import React, { Component } from 'react';
import { Container, 
			Title, 
			Description, 
			Source,
			ExternalPage } from '../../../../sections/associated-material/associated-material-item.styles.js';

class NoCoke_AssociatedItem extends Component {
	render() {
		return (
			<Container>
				<ExternalPage href={this.props.externalPage} target="_blank">
					<Title>{this.props.title}</Title>
					<Description>{this.props.subtitle}</Description>
					{/* <Source>{this.props.source}</Source> */}
				</ExternalPage>
			</Container>
		);
  }
}

export default NoCoke_AssociatedItem;



