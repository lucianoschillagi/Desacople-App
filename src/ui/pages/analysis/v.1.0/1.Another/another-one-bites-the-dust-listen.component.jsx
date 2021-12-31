import React, { Component } from 'react';
import BigSection from '../../../../sections/listen/big-section.component';
import TimelineTotal from '../../../../sections/listen/timeline-total.component';
import Sections from '../../../../sections/listen/sections.component';
import SectionContent from '../../../../sections/listen/section-content.component';
import Elements from '../../../../sections/listen/elements.component';
import PlaySong from '../../../../sections/listen/play-song.component.jsx';
import { Container, ContainerCentered } from '../../../../sections/listen/listen-section.styles.js';

class Another_ListenSection extends Component {

	render() {
		return (
			<Container>
			
				{/* <TimelinePartial currentTimeSong={this.props.currentTimeSong}
				timerOn={this.props.timerOn}/> */}

				<BigSection 
					currentTimeSong={this.props.currentTimeSong} 
					timerOn={this.props.timerOn}
				/>

				<ContainerCentered>

					<Sections currentTimeSong={this.props.currentTimeSong}/>

               <TimelineTotal 
			   		currentTimeSong={this.props.currentTimeSong}
                  timerOn={this.props.timerOn}/>
           
			 		 <Sections currentTimeSong={this.props.currentTimeSong}/>

               <SectionContent currentTimeSong={this.props.currentTimeSong}/>

               <Elements currentTimeSong={this.props.currentTimeSong}/>

				</ContainerCentered>
				
			</Container>

		);
   }
}

export default Another_ListenSection;




