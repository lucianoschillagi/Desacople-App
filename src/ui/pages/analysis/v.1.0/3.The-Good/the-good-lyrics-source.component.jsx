import React, { Component } from 'react';
import { LyricsSourceContainer,
         LyricsTitle,
         LyricsAuthor,
         LyricsContainer
       } from '../../../../sections/lyrics/lyrics-source.styles';

class TheGood_LyricsSource extends Component {

   render() {
      return ( 
         <LyricsSourceContainer>

            <LyricsTitle>
               The Good, the bad and the ugly
            </LyricsTitle>

            <LyricsAuthor>
               Author: Ennio Morricone
            </LyricsAuthor>

            <LyricsContainer>
               the paragraph of the song goes here
            </LyricsContainer>


         </LyricsSourceContainer>
       );
   }
}

export default TheGood_LyricsSource;