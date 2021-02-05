import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 80%;
height: 360px;
border-style: solid;
border-width: 7px;
border-radius: 15px;
border-color: #707070;
margin-bottom: 50px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const CardTitle = styled.div`
height: 25%;
font-size: 1em;
padding-top: 10%;
align-items: center;
color: white;
`

export const CardDescription = styled.div`
width: 100%;
height: 25%;
text-align: center;
padding: 10px;
font-size: 0.5em;
`