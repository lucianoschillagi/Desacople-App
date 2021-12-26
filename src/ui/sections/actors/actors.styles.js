import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
padding-top: 24px;
padding-bottom: 24px;
opacity: 0.8;

@media ${device.extraSmall} { 
}

@media ${device.small} { 
}

@media ${device.medium} { 
}

@media ${device.large} { 
}

@media ${device.extraLarge} { 
}
`

export const ContainerCentered = styled.div`
margin: 0 auto;
width: calc( 75vw );
align-self: center;
display: flex;
flex-direction: column;
padding: 10px;

@media ${device.large} { 
// width: calc( 60vw );
// height: calc( 50vw );
}
`