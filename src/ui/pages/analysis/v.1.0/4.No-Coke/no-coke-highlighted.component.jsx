import React from 'react';
// import Another_HighlightedCover from './another-one-bites-the-dust-highlighted-cover.component';
import NoCoke_HighlightedItem from './no-coke-highlighted-item.component';
import { Container, ContainerCentered, Another_HighlightedDescription } from '../../../../sections/highlighted/highlighted.styles.js';

class NoCoke_HighlightedSection extends React.Component {

	hightlightedSectionCoverData = {
		titleOne: 'Another Moments Title 1',
		titleTwo: 'Another Moments Title 2',
		titleThree: 'Another Moments Title 3'
	}

	hightlightedSectionItemData = {
		m1 : {
				title: 'Salve & Delusion',
				content: 'In grappling with the “mess” of our present moment, the punk legend looks relentlessly to the future, and her optimism feels alternately like a salve and a delusion.',
				segment: "0: 30 - 0: 51" 
				},
		m2 : {
				title: 'Coloratura Pop',
				content: 'Aca la cosa cambiar porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
				},
		m3 : {
				title: 'Guitarra Funky',
				content: 'A su vez acá es distinto, porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
				},
	}

   render() {
		return (
			<Container>

				{/* <NoCoke_HighlightedDescription>
					3 highlighted moments of the song
				</NoCoke_HighlightedDescription>	 */}
				
				<ContainerCentered>

				{/* <Another_HighlightedCover
					highlightedSongTitleOne={this.hightlightedSectionCoverData.titleOne}
					highlightedSongTitleTwo={this.hightlightedSectionCoverData.titleTwo}
					highlightedSongTitleThree={this.hightlightedSectionCoverData.titleThree}
				/> */}

				{/* Item One */}
				<NoCoke_HighlightedItem 
					title={this.hightlightedSectionItemData.m1.title}
					content={this.hightlightedSectionItemData.m1.content}
					segment={this.props.segment}
				/>

				{/* Item Two */}
				<NoCoke_HighlightedItem 
					title={this.hightlightedSectionItemData.m2.title}
					content={this.hightlightedSectionItemData.m2.content}
				/>

				{/* Item Three */}
				<NoCoke_HighlightedItem 
					title={this.hightlightedSectionItemData.m3.title}
					content={this.hightlightedSectionItemData.m3.content}
				/>

			</ContainerCentered>
		
		</Container>
		)
   }
}

export default NoCoke_HighlightedSection;


