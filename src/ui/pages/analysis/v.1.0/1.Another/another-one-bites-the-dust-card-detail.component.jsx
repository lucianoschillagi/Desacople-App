import React from 'react';
import { Container, 
			CardDetailTitle, 
			CardDetailDescription,
			CardButton,
			CardDetailPlayedBy } from '../../../../sections/actors/card-detail.styles.js';

class Another_CardDetail extends React.Component {

	constructor(props) {
		super(props);
      this.playDemo = this.playDemo.bind(this);
   }

	playDemo() {
		console.log("se dispara una muestra de este elemento")
		var audio = new Audio('https://commons.wikimedia.org/wiki/File:Audacity_click_track_one_per_second_for_eight_seconds_mono88khz32bitfloat.ogg');
		audio.play();
	}	

	render() {
		return (
			<Container>

				<CardDetailTitle>
					{this.props.cardTitle}
				</CardDetailTitle>

				<CardDetailDescription>
					{this.props.cardDescription}
				</CardDetailDescription>

				<CardButton onClick={this.playDemo}>
					play me!
				</CardButton>
				 
				<CardDetailPlayedBy>
					{this.props.cardPlayedBy}
				</CardDetailPlayedBy>

         </Container>
		)
	}
}

export default Another_CardDetail;