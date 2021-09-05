import React, { Component } from 'react';
import { LyricsSourceContainer,
         LyricsTitle,
         LyricsAuthor,
         LyricsContainer,
         LyricsParagraph,
         LyricsVerse,
         ShowChords,
         Chords
       } from '../../../../sections/lyrics/lyrics-source.styles';

   class Satisfaction_LyricsSource extends Component {

      constructor(props) {
         super(props);
         this.state = { 
                        showingChords: false
                      } 
         this.showChords = this.showChords.bind(this);
      }
   
      color = "#EF9AC3"

      showChords() {
         this.setState(prevState => ({
            showingChords: !prevState.showingChords
          }));
         console.log("Show chords!!!")
   
        if (this.state.showingChords === true) {
         console.log("Show chords!!!")
   
         var chordButton = document.getElementById("showChordsButton")
         chordButton.style.textDecoration = "none"
         chordButton.style.opacity = "1"
   
         var chord = document.getElementById("chord");
         var chord2 = document.getElementById("chord2");
         var chord3 = document.getElementById("chord3");
         chord.style.display = "block";
         chord.style.opacity = "1";
         chord2.style.display = "block";
         chord2.style.opacity = "1";
         chord3.style.display = "block";
         chord3.style.opacity = "1";
   
        } else {
   
         var chordButton = document.getElementById("showChordsButton")
         chordButton.style.textDecoration = "line-through"
         chordButton.style.opacity = "0.4"
   
         var chord = document.getElementById("chord");
         chord.style.display = "none";
         chord.style.opacity = "0";
         chord.style.transition = "2s linear";
   
         var chord2 = document.getElementById("chord2");
         chord2.style.display = "none";
   
         var chord3 = document.getElementById("chord3");
         chord3.style.display = "none";
   
        }  
     }

      render() {
         return ( 
         
           <LyricsSourceContainer>

           
            <LyricsTitle>
               Satisfaction
            </LyricsTitle>

            <LyricsAuthor>
               Author: Jagger - Richards
            </LyricsAuthor> 

            <ShowChords id="showChordsButton"
                        onClick={this.showChords}>
                           chords
            </ShowChords>

      
            <LyricsContainer>

               <LyricsParagraph>
                  <Chords id="chord">E</Chords>
                  <LyricsVerse>I can't get no satisfaction, I can't get no satisfaction</LyricsVerse>
                  <LyricsVerse>'Cause I try and I try and I try and I try</LyricsVerse>
                  <LyricsVerse>I can't get no, I can't get no</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <Chords id="chord2">A</Chords>
                  <LyricsVerse>When I'm drivin' in my car, and the man come on the radio</LyricsVerse>
                  <LyricsVerse>He's tellin' me more and more about some useless information</LyricsVerse>
                  <LyricsVerse>Supposed to fire my imagination</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <Chords id="chord3">E</Chords>
                  <LyricsVerse>I can't get no, oh, no, no, no, hey, hey, hey</LyricsVerse>
                  <LyricsVerse>That's what I say</LyricsVerse>
                  <LyricsVerse>I can't get no satisfaction, I can't get no satisfaction</LyricsVerse>
                  <LyricsVerse>'Cause I try and I try and I try and I try</LyricsVerse>
                  <LyricsVerse>I can't get no, I can't get no</LyricsVerse>
               </LyricsParagraph>
               
               <LyricsParagraph>
                  <LyricsVerse>When I'm watchin' my TV and a man comes on and tells me</LyricsVerse>
                  <LyricsVerse>How white my shirts can be</LyricsVerse>
                  <LyricsVerse>But, he can't be a man 'cause he doesn't smoke</LyricsVerse>
                  <LyricsVerse>The same cigarettes as me</LyricsVerse>
               </LyricsParagraph>
               
               <LyricsParagraph>
                  <LyricsVerse>I can't get no, oh, no, no, no, hey, hey, hey</LyricsVerse>
                  <LyricsVerse>That's what I say</LyricsVerse>
                  <LyricsVerse>I can't get no satisfaction, I can't get no girl reaction</LyricsVerse>
                  <LyricsVerse>'Cause I try and I try and I try and I try</LyricsVerse>
                  <LyricsVerse>I can't get no, I can't get no</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse>When I'm ridin' 'round the world</LyricsVerse>
                  <LyricsVerse>And I'm doin' this and I'm signin' that</LyricsVerse>
                  <LyricsVerse>And I'm tryin' to make some girl, who tells me</LyricsVerse>
                  <LyricsVerse>Baby, better come back maybe next week</LyricsVerse>
                  <LyricsVerse> Can't you see I'm on a losing streak?</LyricsVerse>
               </LyricsParagraph>
               
               <LyricsParagraph>
                  <LyricsVerse>I can't get no, oh, no, no, no, hey, hey, hey</LyricsVerse>
                  <LyricsVerse>That's what I say, I can't get no, I can't get no</LyricsVerse>
                  <LyricsVerse>I can't get no satisfaction, no satisfaction</LyricsVerse>
                  <LyricsVerse>No satisfaction, no satisfaction</LyricsVerse>
                  <LyricsVerse>I can't get no</LyricsVerse>
               </LyricsParagraph> 
               

            </LyricsContainer>


         </LyricsSourceContainer>
       );
   }
}

export default Satisfaction_LyricsSource;