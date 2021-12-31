import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
opacity: 0.8;
padding: 10px 0px 40px 0px;
background-color: black;
// height: 70vw;
`

export const ContainerCentered = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 90%;
padding: 5px 0px 0px 0px;
font-size: 18px;
border-style: solid;
border-width: 2px;  
border-color: white;
border-radius: 18px;
border-width: 4px;
// background-color: #2f4870;
z-index: -5;


@media ${device.extraSmall} { 

}

@media ${device.small} { 

}

@media ${device.medium} { 

}

@media ${device.large} { 
width: 80%;
border-width: 10px;
}

@media ${device.extraLarge} { 

}
`

