import React from 'react';
import Another_HighlightedCover from './another-one-bites-the-dust-highlighted-cover.component';
import Another_HighlightedItem from './another-one-bites-the-dust-highlighted-item.component';
import { Container, ContainerCentered, Another_HighlightedDescription } from '../../../../sections/highlighted/highlighted.styles.js';

class Another_HighlightedSection extends React.Component {

	hightlightedSectionCoverData = {
		titleOne: 'Another Moments Title 1',
		titleTwo: 'Another Moments Title 2',
		titleThree: 'Another Moments Title 3'
	}

	hightlightedSectionItemData = {
		m1 : {
				title: 'Guitarra Doppler',
				content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
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

				<Another_HighlightedDescription>
					3 highlighted moments of the song
				</Another_HighlightedDescription>
				
				<ContainerCentered>

				{/* <Another_HighlightedCover
					highlightedSongTitleOne={this.hightlightedSectionCoverData.titleOne}
					highlightedSongTitleTwo={this.hightlightedSectionCoverData.titleTwo}
					highlightedSongTitleThree={this.hightlightedSectionCoverData.titleThree}
				/> */}

				{/* Item One */}
				<Another_HighlightedItem 
					title={this.hightlightedSectionItemData.m1.title}
					content={this.hightlightedSectionItemData.m1.content}
				/>

				{/* Item Two */}
				<Another_HighlightedItem 
					title={this.hightlightedSectionItemData.m2.title}
					content={this.hightlightedSectionItemData.m2.content}
				/>

				{/* Item Three */}
				<Another_HighlightedItem 
					title={this.hightlightedSectionItemData.m3.title}
					content={this.hightlightedSectionItemData.m3.content}
				/>

			</ContainerCentered>
		
		</Container>
		)
   }
}

export default Another_HighlightedSection;


