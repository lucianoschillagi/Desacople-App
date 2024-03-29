import React from 'react';
import '../../../../sections/listen/section-content.styles.js';

class NoCoke_SectionContent extends React.Component { 

   constructor(props) {
		super(props);
		this.state = { 
							sectionContent: this.sectionContentExample,
							prendido: false
						 };
	}
    
	sectionContentExample = 'La voz de MC acapella con delay da pie a la entrada de los drums y el bajo la voz repite 3 veces la misma frase y una frase de bajo da pie a verse'

   render() {

      //   convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
		var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

		switch (currentTimeSongPrecision) {
		case 0.5:
		// Remove later: add 'prendido' property for avoid inifite loop!!!!
		if (this.state.prendido === false) {
			this.setState({ 
						prendido: true, 
						sectionContent: 'La voz de MC acapella con delay da pie a la entrada de los drums y el bajo la voz repite 3 veces la misma frase y una frase de bajo da pie a verse' })
		}
		break;

		case 28:
		if (this.state.prendido === true) {
			this.setState({ 
						prendido: false, 
						sectionContent: 'a la voz principal y los drums y bajo se suma un stacatto de sinte que marca el tempo de reagge'})
		}
		break;

		case 68:
		if (this.state.prendido === false) {
			this.setState({ 
						prendido: true, 
						sectionContent: 'la voz repite como un mantra la frase del chorus y el bajo desaparece y se suma un sonido agudo y sostenido en contraste con los graves de la base'})
		}
		break;

		case 78:
		if (this.state.prendido === true) {
			this.setState({ 
						prendido: false, 
						sectionContent: 'retoma los elementos del verse 1'})
		}
		break;

		case 107:
		if (this.state.prendido === false) {
			this.setState({ 
						prendido: true, 
						sectionContent: 'idem chorus 1'})
		}
		break;
		
		case 119:
		if (this.state.prendido === true) {
			this.setState({ 
						prendido: false, 
						sectionContent: 'retoma el bajo con el motivo principal y se suman voces con delay'})
		}
		break;

		case 127:
		if (this.state.prendido === false) {
			this.setState({ 
						prendido: true, 
						sectionContent: 'la voz queda sobre los drums y desaparecen el sinte y el bajo para sumarse antes de dar lugar al chorus final'})
		}
		break;

		case 157:
		if (this.state.prendido === true) {
			this.setState({ prendido: false, 
									sectionContent: 'sobre el groove voces con delay suena el motivo de bajo y tras un silencio retoma el mismo modulando un tono más arriba'})
		}
		break;

		case 177:
		if (this.state.prendido === false) {
			this.setState({ prendido: true, 
									sectionContent: 'retoma el verse pero en esta nueva tonalidad con una ligera variación en el fraseo de la voz'})
		}
		break;


		}
		
		return (
			<div className="SectionContent_container">
			<div className="SectionContent_content_of">
				{this.state.sectionContent}
			</div>
			</div>
		);
    }
}

export default NoCoke_SectionContent;