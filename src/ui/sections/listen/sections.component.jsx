import React, { Component } from 'react';
import { Container, Section } from './sections.styles.js';

// Abstract: represents the different sections of the song
class Sections extends Component {

   render() {

      // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
      var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

      // CSS values
      const borderBottomStyleOff = "0.25px solid gray"
      const borderBottomStyleOn = "none"
      const tabLetterOpacity = "0.2"

      switch (currentTimeSongPrecision) {

         case 0.5:
            var intro = document.getElementById("Intro");
            intro.style.borderBottom = borderBottomStyleOn
            // intro.style.opacity = tabLetterOpacity
            break;

         case 22.5:
            var intro = document.getElementById("Intro");
            var A1 = document.getElementById("A1");
            // A1.style.borderBottom = borderBottomStyleOn
            A1.style.opacity = tabLetterOpacity
            A1.style.fontWeight = "bold"
            // intro.style.borderRightStyle = "dotted"
            intro.style.borderRightWidth = "4px"
            intro.style.opacity = "0.2"
            break;

         case 40:
            var A1 = document.getElementById("A1");
            var B1 = document.getElementById("B1");
            B1.style.borderBottom = borderBottomStyleOn
            B1.style.opacity = tabLetterOpacity
            B1.style.fontWeight = "bold"
            A1.style.borderBottom = borderBottomStyleOff
            A1.style.opacity = "0.2"
            break;

         case 57.2:
            var B1 = document.getElementById("B1");
            var inter1 = document.getElementById("Inter1");
            inter1.style.borderBottom = borderBottomStyleOn
            inter1.style.opacity = tabLetterOpacity
            inter1.style.fontWeight = "bold"
            B1.style.borderBottom = borderBottomStyleOff
            B1.style.opacity = "0.2"
            break;

         case 66:
            var inter1 = document.getElementById("Inter1");
            var A2 = document.getElementById("A2");
            A2.style.borderBottom = borderBottomStyleOn
            A2.style.opacity = tabLetterOpacity
            A2.style.fontWeight = "bold"
            inter1.style.borderBottom = borderBottomStyleOff
            inter1.style.opacity = "0.2"
            break;

         case 84:
            var A2 = document.getElementById("A2");
            var B2 = document.getElementById("B2");
            B2.style.borderBottom = borderBottomStyleOn
            B2.style.opacity = tabLetterOpacity
            B2.style.fontWeight = "bold"
            A2.style.borderBottom = borderBottomStyleOff
            A2.style.opacity = "0.2"
            break;

         case 101:
            var B2 = document.getElementById("B2");
            var inter2 = document.getElementById("Inter2");
            inter2.style.borderBottom = borderBottomStyleOn
            inter2.style.opacity = tabLetterOpacity
            inter2.style.fontWeight = "bold"
            B2.style.borderBottom = borderBottomStyleOff
            B2.style.opacity = "0.2"
            break;

         case 140:
            var inter2 = document.getElementById("Inter2");
            var B3 = document.getElementById("B3");
            B3.style.borderBottom = borderBottomStyleOn
            B3.style.opacity = tabLetterOpacity
            B3.style.fontWeight = "bold"
            inter2.style.borderBottom = borderBottomStyleOff
            inter2.style.opacity = "0.2"
            break;

         case 158:
            var B3 = document.getElementById("B3");
            var A3 = document.getElementById("A3");
            A3.style.borderBottom = borderBottomStyleOn
            A3.style.opacity = tabLetterOpacity
            A3.style.fontWeight = "bold"
            B3.style.borderBottom = borderBottomStyleOff
            B3.style.opacity = "0.2"
            break;

         case 175:
            var A3 = document.getElementById("A3");
            var B4 = document.getElementById("B4");
            B4.style.borderBottom = borderBottomStyleOn
            B4.style.opacity = tabLetterOpacity
            B4.style.fontWeight = "bold"
            A3.style.borderBottom = borderBottomStyleOff
            A3.style.opacity = "0.2"
            break;

         case 193:
            var B4 = document.getElementById("B4");
            var final = document.getElementById("Final");
            final.style.borderBottom = borderBottomStyleOn
            final.style.opacity = tabLetterOpacity
            final.style.fontWeight = "bold"
            B4.style.borderBottom = borderBottomStyleOff
            B4.style.opacity = "0.2"
            break;
      }

      return (

         <Container>

            {/* Intro */}
            <Section id="Intro" className='intro'>
               INTR
            </Section>

            {/* A1 */}
            <Section id="A1" className='a1'>
               A1
            </Section>

            {/* B1 */}
            <Section id="B1" className='b1'>
               B1
            </Section>

            {/* Inter 1 */}
            <Section id="Inter1" className='inter1'>
               Inter 1
            </Section>

            {/* A2 */}
            <Section id="A2" className='a2'>
               A2
            </Section>

            {/* B2 */}
            <Section id="B2" className='b2'>
               B2
            </Section>

            {/* Inter 2 */}
            <Section id="Inter2" className='inter2'>
               Inter 2
            </Section>

            {/* B3 */}
            <Section id="B3" className='b3'>
               B3
            </Section>

            {/* A3 */}
            <Section id="A3" className='a3'>
               A3
            </Section>

            {/* B4 */}
            <Section id="B4" className='b4'>
               B4
            </Section>

            {/* Final */}
            <Section id="Final" className='final'>
               Final
            </Section>

         </Container>
      );
   }
}

export default Sections;



// import React, { Component } from 'react';
// import styled from 'styled-components';
// // import { Container, Section } from './sections.styles.js';

// // Abstract: represents the different sections of the song
// class Sections extends Component {


//    render() {

//       const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`

//          color: blue;

//          &:hover {
//             color: red; // <Thing> when hovered
//          }

//          & ~ & {
//             background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//          }

//          & + & {
//             background: white; // <Thing> next to <Thing>
//          }

//          &.something {
//             background: black; // <Thing> tagged with an additional CSS class ".something"
//          }

//          &.red {
//             background: red; // <Thing> tagged with an additional CSS class ".something"
//          }

//          &.cyan {
//             background: cyan; // <Thing> tagged with an additional CSS class ".something"
//          }

//          &.orange {
//             background: orange; // <Thing> tagged with an additional CSS class ".something"
//          }


//          .something-else & {
//             border: 1px solid; // <Thing> inside another element labeled ".something-else"
//          }
// `

//       return (
//          <React.Fragment>
//             <Thing>Hello world!</Thing>
//             <Thing>How ya doing?</Thing>

//             <Thing className="red">red..</Thing>
//             <Thing className="cyan">cyan...</Thing>
//             <Thing className="orange">orange...</Thing>

//             <div>Pretty nice day today.</div>
//             <Thing>Don't you think?</Thing>
//             <div className="something-else">
//                <Thing>Splendid.</Thing>
//             </div>
//          </React.Fragment>

//       )


//    }



// }

// export default Sections;