import React, { Component } from 'react';
// import TheGood_HighlightedCover from './the-good-highlighted-cover.component';
import TheGood_HighlightedItem from './the-good-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles.js';

class TheGood_HighlightedSection extends Component {

   render() {
		return (
			<Container>
				<ContainerCentered>

					{/* <TheGood_HighlightedCover
					highlightedSongTitleOne="satisfaction one..."
					highlightedSongTitleTwo="satisfaction one..."
					highlightedSongTitleThree="satisfaction one..."
					/> */}

					{/* Item One */}
					<TheGood_HighlightedItem 
					title="The Good moment 1"
					content="hdaksl hsadf lksadh fkljadsh fkjlsa fkjasd hfkjlsadh fjklsad hdaksl hsadf lksadh fkljadsh fkjlsa fkjasd hfkjlsadh fjklsad"
					/>

					{/* Item Two */}
					<TheGood_HighlightedItem 
					title="The Good moment 2"
					content="sadhfklsa flkjsa fkjlsadh fklash ffsda hdaksl hsadf lksadh fkljadsh fkjlsa fkjasd hfkjlsadh fjklsad"
					/>

					{/* Item Three */}
					<TheGood_HighlightedItem 
					title="The Good moment 3"
					content="fsahfsa lasdfhkljfas fkdsalh fkladjsh fkdlsah adfs hdaksl hsadf lksadh fkljadsh fkjlsa fkjasd hfkjlsadh fjklsad"
					/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default TheGood_HighlightedSection;


