import React, { Component } from 'react';
import Another_HighlightedCover from './another-one-bites-the-dust-highlighted-cover.component';
import Another_HighlightedItem from './another-one-bites-the-dust-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles.js';

class Another_HighlightedSection extends Component {

   render() {
		return (
			<Container>
				<ContainerCentered>
					
					<Another_HighlightedCover
					highlightedSongTitleOne="another one..."
					highlightedSongTitleTwo="another one..."
					highlightedSongTitleThree="another one..."
					/>

					{/* Item One */}
					<Another_HighlightedItem 
					highlightedSongTitle="another one..."
					highlightedSongContent="another one..."
					/>

					{/* Item Two */}
					<Another_HighlightedItem 
					highlightedSongTitle="another one..."
					highlightedSongContent="another one..."
					/>

					{/* Item Three */}
					<Another_HighlightedItem 
					highlightedSongTitle="another one..."
					highlightedSongContent="another one..."
					/>

				</ContainerCentered>
			</Container>
		)
   }
}

export default Another_HighlightedSection;


