import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
width: 100%;
padding-top: 50px;
padding-bottom: 50px;
box-sizing: border-box;
font-size: 30px;
text-align: center;
`

export const ContainerCentered = styled.div`
width: 80%;
margin: 0 auto;
`

export const Title = styled.h1`
box-sizing: border-box;
width: 100%;
font-size: 1.6em;
@media ${device.large} { 
padding-top: 60px;
margin: 0 auto;
font-size: 3em;
width: 60vw;
}
`

export const Subtitle = styled.h2`
width: 100%;
margin-top: 20px;
font-size: 0.55em;
font-weight: lighter;
@media ${device.large} { 
padding-top: 20px;
font-size: 1em;
}
`