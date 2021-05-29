import React, { Component } from 'react'
import { Container, CardDetailTitle, CardDetailDescription } from './card-detail.styles'

class CardDetail extends Component {

	render() {
		return (
			<Container>

				<CardDetailTitle>
					{this.props.actorsSectionData.card_01}
				</CardDetailTitle>

				<CardDetailDescription>
					{this.props.actorsSectionData.card_01}
				</CardDetailDescription>
				
         </Container>
		)
	}
}

export default CardDetail