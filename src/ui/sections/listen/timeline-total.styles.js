import styled, { keyframes } from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
position: relative;
box-sizing: border-box;
display: flex;
width: 100%;
height: 50vw;
z-index: -3;

@media ${device.extraSmall} { 
border-width: 10px;
}

@media ${device.large} { 
border-width: 10px;
height: 380px;
}
`
export const Section = styled.div`
// border-left: solid;
// border-width: thin;
// width: 100%;
// background-color: blue;
@media ${device.large} {
// background-color: red;
}
@media ${device.extraLarge} {
width: 80%;
flex-direction: row;
}
`

// Song Elements
export const ElementTracksContainer = styled.div`
width: 100%;
height: 50vw;
display: flex;
flex-direction: column;
position: absoulte;
left: 0px;
top: 0px;
z-index: -1;

@media ${device.large} { 
height: 400px;
// background-color: orange;
}

`
export const ElementTrack = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 100px;
z-index: 0;

@media ${device.extraSmall} { 
// height: 50px;
}

@media ${device.large} { 
// background-color: red;
margin: 5px;
}

`
export const Element_ON = styled.div`
// height: 15px;
// background-color: red;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;

@media ${device.extraSmall} { 
height: 25px;
}

`

export const Element_ON_text = styled.p`
font-size: 12px;
color: white;

@media ${device.extraLarge} { 
font-size: 14px;
}
`


export const Element_OFF = styled.div`
height: 10px;
`


const TimelineAnimation = keyframes`
100% {
width: 100%;
}
`
export const CurrentTimeLine = styled.div`
width: 2px;
height: 100%;
background-color: white;
-webkit-animation-name: example2; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
-webkit-animation-iteration-count: 2; /* Safari 4.0 - 8.0 */
-webkit-animation-dirgoection: normal; /* Safari 4.0 - 8.0 */
animation-name: ${TimelineAnimation};
animation-duration: 216s; /* Song duration */
animation-iteration-count: 8;
animation-timing-function: linear;
animation-direction: normal;
animation-play-state: paused;
opacity: 0.25;
position: absolute;
left: 0px;
top: 0px;
z-index: 1;
` 