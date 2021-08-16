import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
position: fixed;
display: flex;
justify-content: space-around;
bottom: 0px;
left: 0px;
width: 100%;
height: 90px;
background-color:black;
backdrop-filter: blur(5px);
opacity: 0.9;
z-index: 3;
`

// Timer Container
export const TimerContainer = styled.div`
float: left;
display: flex;
justify-content: center;
align-items: center;
width: 33%;
`

export const PlaySongName = styled.p`
padding-top: 20px;
padding-right: 10px;
padding-left: 10px;
font-size: 13px;
`

export const PlaySongControlTimer = styled.div`
font-size: 14px;
opacity: 0.6;
background-color: black;
padding-bottom: 30px;
`

// Play & Pause Button Container
export const PlayPauseBtnContainer = styled.div`
float: left;
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 34%;
`

export const PlayButton = styled.button`
position: absolute;
margin: 0 auto;
padding: 10px;
z-index: 2;
background-color: black;
/* opacity: 0.6; */
border: 0px solid !important;
`
export const PlayIcon = styled.img`
width: 40px;
height: 50px;
`

export const PauseButton = styled.button`
position: absolute;
margin: 0 auto;
padding: 10px;
z-index: 1;
background-color: black;
border: 0px solid !important;
`
export const PauseIcon = styled.img`
width: 26px;
height: 50px;
`

// Pulse Container
export const PulseContainer = styled.div`
float: left;
display: flex;
justify-content: center;
align-items: center;
width: 33%;
`

const PulseAnimation = keyframes`
from { transform: scale(0.7); }
50% { transform: scale(1); }
to { transform: scale(0.7); }
`

export const Pulse = styled.div`
height: 30px;
width: 30px;
opacity: 0.8;
background-color: white;
border-radius: 50%;
animation-name: ${PulseAnimation};
animation-play-state: paused;
/* 0.54s = 110 bpm */
animation-duration: 0.54s; 
animation-iteration-count: infinite;
`
