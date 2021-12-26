import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 30px;
text-align: center;
font-weight: lighter;
padding: 40px 0px 40px 0px;
`

export const ContainerCentered = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
width: 70%;

@media ${device.large} {
// background-color: red;
}

@media ${device.extraLarge} {
width: 80%;
flex-direction: row;
}
`