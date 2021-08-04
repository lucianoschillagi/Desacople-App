import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Breathe = () => {
 return (
   <Circle />
 )
}
export default Breathe

const breatheAnimation = keyframes`
from { transform: scale(0.7); }
50% { transform: scale(1); }
to { transform: scale(0.7); }
`

const Circle = styled.div`
height: 30px;
width: 30px;
background-color: blue;
border-radius: 50%;
animation-name: ${breatheAnimation};
// animation-play-state: paused;
animation-duration: 1s;
animation-iteration-count: infinite;
`