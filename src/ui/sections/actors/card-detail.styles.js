import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
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
width: 80%;
font-size: 2.2rem;
padding: 10px;
text-align: center;
font-size: 30px;
align-self: center;
`

export const CardDetailDescription = styled.div`
width: 80%;
font-size: 1rem;
font-weight: lighter;
padding: 10px;
text-align: center;
align-self: center;
`

export const CardDetailPlayedBy = styled.p`
font-size: 1rem;
color: orange;
height: 15%;
`