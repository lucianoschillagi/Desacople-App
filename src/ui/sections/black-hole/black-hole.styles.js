import styled, { keyframes } from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
padding: 100px 0px 150px 0px;
background-color: black;
`

const CircleAnimation = keyframes`
from { transform: scale(0.9); }
50% { transform: scale(1); }
to { transform: scale(0.9); }
`

export const Circle = styled.div`
margin: 0 auto;
height: 240px;
width: 240px;
opacity: 0.8;
background-color: white;
border-radius: 50%;
animation-name: ${CircleAnimation};
animation-play-state: paused;
/* 0.54s = 110 bpm */
animation-duration: 0.54s; 
animation-iteration-count: infinite;

@media ${device.large} { 
width: 500px;
height: 500px;
}
`

