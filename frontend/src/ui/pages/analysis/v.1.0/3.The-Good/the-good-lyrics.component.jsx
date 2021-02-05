import React, { Component } from 'react';
import { Container } from '../../../../sections/lyrics/lyrics.styles.js';

class TheGood_LyricsSection extends Component {

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

	function Estrofas(props) {

		// const content = props.estrofas.map((estrofa) =>
		//   <div key={estrofa.id}>
		// 	 <p>{estrofa.content}</p>
		//   </div>
		// );

	// function Estrofa(props) {

	// 	const content = props.estrofa.map((verso) =>
	// 	  <div key={verso.id}>
	// 		 <p>{verso.content}</p>
	// 	  </div>
	// 	);

	// 	return (
	// 	  <div>
	// 		 {content}
	// 	  </div>
	// 	);
	//  }
   }

	 
	 const estrofas2 = [

		 // Estrofa Uno (verses)
		 [		
		 {id: 1, content: 'estrofa uno - verso uno'},
		 {id: 2, content: 'estrofa uno - verso dos'},
		 {id: 3, content: 'estrofa uno - verso tres'},
		 {id: 2, content: 'estrofa uno - verso cuatro'}],

		 // Estrofa Dos (verses)
		 [
		 {id: 1, content: 'estrofa dos - verso uno'},
		 {id: 2, content: 'estrofa dos - verso dos'},
		 {id: 3, content: 'estrofa dos - verso tres'}],

		 // Estrofa Tres (verses)
		 [
		 {id: 1, content: 'estrofa tres - verso uno'},
		 {id: 2, content: 'estrofa tres - verso dos'}]
		
	 ];

	return ( 
				<Container>
					<ul>
                  <li>verse one</li>
                  <li>verse two</li>
                  <li>verse three</li>
                  <li>verse four</li>
               </ul>
				</Container>
			 );

   }
}

   //  return (
   //       <Container>
   //           <h1>{this.props.lyricsSectionData.lyrics_name}</h1>
            
   //        {/* <div>
   //          {this.props.lyricsSectionData.verses.map}
   //      </div> */}


	// 		{/* <NumberList numbers={numbers} /> */}


   //      {/* <div>
   //        {this.props.verses.map( line => {
   //          return (
   //                    <li key={this.lineId += 1}>{line}</li>
   //                )
   //          })
   //        }
   //      </div> */}


   //       </Container>
   //  )
  
   export default TheGood_LyricsSection;