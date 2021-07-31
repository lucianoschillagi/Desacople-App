import React, { Component } from 'react';
import Card from './card.component';
import { Container } from './cards.styles';

class Cards extends Component {

	render() {
		return (
			<Container>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>

{/* 
          {this.props.actorsSectionData.map( card => {

             

                return (
                         <p>card</p>
                      )
                })
              
			} */}
        

			</Container>
		)
	}
}

export default Cards;