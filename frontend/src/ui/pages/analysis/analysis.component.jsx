// Imported Modules
import React, { Component } from 'react';
// Firebase
import firebase from 'firebase';
import functions from 'firebase-functions';
import admin from 'firebase-admin';

// Imported Components
import Header from '../../components/header/header.component';
import CoverSection from '../../sections/cover/cover.component';
import ActorsSection from '../../sections/actors/actors.component';
import ListenSection from '../../sections/listen/listen-section.component';
import LyricsSection from '../../sections/lyrics/lyrics.component';
import AssociatedMaterialSection from '../../sections/associated-material/associated-material.component';
import HighlightedSection from '../../sections/highlighted/highlighted.component';
import BlackHoleSection from '../../sections/black-hole/black-hole.component';

// Imported Styles
import { Container } from './analysis.styles';
import { StyledSpinner } from '../../../utils/spinner';

// exports.getSubCollections = functions.https.onCall(async (data, context) => {

//     const docPath = data.docPath;

//     const collections = await admin.firestore().doc(docPath).listCollections();
//     const collectionIds = collections.map(col => col.id);

//     return { collections: collectionIds };

// });

class AnalysisPage extends Component {

   constructor(props) {
		super(props);
		this.state = { 
							// Loading...
							loading: true, // indica que la página se está cargando aún
							
							// Song Timer
							currentTimeSong: 0,  // el tiempo actual de la canción
							timerOn: null,// indica si el timer está prendido o no

							// Cover Section Info
							coverSectionData: {},

							// Actors Section Info
							actorsSectionData: {},

							// Lyrics Section Info
							lyricsSectionData: {},

							// Associated Section Info
							associatedSectionData: {},

							// Highlighted Section Info
							highlightedSectionData: {},

							blackHoleSectionData: {},
							
							// las "cartas" de la canción seleccionada
							cardsData: {},

							// las estrofas de la canción seleccionada
							estrofasArray: [],

							// las "marcas de tiempo" de la canción seleccionada
							timestamps: {}

					}
  
		this.getCurrentTimeSong = this.getCurrentTimeSong.bind(this);
		this.getTimerInfo = this.getTimerInfo.bind(this);
		this.getDataSong = this.getDataSong.bind(this);
   }

	// Task: Ejecutar una vez que el componente se haya montado
	componentDidMount() {

		// Pone la ventana en el tope
		window.scrollTo(0, 0)

		// Mostrar un "activity view" hasta que lleguen los datos
		console.log("Esperando los datos de la canción seleccionada")

		// Obtiene los datos de la canción seleccionada
		this.getDataSong();

		// admin.initializeApp();

// 		exports.getSubCollections = functions.https.onCall(async (data, context) => {

// 		const docPath = data.docPath;

// 		const collections = await admin.firestore().doc(docPath).listCollections();
// 		const collectionIds = collections.map(col => col.id);

// 		return { collections: collectionIds };

// });

	}

