import React, { Component } from 'react';
import Satisfaction_HighlightedCover from './satisfaction-highlighted-cover.component';
import Satisfaction_HighlightedItem from './satisfaction-highlighted-item.component';
import { Container, ContainerCentered } from '../../../../sections/highlighted/highlighted.styles';

class Satisfaction_HighlightedSection extends Component {

	hightlightedSectionCoverData = {
		titleOne: 'Satisfaction Moments Title 1',
		titleTwo: 'Satisfaction Moments Title 2',
		titleThree: 'Satisfaction Moments Title 3'
	}

	hightlightedSectionItemData = {
		m1 : {
				title: 'Guitar Doppler',
				content: 'En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
				},
		m2 : {
				title: 'Piano Pop',
				content: 'Aca la cosa cambiar porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
				},
		m3 : {
				title: 'Arpa Funky',
				content: 'A su vez acá es distinto, porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal'
				},
	}

   render() {
		return (
			<Container>
				<ContainerCentered>
					
					<Satisfaction_HighlightedCover
						highlightedSongTitleOne={this.hightlightedSectionCoverData.titleOne}
						highlightedSongTitleTwo={this.hightlightedSectionCoverData.titleTwo}
						highlightedSongTitleThree={this.hightlightedSectionCoverData.titleThree}
					/>

					{/* Item One */}
					<Satisfaction_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m1.title}
					/>

					{/* Item Two */}
					<Satisfaction_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m2.title}
					/>
					
					{/* Item Three */}
					<Satisfaction_HighlightedItem 
						hightlightedSectionItemData={this.hightlightedSectionItemData.m3.title}
					/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default Satisfaction_HighlightedSection;


