import React, { Component } from 'react';
import Another_HighlightedCover from './another-one-bites-the-dust-highlighted-cover.component';
import Another_HighlightedItem from './another-one-bites-the-dust-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles.js';

class Another_HighlightedSection extends Component {

	hightlightedSectionCoverData = {
		titleOne: 'Another Moments Title 1',
		titleTwo: 'Another Moments Title 2',
		titleThree: 'Another Moments Title 3'
	}

	hightlightedSectionItemData = {
		m1 : {
				title: 'Guitarra Doppler',
				content: 'En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
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
				<ContainerCentered>
					
					<Another_HighlightedCover
						highlightedSongTitleOne={this.hightlightedSectionCoverData.titleOne}
						highlightedSongTitleTwo={this.hightlightedSectionCoverData.titleTwo}
						highlightedSongTitleThree={this.hightlightedSectionCoverData.titleThree}
					/>

					{/* Item One */}
					<Another_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m1.title}
					/>

					{/* Item Two */}
					<Another_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m2.title}
					/>

					{/* Item Three */}
					<Another_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m3.title}
					/>

				</ContainerCentered>
			</Container>
		)
   }
}

export default Another_HighlightedSection;


