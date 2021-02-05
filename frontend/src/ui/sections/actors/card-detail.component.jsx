import React, { Component } from 'react'
import { Container, CardTitle, CardDescription } from './card-detail.styles'

class CardDetail extends Component {

	render() {
		return (
			<Container>

				<CardTitle>
					{this.props.actorsSectionData.card_01}
				</CardTitle>

				<CardDescription>
					{this.props.actorsSectionData.card_01}
				</CardDescription>
				
         </Container>
		)
	}
}

export default CardDetail