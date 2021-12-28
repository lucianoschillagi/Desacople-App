import React, { Component } from 'react';
import '../../../../sections/listen/sections.styles.js';

class NoCoke_Sections extends Component {

   render() {

   // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
   var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));
   
   // Sections
   const intro = document.getElementById('intro');
   const verseOne = document.getElementById('verseOne');
   const chorusOne = document.getElementById('chorusOne');
   const verseTwo = document.getElementById('verseTwo');
   const chorusTwo = document.getElementById('chorusTwo');
   const bridge = document.getElementById('bridge');
   const verseThree = document.getElementById('verseThree');
   const chorusThree = document.getElementById('chorusThree');
   const bridgeTwo = document.getElementById('bridgeTwo');
   const end = document.getElementById('end');

   // CSS values
   const borderBottomStyleOff = "0.25px solid gray"
   const borderBottomStyleOn = "none"
   const tabLetterOpacity = "1"

   switch (currentTimeSongPrecision) {
      case 0.5:
      intro.style.borderBottom = borderBottomStyleOn
      intro.style.opacity = tabLetterOpacity
      break;

      case 28.5:
      verseOne.style.borderBottom = borderBottomStyleOn
      verseOne.style.opacity = tabLetterOpacity
      verseOne.style.fontWeight = "bold"
      intro.style.borderBottom = borderBottomStyleOff
      intro.style.opacity = "0.2"
      break;

      case 68:
      chorusOne.style.borderBottom = borderBottomStyleOn
      chorusOne.style.opacity = tabLetterOpacity
      chorusOne.style.fontWeight = "bold"
      verseOne.style.borderBottom = borderBottomStyleOff
      verseOne.style.opacity = "0.2"
      break;

      case 78:
      verseTwo.style.borderBottom = borderBottomStyleOn
      verseTwo.style.opacity = tabLetterOpacity
      verseTwo.style.fontWeight = "bold"
      chorusOne.style.borderBottom = borderBottomStyleOff
      chorusOne.style.opacity = "0.2"
      break;

      case 107:
      chorusTwo.style.borderBottom = borderBottomStyleOn
      chorusTwo.style.opacity = tabLetterOpacity
      chorusTwo.style.fontWeight = "bold"
      verseTwo.style.borderBottom = borderBottomStyleOff
      verseTwo.style.opacity = "0.2"
      break;

      case 119:
      bridge.style.borderBottom = borderBottomStyleOn
      bridge.style.opacity = tabLetterOpacity
      bridge.style.fontWeight = "bold"
      chorusTwo.style.borderBottom = borderBottomStyleOff
      chorusTwo.style.opacity = "0.2"
      break;

      case 127:
      verseThree.style.borderBottom = borderBottomStyleOn
      verseThree.style.opacity = tabLetterOpacity
      verseThree.style.fontWeight = "bold"
      bridge.style.borderBottom = borderBottomStyleOff
      bridge.style.opacity = "0.2"
      break;

      case 157:
      chorusThree.style.borderBottom = borderBottomStyleOn
      chorusThree.style.opacity = tabLetterOpacity
      chorusThree.style.fontWeight = "bold"
      verseThree.style.borderBottom = borderBottomStyleOff
      verseThree.style.opacity = "0.2"
      break;

      case 177:
      bridgeTwo.style.borderBottom = borderBottomStyleOn
      bridgeTwo.style.opacity = tabLetterOpacity
      bridgeTwo.style.fontWeight = "bold"
      chorusThree.style.borderBottom = borderBottomStyleOff
      chorusThree.style.opacity = "0.2"
      break;

      case 197:
      end.style.borderBottom = borderBottomStyleOn
      end.style.opacity = tabLetterOpacity
      end.style.fontWeight = "bold"
      bridgeTwo.style.borderBottom = borderBottomStyleOff
      bridgeTwo.style.opacity = "0.2"
      break;

      }
      
      return (

         <div className="Sections_container">

            {/* Intro */}
            <p className="Sections_section"
               id="intro">
               Intro
            </p>

            {/* Verse 1 */}
            <p className="Sections_section"
               id="verseOne">
               Verse 1
            </p>

            {/* Chorus 1 */}
            <p className="Sections_section"
               id="chorusOne">
               Chorus 1
            </p>

            {/* Verse 2 */}
            <p className="Sections_section"
               id="verseTwo">
               Verse 2
            </p>

            {/* Chorus 2 */}
            <p className="Sections_section"
               id="chorusTwo">
               Chorus 2
            </p>

            {/* Bridge */}
            <p className="Sections_section"
               id="bridge">
               Bridge
            </p>

            {/* Verse 3 */}
            <p className="Sections_section"
               id="verseThree">
               Verse 3
            </p>

            {/* Chorus 3 */}
            <p className="Sections_section"
               id="chorusThree">
               Chorus 3
            </p>

            {/* Bridge */}
            <p className="Sections_section"
               id="bridge">
               Bridge
            </p>

            {/* End */}
            <p className="Sections_section"
               id="end">
               End
            </p>

         </div>
      );
   }
}

export default NoCoke_Sections;



