import React from 'react';
import NoCoke_LyricsSource from './no-coke-lyrics-source.component';
import { Container } from '../../../../sections/lyrics/lyrics.styles';

class NoCoke_LyricsSection extends React.Component {

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
				<NoCoke_LyricsSource 
					currentTimeSong={this.props.currentTimeSong}/>
			</Container>
		);
   }

}

export default NoCoke_LyricsSection;