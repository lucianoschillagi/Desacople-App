import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const LyricsSourceContainer = styled.div`
margin: 0 auto;
width: 80%;
text-align: left;
color: white;
padding-top: 20px;
padding-bottom: 20px;

@media ${device.large} { 
width: 70%;
}
`
export const LyricsTitle = styled.h1`
@media ${device.extraSmall} { 
}

@media ${device.small} { 
font-size: 1.3em;
}

@media ${device.medium} { 


}

@media ${device.large} { 
font-size: 3em;
}

@media ${device.extraLarge} { 

}
`
export const LyricsAuthor = styled.h3`
@media ${device.large} { 
font-size: 1.5em;
font-weight: lighter;
opacity: 0.5;
}
`
export const LyricsContainer = styled.div`
`
export const LyricsParagraph = styled.div`
margin: 50px 0px 60px 0px;

@media ${device.extraSmall} { 
font-size: 0.9em;
}

@media ${device.small} { 
font-size: 1.3em;
}

@media ${device.medium} { 


}

@media ${device.large} { 
font-size: 1.2em;
}

@media ${device.extraLarge} { 

}
`

export const LyricsVerse = styled.p`
font-weight: 100;
`


