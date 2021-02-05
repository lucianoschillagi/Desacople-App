import React, { Component } from 'react'
import CardDetail from './card-detail.component'
import Cards from './cards.component'
import { Container } from './actors.styles.js'

class ActorsSection extends Component {

   render() {
		return (
			<Container>
				<CardDetail actorsSectionData={this.props.actorsSectionData}/>
				<Cards actorsSectionData={this.props.actorsSectionData}/>
			</Container>
		);
   }
}

export default ActorsSection

