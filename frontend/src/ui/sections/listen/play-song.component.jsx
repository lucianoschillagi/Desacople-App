// Imported Modules
import React, { Component } from 'react'
import YouTube from 'react-youtube'

// Imported Components
import PlaySongControl from './play-song-control.component.jsx'

// Imported Styles
import { Container, InvisibleContainer } from './play-song.styles'

class PlaySong extends Component {

	// PlaySong props:
    // getCurrentTimeSong {function}
    // getTimerInfo {function}
    // currentTimeSong {number}

	 constructor(props) {
		super(props);
		this.state = {
							 timerOn: false,
						 };

	 // Youtube methods
		this._onPlay = this._onPlay.bind(this);
		this._onPause = this._onPause.bind(this);
		this._onEnd = this._onEnd.bind(this);
  }

	// Youtube mehtods * * *
   // task: Instruir qué hacer cuando el reproductor ya cargó y está listo
   onReady(event) {
    
		var playButton = document.getElementById('play-button');
		var pulse = document.getElementById('pulse');
		// Add event listener to the play button
		playButton.addEventListener("click", () => 
		  {
			 event.target.playVideo(); // access to player in all event handlers via event.target
			 playButton.style.visibility = "hidden";
			 pauseButton.style.visibility = "visible";
			 //pulse.style.animationPlayState = "running"; 
  
		  }
		);
  
		var pauseButton = document.getElementById('pause-button');
		// Add event listener to the pause button
		 pauseButton.addEventListener("click", () =>  
		 {
			event.target.pauseVideo();
			playButton.style.visibility = "visible";
			pauseButton.style.visibility = "hidden";
			pulse.style.animationPlayState = "paused"; 
		 }
	  );
	}
  
	 // task: Instruir qué hacer cada vez que cambia el estado del reproductor
	onStateChange(event) {
		 
		  // Si el reproductor está reproduciendo...
		  if (YouTube.PlayerState.PLAYING) {
			 var playButton = document.getElementById('play-button');
			 var pauseButton = document.getElementById('pause-button');
			 playButton.style.visibility = "hidden";
			 pauseButton.style.visibility = "visible";
		  } 
		  // Si el el reproductor está pausado...
		  if (event.data === 2) {
			 playButton.style.visibility = "visible";
			 pauseButton.style.visibility = "hidden";
		  } 
  
		  // test
		  console.log(`El player en estado PAUSED tiene el nro 2: mirá ${YouTube.PlayerState.PAUSED}`)
		  console.log(`El player en estado PLAYING tiene el nro 1: mirá ${YouTube.PlayerState.PLAYING}`)
		  console.log(event.data);
	}

   //////////////////////////////////////////////////////////////////////
   // Youtube methods section ///////////////////////////////////////////

   // task: Instruir qué hacer cada vez que el usuario da play al video
   _onPlay(event) {
		// this.setState({ timerOn: this.props.getTimerInfo(true) });
		this.timer = setInterval(() => {
				  this.props.getCurrentTimeSong(event.target.getCurrentTime())
				  }, 10);

		// var pulse = document.getElementById('pulse');
		// pulse.style.animationPlayState = "running";


		console.log(event.target.getCurrentTime())

	}
 
	//    task: Instruir qué hacer cada vez que el usuario da pause al video
	_onPause(event) {
			// // poner el valor de 'timerOn' a false
			// // apagar el timer
			// this.setState({ timerOn: this.props.getTimerInfo(false) });
			// // dejar de llamar en intervalos de 1cs a Date.now()
			// clearInterval(this.timer);

			// var pulse = document.getElementById('pulse');
			// pulse.style.animationPlayState = "paused";
	}

  // task: Instruir qué hacer cuando el video finaliza
	_onEnd(event) {
			// poner el valor de 'timerOn' a false
			// apagar el timer
			this.setState({ timerOn: this.props.getTimerInfo(false) });
			// dejar de llamar en intervalos de 1cs a Date.now()
			clearInterval(this.timer);
	}

	render() {
	  
		// The configuration of the YouTube video
      const opts = {
			width: '300', 
			height: '200',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				 autoplay: 0,
				 controls: 1,
				 disablekb: 0, 
				 fs: 0,
				 modestbranding: 1,
				 rel: 0,
				 playsinline: 1, // unable fullscreen on safari
				 start: 0 // starts at 6 seconds
			}
	   }

		return (
			<Container>
				<InvisibleContainer>
					<YouTube
						videoId="Wz_DNrKVrQ8" 
						opts={opts}
						onReady={this.onReady} // ejecuta esta func cuando el reproductor está listo
						onStateChange={this.onStateChange} // ejecuta esta func cuando el reproductor cambia su estado
						onPlay={this._onPlay}
						onPause={this._onPause}
						onEnd={this._onEnd}  
					/>
				</InvisibleContainer>

				{/* PlaySongControl component instance */}
				<PlaySongControl currentTimeSong={this.props.currentTimeSong}
									  coverSongTitle={this.props.coverSongTitle}
									  coverSectionData={this.props.coverSectionData}
				/>
         </Container>

		)
   }
}

export default PlaySong;