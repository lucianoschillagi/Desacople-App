import React, { Component } from 'react';
import './big-section.styles';

class BigSection extends Component {

  constructor(props) {
    super(props)
    this.state = { 
                    currentSectionName: "Intro",  // el tiempo actual de la canción
                    timerOn: false // indica si el timer está prendido o no
                  }
  }

	render() {

    // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
    var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

    switch (currentTimeSongPrecision) {
      case 0.5:
     // Remove later: add 'timeOn' property for avoid inifite loop!!!!
     if (this.state.timerOn === false) {
         this.setState({ timerOn: true, 
          currentSectionName: 'Intro' })
     }
     break;
    
     case 22.5:
      if (this.state.timerOn === true) {
          this.setState({ timerOn: false, 
            currentSectionName: 'A1'})
      }
      break;

      case 40:
        if (this.state.timerOn === false) {
            this.setState({ timerOn: true, 
              currentSectionName: 'B1'})
        }
      break;
    
      case 57.2:
        if (this.state.timerOn === true) {
            this.setState({ timerOn: false, 
              currentSectionName: 'Inter'})
        }
      break;

    }

		return (
			<div className="BigSection_Container">
        <h1 className="BigSection_Letter">
          {this.state.currentSectionName}
        </h1>
      </div>			
		)
	}
}

export default BigSection;