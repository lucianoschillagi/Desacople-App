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
				<ContainerCentered>

					{/* Timeline partial component instance */}
               {/* <TimelinePartial currentTimeSong={this.props.currentTimeSong}
               timerOn={this.props.timerOn}/> */}

               <BigSection 
						currentTimeSong={this.props.currentTimeSong} 
						timerOn={this.props.timerOn}
					/>

               {/* <BigSection/> */}

               {/* Timeline total component instance */}
               <TimelineTotal 
			   		currentTimeSong={this.props.currentTimeSong}
                  timerOn={this.props.timerOn}/>
           

               {/* Sections component instance */}
               <Sections currentTimeSong={this.props.currentTimeSong}/>

               {/* <Sections/> */}

               {/* SectionContent component instance */}
               <SectionContent currentTimeSong={this.props.currentTimeSong}/>

         

               {/* Instruments component instance */}
               <Elements currentTimeSong={this.props.currentTimeSong}/>

               {/* <Elements/> */}

					<PlaySong 
						currentTimeSong={this.props.currentTimeSong}
						getTimerInfo={this.props.getTimerInfo}
						getCurrentTimeSong={this.props.getCurrentTimeSong}
						coverSectionData={this.props.coverSectionData}
					/>
				</ContainerCentered>
			</Container>

		);
   }
}

export default Another_ListenSection;




