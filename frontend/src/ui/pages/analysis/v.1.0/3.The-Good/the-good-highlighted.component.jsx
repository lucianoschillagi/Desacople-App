import React, { Component } from 'react';
import TheGood_HighlightedCover from './the-good-highlighted-cover.component';
import TheGood_HighlightedItem from './the-good-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles.js';

class TheGood_HighlightedSection extends Component {

   render() {
		return (
			<Container>
				<ContainerCentered>
					
					<TheGood_HighlightedCover
					highlightedSongTitleOne="satisfaction one..."
					highlightedSongTitleTwo="satisfaction one..."
					highlightedSongTitleThree="satisfaction one..."
					/>

					{/* Item One */}
					<TheGood_HighlightedItem 
					highlightedSongTitle="the good..."
					highlightedSongContent="the good..."
					/>

					{/* Item Two */}
					<TheGood_HighlightedItem 
					highlightedSongTitle="satisfaction one..."
					highlightedSongContent="another one..."
					/>

					{/* Item Three */}
					<TheGood_HighlightedItem 
					highlightedSongTitle="another one..."
					highlightedSongContent="another one..."
					/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default TheGood_HighlightedSection;


