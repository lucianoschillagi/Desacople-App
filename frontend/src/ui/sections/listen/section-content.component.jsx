import React, { Component} from 'react';
import './section-content.styles.css';
import styled from "styled-components";

class SectionContent extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
                        sectionContent: this.sectionContentExample,
                        prendido: false
                     };
    }
    
	sectionContentExample = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'

    render() {

        // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4

        // Conditional rendering
        // switch (currentTimeSongPrecision) {
        //  case 0.5:
        // // Remove later: add 'prendido' property for avoid inifite loop!!!!
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
		// 					sectionContent: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta.' })
        // }
        // break;

        // case 22.5:
        // if (this.state.prendido === true) {
        //     this.setState({ prendido: false, 
		// 					sectionContent: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem.'})
        // }
        // break;

        // case 40:
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
		// 					sectionContent: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,'})
        // }
        // break;

        // case 57.2:
        // if (this.state.prendido === true) {
        //     this.setState({ prendido: false, 
        //                     sectionContent: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem.'})
        // }
        // break;

        // case 66:
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
        //                     sectionContent: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,'})
        // }
        // break;
        
        // case 84:
        // if (this.state.prendido === true) {
        //     this.setState({ prendido: false, 
        //                     sectionContent: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem.'})
        // }
        // break;

        // case 101:
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
        //                     sectionContent: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,'})
        // }
        // break;
        // case 140:
        // if (this.state.prendido === true) {
        //     this.setState({ prendido: false, 
        //                     sectionContent: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem.'})
        // }
        // break;

        // case 158:
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
        //                     sectionContent: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,'})
        // }
        // break;

        // case 175:
        // if (this.state.prendido === true) {
        //     this.setState({ prendido: false, 
        //                     sectionContent: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem.'})
        // }
        // break;

        // case 193:
        // if (this.state.prendido === false) {
        //     this.setState({ prendido: true, 
        //                     sectionContent: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,'})
        // }
        // break;


        // }

        // Draw this UI elements...
        return (
            <div className="SectionContent_container">
				<div className="SectionContent_content_of">
					{this.state.sectionContent}
				</div>
            </div>
        );
    }
}

export default SectionContent;