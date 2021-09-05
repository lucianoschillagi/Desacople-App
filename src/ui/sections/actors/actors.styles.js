import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
padding-top: 24px;
opacity: 0.8;
`

export const ContainerCentered = styled.div`
margin: 0 auto;
width: calc( 75vw );
height: calc( 100vh );
text-align: left;
@media ${device.large} { 
width: calc( 60vw );
height: calc( 50vw );
}
`