import React, { Component } from 'react';
import Another_LyricsSource from './another-one-bites-the-dust-lyrics-source.component';
import { Container } from '../../../../sections/lyrics/lyrics.styles';

class Another_LyricsSection extends Component {

	constructor(props) {
		super(props);
		this.state = { 
		  lineId: 1, 
		  toogle: false,
		  lyricsSongLyricsTimestamp: [],
		  lyricsSongLyricsTimestampPlus: []
		 }

		  
		// this.ListItem = this.ListItem.bind(this);
		// this.NumberList = this.NumberList.bind(this);
	 }


	//   ListItem(props) {
	// 	return <li>{props.value}</li>;
	//  }
	 
	//   NumberList(props) {
	// 	const numbers = props.numbers;
	// 	return (
	// 	  <ul>
	// 		 {numbers.map((number) =>
	// 			<ListItem key={number.toString()}
	// 						 value={number} />
	// 		 )}
	// 	  </ul>
	// 	);
	//  }
	 
	// numbers = [1, 2, 3, 4, 5];

	render() {
		return (
			<Container>
				<Another_LyricsSource 
					currentTimeSong={this.props.currentTimeSong}/>
			</Container>
		);
   }

}

export default Another_LyricsSection;