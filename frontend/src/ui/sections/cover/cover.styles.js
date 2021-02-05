import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: left;
padding-top: 50px;
`

export const ContainerCentered = styled.div`
display: flex;
flex-direction: column;
width: 75%;
font-size: 15px;
text-align: left;
`

export const QuoteSong = styled.h3`
font-size: 0.9em;
-ms-transform: rotate(-5deg); /* IE 9 */
-webkit-transform: rotate(-5deg); /* Safari 3-8 */
transform: rotate(-5deg);
font-weight: lighter;
`

export const SongTitle = styled.h1`
font-size: 3.5rem;
`

export const Composers = styled.h2`
font-size: 1.5em;
padding-top: 10px;
padding-left: 5px;
font-size: 1.1em;
font-weight: lighter;
`

export const SongInfoContainer = styled.div`
height: auto;
`

export const SongInfo = styled.h2`
font-size: 1rem;
padding-left: 5px;
font-weight: lighter;
`

export const FromYears = styled.em`
padding-top: 15px;
margin-bottom: 100px;
font-size: 0.8rem;
font-weight: lighter;
padding-left: 5px;
opacity: 0.4;
`