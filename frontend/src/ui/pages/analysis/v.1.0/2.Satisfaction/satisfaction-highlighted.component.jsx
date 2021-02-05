import React, { Component } from 'react';
import Satisfaction_HighlightedCover from './satisfaction-highlighted-cover.component';
import Satisfaction_HighlightedItem from './satisfaction-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles.js';

class Satisfaction_HighlightedSection extends Component {

   render() {
		return (
			<Container>
				<ContainerCentered>
					
					<Satisfaction_HighlightedCover
					highlightedSongTitleOne="satisfaction one..."
					highlightedSongTitleTwo="satisfaction one..."
					highlightedSongTitleThree="satisfaction one..."
					/>

					{/* Item One */}
					<Satisfaction_HighlightedItem 
					highlightedSongTitle="satisfaction one..."
					highlightedSongContent="satisfaction one..."
					/>

					{/* Item Two */}
					<Satisfaction_HighlightedItem 
					highlightedSongTitle="satisfaction one..."
					highlightedSongContent="another one..."
					/>

					{/* Item Three */}
					<Satisfaction_HighlightedItem 
					highlightedSongTitle="another one..."
					highlightedSongContent="another one..."
					/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default Satisfaction_HighlightedSection;


