import React, { Component } from 'react';
import BigSection from '../../../../sections/listen/big-section.component';
import TimelineTotal from '../../../../sections/listen/timeline-total.component';
import NoCoke_Sections from './no-coke-sections.component';
import NoCoke_SectionContent from './no-coke-section-content.component'; 
import NoCoke_Elements from './no-coke-elements.component';
import PlaySong from '../../../../sections/listen/play-song.component.jsx';
import { Container, ContainerCentered } from '../../../../sections/listen/listen-section.styles.js';

class NoCoke_ListenSection extends Component {

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

               <TimelineTotal 
			   		currentTimeSong={this.props.currentTimeSong}
                  timerOn={this.props.timerOn}/>
           
               <NoCoke_Sections currentTimeSong={this.props.currentTimeSong}/>

               <NoCoke_SectionContent currentTimeSong={this.props.currentTimeSong}/>

               <NoCoke_Elements currentTimeSong={this.props.currentTimeSong}/>

				</ContainerCentered>
				
			</Container>

		);
   }
}

export default NoCoke_ListenSection;




