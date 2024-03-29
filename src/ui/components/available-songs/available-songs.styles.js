import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
padding-top: 50px;
padding-bottom: 50px;
box-sizing: border-box;
font-size: 28px;
text-align: center;
`

export const ContainerCentered = styled.div`
display: flex;
width: 90%;
flex-direction: column;
margin: 0 auto;
@media ${device.large} { 
flex-direction: row;
width: 85%;
}
`

 

   