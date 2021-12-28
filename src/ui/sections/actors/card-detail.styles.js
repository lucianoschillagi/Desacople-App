import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 97%;
height: 335px;
margin-bottom: 40px;
// Border styles
border-style: solid;
border-width: 5px;
border-image: linear-gradient(45deg, rgb(255,255,255), rgb(128,128,128)) 1;
border-radius: 10px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

@media ${device.extraSmall} {
// background-color: red;
}

@media ${device.small} {
// background-color: purple;
}

@media ${device.medium} {
// background-color: blue;
}

@media ${device.large} {
// background-color: brown;
height: 500px;
}

@media ${device.extraLarge} {
// background-color: black;
}

`

export const CardDetailTitle = styled.h1`
width: 100%;
height: 100px;
text-align: center;
align-self: center;
padding: 0px 20px 0px 20px;

@media ${device.extraSmall} { 
width: 80%;
font-size: 1.9rem;
}

@media ${device.small} { 
font-size: 2rem;
padding-top: 10px;
}

@media ${device.medium} { 
padding-top: 21px;
font-size: 2.2rem;
}


@media ${device.large} {
padding-top: 17px;
font-size: 2.6rem;
}

@media ${device.extraLarge} { 
}

`

export const CardDetailDescription = styled.div`
// width: 85%;
font-size: 0.9rem;
font-weight: lighter;
padding: 0px 20px 0px 20px;
text-align: center;
align-self: center;

@media ${device.extraSmall} { 
height: 200px;
font-size: 0.95rem;
padding-top: 15px;
}

@media ${device.small} { 
font-size: 1.1rem;
width: 75%;
}

@media ${device.medium} { 
padding-top: 0px;
font-size: 1.15rem;
padding-bottom: 20px;
}

@media ${device.large} {
font-size: 1.5rem;
width: 50%;
padding-bottom: 50px;
}

@media ${device.extraLarge} { 
}
`

export const CardButton = styled.button`


`

export const CardDetailPlayedBy = styled.p`
font-size: 0.9rem;
color: orange;
height: 15%;

@media ${device.extraSmall} {
font-size: 0.95rem; 
}

@media ${device.small} { 
font-size: 1.2rem; 
}


@media ${device.medium} { 
}


@media ${device.large} {
font-size: 1.6rem;
}

@media ${device.extraLarge} { 
}
`