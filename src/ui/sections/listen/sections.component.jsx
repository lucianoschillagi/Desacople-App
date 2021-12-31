import React, { Component } from 'react';
import { Container, Section } from './sections.styles.js';

// Abstract: represents the different sections of the song
class Sections extends Component {

   render() {

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