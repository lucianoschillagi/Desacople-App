import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
width: 100%;
font-family: ff-meta-correspondence-web-p, sans-serif;
display: flex;
justify-content: center;
align-items: left;
padding-top: 50px;
// background-color: cyan;

@media ${device.extraSmall} { 
// background-color: orange;
}

@media ${device.small} { 
// background-color: black;
}

@media ${device.medium} {
// background-color: violet;
padding-top: 70px;
}

@media ${device.large} { 
// background-color: purple;
padding-top: 80px;
}

@media ${device.extraLarge} { 
// background-color: green;
padding-top: 100px;
}

`

export const ContainerCentered = styled.div`
display: flex;
flex-direction: column;
width: 75%;
text-align: left;

@media ${device.large} { 
width: 75%;
// background-color: yellow;
}
`

/* Song Quote */
export const SongQuote = styled.p` {
@media ${device.extraSmall} { 
font-size: 0.9em;
}

@media ${device.small} { 
font-size: 1.3em;
}

@media ${device.medium} { 


}

@media ${device.large} { 
font-size: 1.8em;
}

@media ${device.extraLarge} { 
}
-ms-transform: rotate(-5deg); /* IE 9 */
-webkit-transform: rotate(-5deg); /* Safari 3-8 */
transform: rotate(-5deg);
font-weight: lighter;
`

/* Song Title */
export const SongTitle = styled.p`
@media ${device.extraSmall} { 
font-size: 3.8em;
}

@media ${device.small} { 
font-size: 50px;
}

@media ${device.medium} { 
font-size: 4.5em;
}

@media ${device.large} { 
font-size: 6em;
width: 600px;
// background-color: red;
}

@media ${device.extraLarge} {
font-size: 6.5em;
}
`

/* Song Written by */
export const SongWrittenBy = styled.em` {
padding-top: 10px;
padding-left: 5px;
font-size: 1.1em;
font-weight: lighter;
background-color: red;

@media ${device.extraSmall} { 
font-size: 1em;
}

@media ${device.small} { 
background-color: red;
}

@media ${device.medium} { 
background-color: red;
}

@media ${device.large} { 
background-color: red;
}

@media ${device.extraLarge} { 
font-size: 1.8em;
}
`

/* Song Composer */
export const SongComposer = styled.p` {
padding-left: 5px;
font-size: 1.1em;
background-color: red;
opacity: 0.5;

@media ${device.extraSmall} {
background-color: red;
font-size: 1.35em;
}

@media ${device.small} { 
font-size: 1.4em;
}

@media ${device.medium} { 
font-size: 1.6em;
}

@media ${device.large} { 
font-size: 1.8em;
}

@media ${device.extraLarge} { 
font-size: 2em;
}

`
export const SongInfoContainer = styled.div`
width: 100%;
text-align: left;

@media ${device.large} { 
// background-color: red;
}
`

/* Song Info */
export const SongInfo = styled.h2`
font-weight: lighter;
padding-left: 5px;
color: white;

@media ${device.extraSmall} { 
font-size: 0.9em;
}

@media ${device.small} { 
font-size: 1.1em;
}

@media ${device.medium} {
font-size: 1em;
}

@media ${device.large} {
font-size: 1.25em;
// background-color: orange;
}

@media ${device.extraLarge} {
font-size: 1.2em;
}
`

/* Song Moods */
export const SongMoods = styled.p`
padding-top: 15px;
margin-bottom: 100px;
padding-left: 5px;
color: red;
font-size: 0.9em;
`

/* Song Age */
export const SongAge = styled.em`
// padding-top: 15px;
margin-bottom: 100px;
font-weight: lighter;
padding-left: 5px;
opacity: 0.4;

@media ${device.extraSmall} { 
font-size: 0.85em;
}

@media ${device.small} { 
font-size: 1em;
}

@media ${device.medium} {
font-size: 1em;
}

@media ${device.large} {
font-size: 1em;
padding-top: 40px;
}

@media ${device.extraLarge} {
font-size: 1em;
}
`


/********************************* */
/* Adaptative Web Desing  **********/
/********************************* */

//  /* SmartPhones (extra small devices  */
//   @media screen and (min-width: 375px) {

//   .CoverSection_song_name {
//      font-size: 3.4em;
//   }

// } 
//   /* Tablet Portrait  */
//   @media screen and (min-width: 768px) {

//   .CoverSection_container_100 {
//    height: 900px;
//   }

//   .CoverSection_container_centered {
//    padding-top: 16%;
//   }

//    .CoverSection_quote_song {
//        font-size: 1.2em;
//        padding-bottom: 30px;
//       }
//   .CoverSection_song_name {
//        font-size: 3.7em;
//        padding-right: 80px;
//   }

//   .CoverSection_composers {
//      font-size: 1.55em;
//   }

//   .CoverSection_album_name {
//      font-size: 1.2em;
//   }

//   .CoverSection_artist_name {
//      font-size: 1.2em;
//   }

//   .CoverSection_release_year {
//      padding-top: 30px;
//      font-size: 2.2em;
//   }
// }

//   /* Laptop or Tablet Landscape (large devices) */
//   @media screen and (min-width: 1000px) {

//        .CoverSection_container_100 {
//            height: 900px;
//        }

//        .CoverSection_container_centered {
//            width: 60%;
//            padding-right: 30%;
//         }

//      .CoverSection_quote_song {
//         font-size: 1em;
//         padding-bottom: 15px;
//      }

//      .CoverSection_song_name {
//         width: 85%;
//            font-size: 5.2em;
//      }

//      .CoverSection_composers {
//         font-size: 1.25em;
//      }

//      .CoverSection_album_name {
//         font-size: 1.1em;
//      }

//      .CoverSection_artist_name {
//         font-size: 1.1em;
//      }

//      .CoverSection_release_year {
//         padding-top: 20px;
//         font-size: 1.7em;
//      }
//   }

//    /* Desktop  */
//    @media screen and (min-width: 1400px) {

//    .CoverSection_container_centered {
//        padding: 20px 0px 200px 0px;
//    }

//    /* song info */
//    .CoverSection_quote_song {
//        font-size: 1.2em;
//        padding-bottom: 40px;
//    }

//    .CoverSection_song_name {
//        font-size: 5.25em;
//    }

//    .CoverSection_composers {
//        font-size: 1.5em;
//    }

//    .CoverSection_album_name {
//        font-size: 1.1em;
//    }

//    .CoverSection_artist_name {
//        font-size: 1.1em;
//    }

//    .CoverSection_release_year {
//        font-size: 2em;
//    }

//   }




