import React, { Component } from 'react';
import HighlightedCover from './highlighted-cover.component';
import HighlightedItem from './highlighted-item.component';
import { Container, ContainerCentered } from './highlighted.styles';

class HighlightedSection extends Component {

   render() {
		return (
			<Container>
				<ContainerCentered>
		
					<HighlightedCover
						highlightedSongTitleOne={this.props.highlightedSectionData.item_01_title}
						highlightedSongTitleTwo={this.props.highlightedSectionData.item_02_title}
						highlightedSongTitleThree={this.props.highlightedSectionData.item_03_title}
					/>

					{/* Item One */}
					<HighlightedItem 
						highlightedSongTitle={this.props.highlightedSectionData.item_01_title}
						highlightedSongContent={this.props.highlightedSectionData.item_01_description}
					/>

					{/* Item Two */}
					<HighlightedItem 
						highlightedSongTitle={this.props.highlightedSectionData.item_02_title}
						highlightedSongContent={this.props.highlightedSectionData.item_02_description}
					/>

					{/* Item Three */}
					<HighlightedItem 
						highlightedSongTitle={this.props.highlightedSectionData.item_03_title}
						highlightedSongContent={this.props.highlightedSectionData.item_03_description}
					/>

				</ContainerCentered>
			</Container>
		)
   }
}

export default HighlightedSection


