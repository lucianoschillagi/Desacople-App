import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
text-align: center;
width: 80%;
height: 300px;
margin-bottom: 40px;
padding: 18px;
border-style: solid;
border-width: 5px;
border-image: linear-gradient(45deg, rgb(255,255,255), rgb(128,128,128)) 1;
border-radius: 10px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const CardDetailTitle = styled.h1`
font-size: 2.2rem;
`

export const CardDetailDescription = styled.p`
font-size: 1rem;
font-weight: lighter;
`