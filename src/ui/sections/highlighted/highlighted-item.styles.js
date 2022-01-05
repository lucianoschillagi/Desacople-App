import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

// Container
export const Container = styled.div`
margin-right: 10px;
border: 8px solid #2f4870;
border-radius: 14px;
padding: 11px;

@media ${device.extraSmall} { 
// background-color: brown;
}

// @media ${device.small} { 
// width: 260px;
// }

// @media ${device.medium} { 
// width: 260px;
// }

// @media ${device.large} { 
// width: 260px;
// }

// @media ${device.extraLarge} { 
// width: 260px;
// }

`

// Title
export const Title = styled.h4`
color: white;
opacity: 0.5;

@media ${device.extraSmall} { 
width: 300px;
height: 10%;
// background-color: cyan;
}
`

// Content
export const Content = styled.p`
font-size: 15px;
color: white;
padding-bottom: 20px;
// height: 100px;

@media ${device.extraSmall} { 
// background-color: purple;
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