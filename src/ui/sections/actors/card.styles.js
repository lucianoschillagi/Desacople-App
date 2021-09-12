import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 450px;
height: 150px;
// background-color: red;
margin: 0px 10px 0px 10px;
padding: 30px;
border: solid gray 2px;
border-radius: 10px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
text-align: center;
`

export const CardTitle = styled.h1`
font-size: 22px;
`

export const CardDescription = styled.div`
font-size: 14px;
`