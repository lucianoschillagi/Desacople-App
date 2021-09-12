import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';


export const Container = styled.div`
// display: flex; 
// flex-direction: column;
margin: 0 auto;
margin-right: 10px;
border: 8px solid #2f4870;
border-radius: 14px;
padding: 11px;
`

export const ContainerDescription = styled.div`
width: 70vw;
height: auto;
padding: 10px;
@media ${device.large} { 
width: 260px;
}
`

export const Title = styled.h4`
padding-bottom: 20px;
color: white;
opacity: 0.5;
`

export const Content = styled.p`
font-size: 15px;
color: white;
padding-bottom: 20px;
`

export const Where = styled.p`
border-top: 1px solid gray;
padding-top: 20px;
font-size: 15px;
color: gray;
`

export const Segment = styled.p`
font-size: 15px;
color: red;
opacity: 0.6;
`