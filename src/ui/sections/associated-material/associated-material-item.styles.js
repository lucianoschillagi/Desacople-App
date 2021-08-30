import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 85%;
margin: 10px;
box-sizing: border-box;
font-size: 17px;
font-weight: lighter;
text-align: left;

@media ${device.large} { 
// border: solid gray 2px;
// border-radius: 4px;
padding: 20px;
// background-color: red;
margin: 25px;
}
`

export const Title = styled.h1`
font-size: 1em;

@media ${device.large} { 
font-size: 1.4em;
}
`

export const Description = styled.p`
font-size: 0.75em;
opacity: 0.75;
@media ${device.large} { 
font-size: 1em;
}
`

export const Source = styled.p`
font-size: 0.6em;
opacity: 0.75;
`
export const ExternalPage = styled.a`
text-decoration: none;
color: white;
text-align: center;
`

