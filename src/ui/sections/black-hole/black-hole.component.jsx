import React from 'react';
import { Container, Circle } from './black-hole.styles.js';
 
class BlackHoleSection extends React.Component {

   render() {

		// Timeline animation
		if (this.props.currentTimeSong > 1 ) {
			var blackHole = document.getElementById('circle');
			blackHole.style.animationPlayState = "running";
		}

		if (this.props.timerOn === false) {
			var blackHole = document.getElementById('circle');
			blackHole.style.animationPlayState = "paused";
		}

      return (
         <Container>
            <Circle id="circle"/>
         </Container>
      )
   }
}

export default BlackHoleSection;
