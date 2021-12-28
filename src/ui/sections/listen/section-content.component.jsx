import React from 'react';
import { Container, ContentOf } from './section-content.styles.js';

class SectionContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sectionContent: this.sectionContentExample,
			contentOn: false
		};
	}

	sectionContentExample = 'La voz de MC acapella con delay da pie a la entrada de los drums y el bajo la voz repite 3 veces la misma frase y una frase de bajo da pie a verse'

	render() {

		//   convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
		var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

		switch (currentTimeSongPrecision) {
			case 0.5:
				// Remove later: add 'prendido' property for avoid inifite loop!!!!
				if (!this.state.contentOn) {
					this.setState({
						contentOn: true,
						sectionContent: 'La voz de MC acapella con delay da pie a la entrada de los drums y el bajo la voz repite 3 veces la misma frase y una frase de bajo da pie a verse'
					})
				}
				break;

			case 22.5:
				if (this.state.contentOn) {
					this.setState({
						contentOn: false,
						sectionContent: 'a la voz principal y los drums y bajo se suma un stacatto de sinte que marca el tempo de reagge'
					})
				}
				break;

			case 40:
				if (!this.state.contentOn) {
					this.setState({
						contentOn: true,
						sectionContent: 'la voz repite como un mantra la frase del chorus y el bajo desaparece y se suma un sonido agudo y sostenido en contraste con los graves de la base'
					})
				}
				break;

			case 57.2:
				if (this.state.contentOn) {
					this.setState({
						contentOn: false,
						sectionContent: 'retoma los elementos del verse 1'
					})
				}
				break;

			case 66:
				if (!this.state.contentOn) {
					this.setState({
						contentOn: true,
						sectionContent: 'idem chorus 1'
					})
				}
				break;

			case 84:
				if (this.state.contentOn) {
					this.setState({
						contentOn: false,
						sectionContent: 'retoma el bajo con el motivo principal y se suman voces con delay'
					})
				}
				break;

			case 101:
				if (!this.state.contentOn) {
					this.setState({
						contentOn: true,
						sectionContent: 'la voz queda sobre los drums y desaparecen el sinte y el bajo para sumarse antes de dar lugar al chorus final'
					})
				}
				break;
			case 140:
				if (this.state.contentOn) {
					this.setState({
						contentOn: false,
						sectionContent: 'sobre el groove voces con delay suena el motivo de bajo y tras un silencio retoma el mismo modulando un tono más arriba'
					})
				}
				break;

			case 158:
				if (!this.state.contentOn) {
					this.setState({
						contentOn: true,
						sectionContent: 'retoma el verse pero en esta nueva tonalidad con una ligera variación en el fraseo de la voz'
					})
				}
				break;


		}

		return (
			<Container>
				<ContentOf>
					{this.state.sectionContent}
					</ContentOf>
			</Container>
		);
	}
}

export default SectionContent;