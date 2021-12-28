import React, { Component } from 'react'
import { Container, CardDetailTitle, CardDetailDescription } from './card-detail.styles'

class CardDetail extends Component {

	constructor(props) {
		super(props);
      this.playDemo = this.playDemo.bind(this);
   }

	playDemo() {
		console.log("se dispara una muestra de este elemento")
	}

	render() {
		return (
			<Container>

				<CardDetailTitle>
					{this.props.actorsSectionData.card_01}
				</CardDetailTitle>

				<CardDetailDescription>
					{this.props.actorsSectionData.card_01}
				</CardDetailDescription>

				<button onClick={this.playDemo}>
					play me!
				</button>
				
         </Container>
		)
	}
}

export default CardDetail