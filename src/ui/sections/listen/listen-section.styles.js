import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
opacity: 0.8;
padding-bottom: 50px;
`

export const ContainerCentered = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 90%;
padding: 20px 0px 0px 0px;
font-size: 18px;
border-style: solid;
border-width: 2px;  
border-color: white;
border-radius: 18px;

@media ${device.large} { 
width: 80%;
height: 40vw;
background-color: black;
border-width: 4px; 
}
`

