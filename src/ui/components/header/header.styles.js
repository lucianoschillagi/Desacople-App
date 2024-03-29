import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 75px;
box-sizing: border-box;
font-size: 14px;
text-align: center;
font-weight: lighter;
padding-top: 10px;
@media ${device.large} { 
padding-top: 30px;
}
`

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
height: 55px;
// background-color: yellow;
`

export const ProductLogo = styled.img`
height: 40px;
@media ${device.large} { 
height: 50px;
}
`

export const ProductContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 55px;
`

export const ProductName = styled.h1`
text-align: center;
letter-spacing: 6px;
font-size: 1.15em;
font-weight: lighter;
@media ${device.large} { 
font-size: 1.5em;
}
`
