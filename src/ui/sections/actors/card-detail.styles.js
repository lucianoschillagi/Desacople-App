import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 80%;
height: 90vw;
border-style: solid;
border-width: 2px;
border-radius: 15px;
border-color: #707070;
margin-bottom: 40px;
padding: 15px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const CardDetailTitle = styled.h1`
font-size: 2.2rem;
`

export const CardDetailDescription = styled.p`
font-size: 1.2rem;
font-weight: lighter;
`