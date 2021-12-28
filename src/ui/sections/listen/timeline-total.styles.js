import styled, { keyframes } from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
position: relative;
box-sizing: border-box;
display: flex;
width: 100%;
height: 50vw;
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


const TimelineAnimation = keyframes`
100% {
width: 100%;
}

`
export const CurrentTimeLine = styled.div`
width: 2px;
height: 100%;
background-color: white;
position: absolute;
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
left: 0px;
top: 0px;
z-index: 2;
` 
