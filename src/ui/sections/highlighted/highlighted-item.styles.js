import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

// Container
export const Container = styled.div`
margin-right: 10px;
border: 8px solid #2f4870;
border-radius: 14px;
padding: 11px;

@media ${device.extraSmall} { 
padding: 20px;
// background-color: brown;
}

@media ${device.small} { 
background-color: blue;
}

// @media ${device.medium} { 
// width: 260px;
// }

@media ${device.large} { 
padding: 40px;
background-color: black;
}

// @media ${device.extraLarge} { 
// width: 260px;
// }

`

// Title
export const Title = styled.h4`
color: white;
opacity: 0.7;

@media ${device.extraSmall} { 
width: 300px;
}

@media ${device.small} { 
width: 400px;
}

@media ${device.large} { 
font-size: 2.4rem;
color: black;
background-color: red;
border-radius: 6px;
}
`

// Content
export const Content = styled.p`
font-size: 15px;
color: white;
padding-bottom: 20px;
// height: 100px;

@media ${device.extraSmall} { 
height: 200px;
}

@media ${device.large} { 
font-size: 1.2rem;
height: 280px;
}

`

// Where
export const Where = styled.p`
border-top: 1px solid gray;
padding-top: 10px;
font-size: 15px;
color: gray;

// @media ${device.extraSmall} { 
// background-color: red;
}

`

// Segment
export const Segment = styled.p`
font-size: 15px;
color: red;
opacity: 0.6;

@media ${device.extraSmall} { 
// background-color: green;
}
`