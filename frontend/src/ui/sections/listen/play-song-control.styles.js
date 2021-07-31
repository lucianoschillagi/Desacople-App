import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
display: flex;
justify-content: space-around;
bottom: 0px;
left: 0px;
width: 100%;
height: 60px;
background-color:black;
backdrop-filter: blur(5px);
opacity: 0.8;
z-index: 3;
`

export const TimerContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
// background-color: red;
`

export const PlaySongName = styled.p`
font-size: 12px;
text-align: center;
align-self: center;
`

export const PlaySongControlTimer = styled.div`
font-size: 14px;
align-self: center;
opacity: 0.6;
`

export const PlayPauseBtnContainer = styled.div`
position: relative;
width: 60px;
height: 60px;
align-self: center;
`

export const PlayButton = styled.button`
position: absolute;
display: flex;
align-self: center;
top: 5px;
left: 0px;
padding: 10px;
margin-left: -10px;
z-index: 2;
align-self: center;
background-color: blue;
/* opacity: 0.6; */
border: 0px solid !important;
`

export const PauseButton = styled.button`
position: absolute;
display: flex;
align-self: center;
top: 5px;
left: 0px;
padding: 10px;
margin-left: -10px;
z-index: 2;
align-self: center;
background-color: black;
/* opacity: 0.6; */
border: 0px solid !important;
`

export const Pulse = styled.div`
align-self: center;
width: 20px;
height: 20px;
border-radius: 10px;
background-color: white;
/* opacity: 0.65; */
animation-name: pulse;
animation-play-state: paused;
/* 0.54s = 110 bpm */
animation-duration: 0.54s; 
animation-iteration-count: infinite;
`




