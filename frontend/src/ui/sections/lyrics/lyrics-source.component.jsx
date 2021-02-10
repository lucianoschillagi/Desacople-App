import React, { Component } from 'react';
import { LyricsSourceContainer,
         LyricsTitle,
         LyricsAuthor,
         LyricsContainer
       } from './lyrics-source.styles';

class LyricsSource extends Component {

   render() {
      return ( 
         <LyricsSourceContainer>

            <LyricsTitle>
               Another One Bites the Dust
            </LyricsTitle>

            <LyricsAuthor>
               Author: John Deacon
            </LyricsAuthor>

            <LyricsContainer>
               the paragraph of the song goes here
            </LyricsContainer>


         </LyricsSourceContainer>
       );
   }
}

export default LyricsSource;