	// Task: Obtener los datos de la canción seleccionada desde Firestore Cloud
	getDataSong() {

	// Acá recibe los datos (el songId) pasado desde 
	// Choose Song component ✊ /////////////////////
	const { data } = this.props.location // data == songId (ej: song_001 or song_002, etc)
	console.log(data);
	/////////////////////////////////////////////////

	// Firestore from Firebase 🔌
	// Ref: https://cloud.google.com/firestore/docs
	// Ref: https://firebase.google.com/docs/reference/js/firebase.firestore
	const db = firebase.firestore();

	/////////////////////////////////////////////////////
	/// Request to Firestore "cover_section_document" ///
	/////////////////////////////////////////////////////

	// 1. Cover Section Request 🚀

	// a.Request
	db.collection('songs')
	.doc(data)
	.collection("cover_section")
	.doc("cover_section_document")
	.get()
	
	// b.Response
	.then(coverSectionDocument => {
			if (coverSectionDocument.exists) {
				console.log("Cover section document data:", coverSectionDocument.data());
				const coverSectionData = coverSectionDocument.data()
				this.setState({ coverSectionData })
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}

	// c.Handling Errors
	}).catch(function(error) {
			console.log("Error getting document:", error);
	});

	//////////////////////////
	// Cover Section Data ////
	//////////////////////////
	// song_album
	// song_artist
	// song_composer
	// song_genre
	// song_quote
	// song_release_date
	// song_title
	// song_years
	//////////////////////////

	// const getSubCollections = firebase
	// .functions()
	// .httpsCallable('getSubCollections');
	// getSubCollections({ docPath: '/songs/song_001/actors_section/actors_section_document' })
	

	// .then(function(result) {
	//   var collections = result.data.collections;
	//   console.log("####", collections);
	// })
	// .catch(function(error) {
	//   // Getting the Error details.
	//   console.log("####", collections);
	//   var code = error.code;
	//   var message = error.message;
	//   var details = error.details;
	//   // ...
	// });

	///////////////////////////////////////////////////////////
	/// 2. Actors Section Request 🚀 //////////////////////////
	///////////////////////////////////////////////////////////
		  

	// a.Request
	db
	.collection('songs') // COLLECTION
	.doc(data) // data == songId (ej: song_001 or song_002, etc) // DOCUMENT
	.collection("actors_section") // COLLECTION
	.doc("actors_section_document") // DOCUMENT
	.get()

	// b.Response
	.then(actorsSectionDocument => {
		
		if (actorsSectionDocument.exists) {
			console.log("Actors section document data:", actorsSectionDocument.data());
			const actorsSectionData = actorsSectionDocument.data()
			this.setState({ actorsSectionData })

		} else {
			// doc.data() will be undefined in this case
			console.log("No such document! 😜");
		}

	// c.Handling Errors
	
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});

	// c.Handling Errors
	// }).catch(function(error) {
	// 		console.log("Error getting document:", error);
	// });

	// b.Handling Response
	// .then(response => {
	// 	console.log("Responsesss:", response);
	// 	const fetchedCards = [];
	// 	response.forEach(document => {
	// 		const fetchedCards = {
	// 			id: document.id,
	// 			...document.data()
	// 		};
	// 		fetchedCards.push(fetchedCards);
	// 		console.log("Fetched Cards are:", fetchedCards);
	// 	});
	// 	this.setState( { cardsData: fetchedCards})
	// 	})

	// c.Error Handling
	// .catch(error => {
	// 		console.log(error);
	// });

	///////////////////////////////////////////////////////////
	/// 3. Listen Section Request 🚀 //////////////////////////
	///////////////////////////////////////////////////////////

	// a.Request
	db
	.collection("songs")
	.doc(data)
	.collection("listen_section")
	.get()

	// b.Handling Response
	.then(listenSectionDocument => {
		if (listenSectionDocument.exists) {
			console.log("Cover section document data:", listenSectionDocument.data());
			const listenSectionData = listenSectionDocument.data()
			this.setState({ listenSectionData })
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}})

	// c.Error Handling
	.catch(function(error) {
			console.log("Error getting document:", error);
	});

	///////////////////////////////////////////////////////////
	/// 4. Lyrics Section Request 🚀 //////////////////////////
	///////////////////////////////////////////////////////////

	// a.Request
	db
	.collection("songs")
	.doc(data)
	.collection("lyrics_section")
	.get()
	
	// b.Handling Response
	.then(lyricsDocument => 
	{
		lyricsDocument.forEach(doc => 
		{
			console.log(doc.id, " 😀 => ", doc.data());
			const lyricsSectionData = doc.data();
			console.log(doc.id, "LYRICS SECTION DOCUMENT DATA => ", doc.data());
			this.setState({ lyricsSectionData })
		});
	});
	// c.Handling Error
	// Incomplete...

	// db
	// .collection('songs')
	// .doc(data)
	// .collection('verses')
	// .get()
	// // ...
	// .then(response => {

	// const estrofasArray = [];

	// response.forEach(estrofa => {
	// 	const fetchedEstrofa = 
	// 	{
	// 	id: estrofa.id,
	// 	...estrofa.data()
	// 	};

	// 	estrofasArray.push(fetchedEstrofa);
	// 	console.log(" la respuesta de los datos de las cards 🤪 => ",fetchedEstrofa);
	// 	});

	// this.setState({ estrofasArray: estrofasArray })

	// })
	// .catch( error => { 
	// 	console.log(error) 
	// });

	///////////////////////////////////////////////////////////
	/// 5. Highlighted Section Request 🚀 /////////////////////
	///////////////////////////////////////////////////////////
	
	// a.Request
	db
	.collection('songs')
	.doc(data)
	.collection("highlighted_section")
	.doc("highlighted_section")
	.get()

	// b.Handling Response
	.then( highlightedDocument => {
			if (highlightedDocument.exists) {
				console.log("Highlighted section document data:", highlightedDocument.data());
				const highlightedSectionData = highlightedDocument.data()
				this.setState({ highlightedSectionData })
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
	})
	
	// c.Handling Error
	.catch(function(error) {
			console.log("Error getting document:", error);
	});
	
	///////////////////////////////////////////////////////////
	/// 6. Associated Material Section Request 🚀 /////////////
	///////////////////////////////////////////////////////////

	// a.Request
	db
	.collection('songs')
	.doc(data)
	.collection("associated_section")
	.doc("associated_section")
	.get()

	// b.Handling Response
	.then( associatedDocument => {
			if (associatedDocument.exists) {
				console.log("Associated section document data:", associatedDocument.data());
				const associatedSectionData = associatedDocument.data()
				this.setState({ associatedSectionData })
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
	})
	
	// c.Handling Error
	.catch(function(error) {
			console.log("Error getting document:", error);
	});

	//////////////////////////////////////////////////
	/// 7. Black Hole Section Request 🚀 /////////////
	//////////////////////////////////////////////////

	// a.Request
	db
	.collection('songs')
	.doc(data)
	.collection("black_hole_section")
	.doc("black_hole_section")
	.get()

	// b.Handling Response
	.then( blackHoleDocument => {
			if (blackHoleDocument.exists) {
				console.log("Black Hole section document data:", blackHoleDocument.data());
				const blackHoleSectionData = blackHoleDocument.data()
				this.setState({ blackHoleSectionData })
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
	})
	
	// c.Handling Error
	.catch(function(error) {
			console.log("Error getting document:", error);
	});

	}

	// Task: Obtener el tiempo actual de la canción
  	// (dato generado en el componente PlaySong) ⏱
 	getCurrentTimeSong(time) {
		this.setState({ currentTimeSong: time })
	}

	// Task: Determinar si el timer está encendido
	// obtener esa información
	// (dato generado en el componente PlaySong)
	getTimerInfo(timerState) {
		this.setState({ timerOn: timerState })
	}

	render() {
		return (
			<Container>

				{/* LOADER */}
				<StyledSpinner/>

				{/* HEADER */}
				<Header/>

				{/* COVER */}
				<CoverSection coverSectionData={this.state.coverSectionData}/>

				{/* ACTORS */}
				<ActorsSection actorsSectionData={this.state.actorsSectionData}/> 

				{/* LISTEN */}
				<ListenSection 
									getCurrentTimeSong={this.getCurrentTimeSong}
									getTimerInfo={this.getTimerInfo}
									currentTimeSong={this.state.currentTimeSong}
									timerOn={this.state.timerOn}
									coverSectionData={this.state.coverSectionData}/> 

				{/* LYRICS */}
          	<LyricsSection currentTimeSong={this.state.currentTimeSong}
				  			  	   lyricsSectionData={this.state.lyricsSectionData}/>

				 {/* HIGHLIGHTED */}
				<HighlightedSection highlightedSectionData={this.state.highlightedSectionData}/> 

				{/* ASSOCIATED MATERIAL */}
				<AssociatedMaterialSection associatedSectionData={this.state.associatedSectionData}/>

				{/* BLACK HOLE */}
				<BlackHoleSection/>
				
			</Container>
		)
	}
}

export default AnalysisPage
