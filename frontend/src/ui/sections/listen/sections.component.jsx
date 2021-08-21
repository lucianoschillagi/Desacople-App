import React, { Component } from 'react';
import './sections.styles.css';

// Abstract: represents the different sections of the song
class Sections extends Component {

    // Sections's props:
    // onChangeSectionContent {Function}
    // currentTimeSong {Number}
    // timerOn {Bool}

    render() {

        // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
        var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));
        
        // test
      //   console.log(`😇 ${currentTimeSongPrecision}`);

        // Sections
        const intro = document.getElementById('Intro');
        const A1 = document.getElementById('A1');
        const B1 = document.getElementById('B1');
        const inter1 = document.getElementById('Inter1');
        const A2 = document.getElementById('A2');
        const B2 = document.getElementById('B2');
        const inter2 = document.getElementById('Inter2');
        const B3 = document.getElementById('B3');
        const A3 = document.getElementById('A3');
        const B4 = document.getElementById('B4');
        const final = document.getElementById('Final');

        // CSS values
        const borderBottomStyleOff = "0.25px solid gray"
        const borderBottomStyleOn = "none"
        const tabLetterOpacity = "1"

        // Conditional rendering
        switch (currentTimeSongPrecision) {
        case 0.5:
        intro.style.borderBottom = borderBottomStyleOn
        intro.style.opacity = tabLetterOpacity
        break;

        case 22.5:
        A1.style.borderBottom = borderBottomStyleOn
        A1.style.opacity = tabLetterOpacity
        A1.style.fontWeight = "bold"
        intro.style.borderBottom = borderBottomStyleOff
        intro.style.opacity = "0.2"
        break;

        case 40:
        B1.style.borderBottom = borderBottomStyleOn
        A1.style.borderBottom = borderBottomStyleOff
        break;

        case 57.2:
        inter1.style.borderBottom = borderBottomStyleOn
        B1.style.borderBottom = borderBottomStyleOff
        break;

        case 66:
        A2.style.borderBottom = borderBottomStyleOn
        inter1.style.borderBottom = borderBottomStyleOff
        break;

        case 84:
        B2.style.borderBottom = borderBottomStyleOn
        A2.style.borderBottom = borderBottomStyleOff
        break;

        case 101:
        inter2.style.borderBottom = borderBottomStyleOn
        B2.style.borderBottom = borderBottomStyleOff
        break;

        case 140:
        B3.style.borderBottom = borderBottomStyleOn
        inter2.style.borderBottom = borderBottomStyleOff
        break;

         case 158:
         A3.style.borderBottom = borderBottomStyleOn
         B3.style.borderBottom = borderBottomStyleOff
         break;

         case 175:
         B4.style.borderBottom = borderBottomStyleOn
         A3.style.borderBottom = borderBottomStyleOff
         break;

         case 193:
         final.style.borderBottom = borderBottomStyleOn
         B4.style.borderBottom = borderBottomStyleOff
         break;
        }
        
        // Draw this UI elements..
        return (

            <div className="Sections_container">

               {/* Intro */}
               <p className="Sections_section"
                  id="Intro">
                  Intro
               </p>

               {/* A1 */}
               <p className="Sections_section"
                  id="A1">
                  A1
               </p>

               {/* B1 */}
               <p className="Sections_section"
                  id="B1">
                  B1
               </p>

               {/* Inter 1 */}
               <p className="Sections_section"
                  id="Inter1">
                  Inter
               </p>

               {/* A2 */}
               <p className="Sections_section"
                  id="A2">
                  A2
               </p>

               {/* B2 */}
               <p className="Sections_section"
                  id="B2">
                  B2
               </p>

               {/* Inter 2 */}
               <p className="Sections_section"
                  id="Inter2">
                  Inter
               </p>

               {/* B3 */}
               <p className="Sections_section"
                  id="B3">
                  B3
               </p>

               {/* A3 */}
               <p className="Sections_section"
                  id="A3">
                  A3
               </p>

               {/* B4 */}
               <p className="Sections_section"
                  id="B4">
                  B4
               </p>

               {/* Final */}
               <p className="Sections_section"
                  id="Final">
                  Final
               </p>

            </div>
        );
    }
}

export default Sections;