import React, { Component } from 'react';
import BigSection from './big-section.component';
import TimelineTotal from './timeline-total.component';
import Sections from './sections.component';
import SectionContent from './section-content.component';
import Elements from './elements.component';
import PlaySong from './play-song.component';
import { Container, ContainerCentered } from './listen-section.styles';

class ListenSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
          
               {/* Timeline partial component instance */}
               {/* <TimelinePartial currentTimeSong={this.props.currentTimeSong}
               timerOn={this.props.timerOn}/> */}

               <BigSection currentTimeSong={this.props.currentTimeSong} timerOn={this.props.timerOn}></BigSection>

               <BigSection/>

               {/* Timeline total component instance */}
               {/* <TimelineTotal currentTimeSong={this.props.currentTimeSong}
                        timerOn={this.props.timerOn}/> */}

               <TimelineTotal/>

               {/* Sections component instance */}
               {/* <Sections currentTimeSong={this.props.currentTimeSong}/> */}

               <Sections/>

               {/* SectionContent component instance */}
               {/* <SectionContent currentTimeSong={this.props.currentTimeSong}/> */}

               <SectionContent/>

               {/* Instruments component instance */}
               {/* <Elements currentTimeSong={this.props.currentTimeSong}/> */}

               <Elements/>

               <PlaySong 
                  currentTimeSong={this.props.currentTimeSong}
                  getTimerInfo={this.props.getTimerInfo}
                  getCurrentTimeSong={this.props.getCurrentTimeSong}
                  coverSongTitle={this.props.coverSongTitle}/>

				</ContainerCentered>
			</Container>

		);
   }
}

export default ListenSection;




