import React, { Component } from 'react'
import { Container } from './card.styles.js'

class Card extends Component {

	render() {
		return (
			<Container>
				{/* Title */}
				<h3>Card Title</h3>
				{/* Description */}
				<p>Carta</p>
			</Container>
		)
	}
}

export default Card

            //   {/* Card name */}
            //   <h1 className="Card_name"
            //       onClick={(e) => this.handleClick(this.props.actorsSongCard[0],this.props.actorsSongCard[1], e)}>
            //     {/* {this.props.actorsSectionData[0]} */} 
            //   </h1>

            //   {/* Card description */}
            //   <p className="Card_description">
            //      {this.props.actorsSectionData.card_01_title} 
            //   </p>