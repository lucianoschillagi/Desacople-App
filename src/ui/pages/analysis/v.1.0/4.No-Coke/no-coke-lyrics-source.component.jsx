import React from 'react';
import { LyricsSourceContainer,
         LyricsTitle,
         LyricsAuthor,
         LyricsContainer,
         LyricsParagraph,
         LyricsVerse,
         ShowChordsButton,
         Chords
       } from '../../../../sections/lyrics/lyrics-source.styles';

class NoCoke_LyricsSource extends React.Component {

   constructor(props) {
      super(props);
      this.state = { showingChords: true } 
      this.showChords = this.showChords.bind(this);
   }

   LINE_COLOR = "#EF9AC3";
   LINE_OPACITY = "0.5";
   SHOW_CHORDS_TEXT = "show chords";
   HIDE_CHORDS_TEXT = "hide chords";

   showChords() {
      this.setState(prevState => ({
         showingChords: !prevState.showingChords
       }));

     if (this.state.showingChords) {

      var chordButton = document.getElementById("showChordsButton");
      chordButton.style.backgroundColor = "orange";

      var chord = document.getElementById("chord");
      // var chord2 = document.getElementById("chord2");
      // var chord3 = document.getElementById("chord3");
      chord.style.display = "block";
      chord.style.opacity = "1";
      // chord2.style.display = "block";
      // chord2.style.opacity = "1";
      // chord3.style.display = "block";
      // chord3.style.opacity = "1";

     } else {

      var chordButton = document.getElementById("showChordsButton")
      chordButton.style.backgroundColor = "red"

      var chord = document.getElementById("chord");
      chord.style.display = "none";
      chord.style.opacity = "0";
      chord.style.transition = "2s linear";

      // var chord2 = document.getElementById("chord2");
      // chord2.style.display = "none";

      // var chord3 = document.getElementById("chord3");
      // chord3.style.display = "none";

     }  
  }

   render() {

    // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
    var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

    switch (currentTimeSongPrecision) {

      // Line 1 "All massive hold tight"
      case 19.9:
      var line1 = document.getElementById("line_1");
      line1.style.color = this.LINE_COLOR;
      break;

      // Line 2 "Cause when I come, I come rough"
      case 22.4:
      var line1 = document.getElementById("line_1");
      var line2 = document.getElementById("line_2");
      line1.style.opacity = this.LINE_OPACITY;  
      line1.style.fontWeight = "lighter";
      line2.style.color = this.LINE_COLOR;
      break;

      // Line 3 "Inna reggae raggamuffin business"
      case 24.5:
      var line2 = document.getElementById("line_2");
      var line3 = document.getElementById("line_3");
      line2.style.opacity = this.LINE_OPACITY; 
      line2.style.fontWeight = "lighter";
      line3.style.color = this.LINE_COLOR;
      break;
      
      // Line 4 "Come!"
      case 27:
      var line3 = document.getElementById("line_3");
      var line4 = document.getElementById("line_4");
      line3.style.opacity = this.LINE_OPACITY;   
      line4.style.color = this.LINE_COLOR;
      break;

      // Line 5 "Hip-hop reaggae inna dance hall style"
      case 28.9:
      var line4 = document.getElementById("line_4");
      var line5 = document.getElementById("line_5");
      line4.style.opacity = this.LINE_OPACITY;    
      line5.style.color = this.LINE_COLOR;
      break;

      // Line 6 "Hip-hop reaggae inna dance hall style"
      case 31:
      var line5 = document.getElementById("line_5");
      var line6 = document.getElementById("line_6");
      line5.style.opacity = this.LINE_OPACITY;  
      line6.style.color = this.LINE_COLOR;
      break;

      // Line 7 "Hip-hop reaggae inna dance hall style" 
      case 33.1:
      var line6 = document.getElementById("line_6");
      var line7 = document.getElementById("line_7");
      line6.style.opacity = this.LINE_OPACITY;   
      line7.style.color = this.LINE_COLOR;
      break;

      // Line 8 "Hip-hop reaggae inna dance hall style" 
      case 35.7:
      var line7 = document.getElementById("line_7");
      var line8 = document.getElementById("line_8");
      line7.style.opacity = this.LINE_OPACITY; 
      line8.style.color = this.LINE_COLOR;
      break;

      // Line 9 "Hip-hop reaggae inna dance hall style" 
      case 38:
      var line8 = document.getElementById("line_8");
      var line9 = document.getElementById("line_9");
      line8.style.opacity = this.LINE_OPACITY; 
      line9.style.color = this.LINE_COLOR;
      break;

      // Line 10 "Hip-hop reaggae inna dance hall style" 
      case 42:
      var line9 = document.getElementById("line_9");
      var line10 = document.getElementById("line_10");
      line9.style.opacity = this.LINE_OPACITY;  
      line10.style.color = this.LINE_COLOR;
      break;

      // Line 11 "Hip-hop reaggae inna dance hall style" 
      case 46.3:
      var line10 = document.getElementById("line_10");
      var line11 = document.getElementById("line_11");
      line10.style.opacity = this.LINE_OPACITY; 
      line11.style.color = this.LINE_COLOR;
      break;

      // Line 12 "Dis say Dr. Alban tellin' everybody"
      case 48.5:
      var line11 = document.getElementById("line_11");
      var line12 = document.getElementById("line_12");
      line11.style.opacity = this.LINE_OPACITY; 
      line12.style.color = this.LINE_COLOR;
      break;

      // Line 13 "2 o'clock on a friday mornin'"
      case 50.8:
      var line12 = document.getElementById("line_12");
      var line13 = document.getElementById("line_13");
      line12.style.opacity = this.LINE_OPACITY; 
      line13.style.color = this.LINE_COLOR;
      break;
    
      // Line 14 "Come a gun man"
      case 53.1:
      var line13 = document.getElementById("line_13");
      var line14 = document.getElementById("line_14");
      line13.style.opacity = this.LINE_OPACITY; 
      line14.style.color = this.LINE_COLOR;
      break;

      // Line 15 "Come a knife man"
      case 54.7:
      var line14 = document.getElementById("line_14");
      var line15 = document.getElementById("line_15");
      line14.style.opacity = this.LINE_OPACITY; 
      line15.style.color = this.LINE_COLOR;
      break;

      // Line 16 "Knife of a bouncer"
      case 66.1:
      var line15 = document.getElementById("line_15");
      var line16 = document.getElementById("line_16");
      line15.style.opacity = this.LINE_OPACITY;  
      line16.style.color = this.LINE_COLOR;
      break;

      // Line 17 "Mash of the ears"
      case 68.2:
      var line16 = document.getElementById("line_16");
      var line17 = document.getElementById("line_17");
      line16.style.opacity = this.LINE_OPACITY; 
      line17.style.color = this.LINE_COLOR;
      break;

      // Line 18 "On the run come a Kings Street"
      case 70.4:
      var line17 = document.getElementById("line_17");
      var line18 = document.getElementById("line_18");
      line17.style.opacity = this.LINE_OPACITY; 
      line18.style.color = this.LINE_COLOR;
      break;

      // Line 19 "There he way arrested, and tested"
      case 72.4:
      var line18 = document.getElementById("line_18");
      var line19 = document.getElementById("line_19");
      line18.style.opacity = this.LINE_OPACITY; 
      line19.style.color = this.LINE_COLOR;
      break;

      // Line 20 "And the drugs he had on him"
      case 74.6:
      var line19 = document.getElementById("line_19");
      var line20 = document.getElementById("line_20");
      line19.style.opacity = this.LINE_OPACITY; 
      line20.style.color = this.LINE_COLOR;
      break;

      // Line 21 "He confested"
      case 76.7:
      var line20 = document.getElementById("line_20");
      var line21 = document.getElementById("line_21");
      line20.style.opacity = this.LINE_OPACITY; 
      line21.style.color = this.LINE_COLOR;
      break;

      // Line 22 "Mi callin' on the youth in his country"
      case 79.1:
      var line21 = document.getElementById("line_21");
      var line22 = document.getElementById("line_22");
      line21.style.opacity = this.LINE_OPACITY; 
      line22.style.color = this.LINE_COLOR;
      break;

      // Line 23 "Whole heap of boys"
      case 81:
      var line22 = document.getElementById("line_22");
      var line23 = document.getElementById("line_23");
      line22.style.opacity = this.LINE_OPACITY;  
      line23.style.color = this.LINE_COLOR;
      break;

      // Line 24 "Whole heap of girls"
      case 83:
      var line23 = document.getElementById("line_23");
      var line24 = document.getElementById("line_24");
      line23.style.opacity = this.LINE_OPACITY; 
      line24.style.color = this.LINE_COLOR;
      break;

      // Line 25 "Drug abuse is a dangerous thing"
      case 85.7:
      var line24 = document.getElementById("line_24");
      var line25 = document.getElementById("line_25");
      line24.style.opacity = this.LINE_OPACITY; 
      line25.style.color = this.LINE_COLOR;
      break;

      // Line 26 "Stay out of drugs and stop"
      case 90:
      var line25 = document.getElementById("line_25");
      var line26 = document.getElementById("line_26");
      line25.style.opacity = this.LINE_OPACITY; 
      line26.style.color = this.LINE_COLOR;
      break;

      // Line 27 "The violence"
      case 91.9:
      var line26 = document.getElementById("line_26");
      var line27 = document.getElementById("line_27");
      line26.style.opacity = this.LINE_OPACITY; 
      line27.style.color = this.LINE_COLOR;
      break;    
      
      // Line 28 "Inna dis hard time you have"
      case 93:
      var line27 = document.getElementById("line_27");
      var line28 = document.getElementById("line_28");
      line27.style.opacity = this.LINE_OPACITY; 
      line28.style.color = this.LINE_COLOR;
      break;   

      // Line 29 "Abuse drug"
      case 96.8:
      var line28 = document.getElementById("line_28");
      var line29 = document.getElementById("line_29");
      line28.style.opacity = this.LINE_OPACITY;  
      line29.style.color = this.LINE_COLOR;
      break;   

      // Line 30 "Listen what 'ya say and hear"
      case 98.7:
      var line29 = document.getElementById("line_29");
      var line30 = document.getElementById("line_30");
      line29.style.opacity = this.LINE_OPACITY; 
      line30.style.color = this.LINE_COLOR;
      break; 

      // Line 31 "My point of view"
      case 105.1:
      var line30 = document.getElementById("line_30");
      var line31 = document.getElementById("line_31");
      line30.style.opacity = this.LINE_OPACITY; 
      line31.style.color = this.LINE_COLOR;
      break;

      // Line 32 "To much drugs you can"
      case 113.4:
      var line31 = document.getElementById("line_31");
      var line32 = document.getElementById("line_32");
      line31.style.opacity = this.LINE_OPACITY; 
      line32.style.color = this.LINE_COLOR;
      break;

      // Line 33 "Go mental"
      case 115.8:
      var line32 = document.getElementById("line_32");
      var line33 = document.getElementById("line_33");
      line32.style.opacity = this.LINE_OPACITY; 
      line33.style.color = this.LINE_COLOR;
      break;

      // Line 34 "Da say Dr."
      case 139.3:
      var line33 = document.getElementById("line_33");
      var line34 = document.getElementById("line_34");
      line33.style.opacity = this.LINE_OPACITY;  
      line34.style.color = this.LINE_COLOR;
      break;

      // Line 35 "Alban tellin' everybody"
      case 140:
      var line34 = document.getElementById("line_34");
      var line35 = document.getElementById("line_35");
      line34.style.opacity = this.LINE_OPACITY; 
      line35.style.color = this.LINE_COLOR;
      break;

      // Line 36 "We no want no coke, no heroin"
      case 142.2:
      var line35 = document.getElementById("line_35");
      var line36 = document.getElementById("line_36");
      line35.style.opacity = this.LINE_OPACITY; 
      line36.style.color = this.LINE_COLOR;
      break;

      // Line 37 "No hasch-hasch, no amphetamine"
      case 144.4:
      var line36 = document.getElementById("line_36");
      var line37 = document.getElementById("line_37");
      line36.style.opacity = this.LINE_OPACITY;  
      line37.style.color = this.LINE_COLOR;
      break;
          
      // Line 38 "Cocain will blow your brain"
      case 157.7:
      var line38 = document.getElementById("line_38");
      var line39 = document.getElementById("line_39");
      line38.style.opacity = this.LINE_OPACITY; 
      line39.style.color = this.LINE_COLOR;
      break;

      // Line 39 "And ecstasy will mush your life!"
      case 159.5:
      var line39 = document.getElementById("line_39");
      var line40 = document.getElementById("line_40");
      line39.style.opacity = this.LINE_OPACITY; 
      line40.style.color = this.LINE_COLOR;
      break;

      // Line 40 "Cocaine will blow your brain"
      case 162:
      var line40 = document.getElementById("line_40");
      var line41 = document.getElementById("line_41");
      line40.style.opacity = this.LINE_OPACITY; 
      line41.style.color = this.LINE_COLOR;
      break;

      // Line 41 "And ecstasy will mush your life!"
      case 163.9:
      var line41 = document.getElementById("line_41");
      var line42 = document.getElementById("line_42");
      line41.style.opacity = this.LINE_OPACITY;  
      line42.style.color = this.LINE_COLOR;
      break;

      // Line 42 "Drug pushing is a serious thing"
      case 166.2:
      var line42 = document.getElementById("line_42");
      var line43 = document.getElementById("line_43");
      line42.style.opacity = this.LINE_OPACITY; 
      line43.style.color = this.LINE_COLOR;
      break;

      // Line 43 "One time, two time they make a million"
      case 168.3:
      var line43 = document.getElementById("line_43");
      var line44 = document.getElementById("line_44");
      line43.style.opacity = this.LINE_OPACITY; 
      line44.style.color = this.LINE_COLOR;
      break;

      // Line 44 "Take all the money a run a foreign country"
      case 170.6:
      var line44 = document.getElementById("line_44");
      var line45 = document.getElementById("line_45");
      line44.style.opacity = this.LINE_OPACITY;  
      line45.style.color = this.LINE_COLOR;
      break;

      // Line 45 "Build a big house"
      case 172.9:
      var line45 = document.getElementById("line_45");
      var line46 = document.getElementById("line_46");
      line45.style.opacity = this.LINE_OPACITY;  
      line46.style.color = this.LINE_COLOR;
      break;

      // Line 46 "Buy a big limousine, Das why I man come"
      case 177.1:
      var line46 = document.getElementById("line_46");
      var line47 = document.getElementById("line_47");
      line46.style.opacity = this.LINE_OPACITY; 
      line47.style.color = this.LINE_COLOR;
      break;

      // Line 47 "So you for do the right thing"
      case 181.3:
      var line47 = document.getElementById("line_47");
      var line48 = document.getElementById("line_48");
      line47.style.opacity = this.LINE_OPACITY;  
      line48.style.color = this.LINE_COLOR;
      break;

      // Line 48 "Das why Jah Jah send me"
      case 183.3:
      var line48 = document.getElementById("line_48");
      var line49 = document.getElementById("line_49");
      line48.style.opacity = this.LINE_OPACITY;  
      line49.style.color = this.LINE_COLOR;
      break;

      // Line 49 "To tell them the truth"
      case 185.8:
      var line49 = document.getElementById("line_49");
      var line50 = document.getElementById("line_50");
      line49.style.opacity = this.LINE_OPACITY;  
      line50.style.color = this.LINE_COLOR;
      break;

      // Line 50 "Cause is a disgrace"
      case 188.1:
      var line50 = document.getElementById("line_50");
      var line51 = document.getElementById("line_51");
      line50.style.opacity = this.LINE_OPACITY;  
      line51.style.color = this.LINE_COLOR;
      break;

      // Line 51 "To the human race"
      case 190.1:
      var line51 = document.getElementById("line_51");
      var line52 = document.getElementById("line_52");
      line51.style.opacity = this.LINE_OPACITY; 
      line52.style.color = this.LINE_COLOR;
      break;

      // Line 52 "Some are flyin' very high"
      case 193.3:
      var line52 = document.getElementById("line_52");
      var line53 = document.getElementById("line_53");
      line52.style.opacity = this.LINE_OPACITY; 
      line53.style.color = this.LINE_COLOR;
      break;

      // Line 53 "And some are flyin' very low"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 54 "Could not differenciate"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 55 "What is right from wrong"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 56 "Want no coke, no heroin"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;
 
      // Line 57 "No hasch-hasch, no amphetamine"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 58 "No marijuana planted inna mi yard"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 59 "Cocain will blow your brain"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;
   
      // Line 60 "And ecstasy will mush your life!"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 61 "Cocaine will blow your brain"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 62 "And ecstasy will mush your life!"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 63 "Mi have one friend, them a call him Denniz Pop"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;


      // Line 64 "Him have a little son, them a call him Daniel"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;


      // Line 65 "He live a two room inna Stockholm City"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 66 "One colour TV, two stereo"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 67 "He's DJ producer of higher quality"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 68 "He no deal with booze and abuse of drug"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 69 "That's why mi give him thanks"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 70 "And praise Jah Jah know"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 71 "We play a heavy riddim inna dancehall style"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 72 "Hip Hop, Reggae, Soul, Funk and Blue"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 73 "Why crack in the mornin', crack in the evening"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 74 "Crack in the night and crack non stop"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 75 "We don't want no coke, no heroin"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 76 "Cocain will blow your brain"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 77 "And ecstasy will mush your life!"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 78 "Cocaine will blow your brain"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 79 "And ecstasy will mush your life!"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 80 "Don't give me no coke, don't give me no coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 81 "Don't give me no coke, coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 82 "Don't give me no coke, don't give me no coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 83 "Don't give me no coke, mi do not want it"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;

      // Line 84 "Don't give me no hasch, don't give me no hasch"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;
   
      // Line 85 "Don't give me no hasch, hasch"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;   

      // Line 86 "Don't give me no hasch, don't give me no hasch"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;      

      // Line 87 "Don't give me no hasch, mi do not want it"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;      
   
      // Line 88 "Don't give me no shit, don't give me no shit"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;   
 
      // Line 89 "Don't give me no shit, shit"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;      

      // Line 90 "Don't give me no shit, don't give me no shit"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;      
   
      // Line 91 "Don't give me no shit, mi do not want it"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;         
   
      // Line 92 "Don't give me no coke, don't give me no coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY;  
      line54.style.color = this.LINE_COLOR;
      break;         
   
      // Line 93 "Don't give me no coke, coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break;         
   
      // Line 94 "Don't give me no coke, don't give me no coke"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break; 
      
      // Line 95 "Don't give me no coke, mi do not want it"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = this.LINE_OPACITY; 
      line54.style.color = this.LINE_COLOR;
      break; 
  
   } 
      return ( 
         
         <LyricsSourceContainer>

            <LyricsTitle>
               No Coke
            </LyricsTitle>

            <LyricsAuthor>
               Author: Deniz Pop - Dr.Alban
            </LyricsAuthor>

            <ShowChordsButton id="showChordsButton"
                              onClick={this.showChords}>
                           {this.state.showingChords ? this.SHOW_CHORDS_TEXT : this.HIDE_CHORDS_TEXT}
            </ShowChordsButton>

            <LyricsContainer>

               <LyricsParagraph>
                  <Chords id="chord">E</Chords>
                  <LyricsVerse id="line_1">All massive hold tight</LyricsVerse>
                  <LyricsVerse id="line_2">Cause when I come, I come rough</LyricsVerse>
                  <LyricsVerse id="line_3">Inna reggae raggamuffin business</LyricsVerse>
                  <LyricsVerse id="line_4">Come!</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <Chords id="chord3">E</Chords>
                  <LyricsVerse id="line_5">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_6">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_7">Hip-hop reaggae inna dance hall style</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse id="line_8">2 o'clock on a friday mornin'</LyricsVerse>
                  <LyricsVerse id="line_9">Come a gun man</LyricsVerse>
                  <LyricsVerse id="line_10">Come a knife man</LyricsVerse>
                  <LyricsVerse id="line_11">Knife of a bouncer</LyricsVerse>
                  <LyricsVerse id="line_12">Mash of the ears</LyricsVerse>
                  <LyricsVerse id="line_13">On the run come a Kings Street</LyricsVerse>
                  <LyricsVerse id="line_14">There he way arrested, and tested</LyricsVerse>
                  <LyricsVerse id="line_15">And the drugs he had on him</LyricsVerse>
                  <LyricsVerse id="line_16">He confested</LyricsVerse>
                  <LyricsVerse id="line_17">Mi callin' on the youth in his country</LyricsVerse>
                  <LyricsVerse id="line_18">Whole heap of boys</LyricsVerse>
                  <LyricsVerse id="line_19">Whole heap of girls</LyricsVerse>
                  <LyricsVerse id="line_20">Drug abuse is a dangerous thing</LyricsVerse>
                  <LyricsVerse id="line_21">Stay out of drugs and stop</LyricsVerse>
                  <LyricsVerse id="line_22">The violence</LyricsVerse>
                  <LyricsVerse id="line_23">Inna dis hard time you have</LyricsVerse>
                  <LyricsVerse id="line_24">Abuse drug</LyricsVerse>
                  <LyricsVerse id="line_25">Listen what 'ya say and hear</LyricsVerse>
                  <LyricsVerse id="line_26">My point of view</LyricsVerse>
                  <LyricsVerse id="line_27">To much drugs you can</LyricsVerse>
                  <LyricsVerse id="line_28">Go mental</LyricsVerse>
                  <LyricsVerse id="line_29">Da say Dr.</LyricsVerse>
                  <LyricsVerse id="line_30">Alban tellin' everybody</LyricsVerse>
                  <LyricsVerse id="line_31">We no want no coke, no heroin</LyricsVerse>
                  <LyricsVerse id="line_32">No hasch-hasch, no amphetamine</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse id="line_33">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_34">And ecstasy will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_35">Cocaine will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_36">And ecstasy will mush your life!</LyricsVerse>
               </LyricsParagraph>            
               
               <LyricsParagraph>
                  <LyricsVerse id="line_37">Drug pushing is a serious thing</LyricsVerse>
                  <LyricsVerse id="line_38">One time, two time they make a million</LyricsVerse>
                  <LyricsVerse id="line_39">Take all the money a run a foreign country</LyricsVerse>
                  <LyricsVerse id="line_40">Build a big house</LyricsVerse>
                  <LyricsVerse id="line_41">Buy a big limousine, Das why I man come</LyricsVerse>
                  <LyricsVerse id="line_42">So you for do the right thing</LyricsVerse>
                  <LyricsVerse id="line_43">Das why Jah Jah send me</LyricsVerse>
                  <LyricsVerse id="line_44">To tell them the truth</LyricsVerse>
                  <LyricsVerse id="line_45">Cause is a disgrace</LyricsVerse>
                  <LyricsVerse id="line_46">To the human race</LyricsVerse>
                  <LyricsVerse id="line_47">Some are flyin' very high</LyricsVerse>
                  <LyricsVerse id="line_48">And some are flyin' very low</LyricsVerse>
                  <LyricsVerse id="line_49">Could not differenciate</LyricsVerse>
                  <LyricsVerse id="line_50">What is right from wrong</LyricsVerse>
                  <LyricsVerse id="line_51">Want no coke, no heroin</LyricsVerse>
                  <LyricsVerse id="line_52">No hasch-hasch, no amphetamine</LyricsVerse>
                  <LyricsVerse id="line_53">No marijuana planted inna mi yard</LyricsVerse>
               </LyricsParagraph>    

               <LyricsParagraph>
                  <LyricsVerse id="line_54">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_55">And ecstasy will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_56">Cocaine will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_57">And ecstasy will mush your life!</LyricsVerse>
               </LyricsParagraph>  

               <LyricsParagraph>
                  <LyricsVerse id="line_58">Mi have one friend, them a call him Denniz Pop</LyricsVerse>
                  <LyricsVerse id="line_59">Him have a little son, them a call him Daniel</LyricsVerse>
                  <LyricsVerse id="line_60">He live a two room inna Stockholm City</LyricsVerse>
                  <LyricsVerse id="line_61">One colour TV, two stereo</LyricsVerse>
                  <LyricsVerse id="line_62">He's DJ producer of higher quality</LyricsVerse>
                  <LyricsVerse id="line_63">He no deal with booze and abuse of drug</LyricsVerse>
                  <LyricsVerse id="line_64">That's why mi give him thanks</LyricsVerse>
                  <LyricsVerse id="line_65">And praise Jah Jah know</LyricsVerse>
                  <LyricsVerse id="line_66">We play a heavy riddim inna dancehall style</LyricsVerse>
                  <LyricsVerse id="line_67">Hip Hop, Reggae, Soul, Funk and Blues</LyricsVerse>
                  <LyricsVerse id="line_68">Why crack in the mornin', crack in the evening</LyricsVerse>
                  <LyricsVerse id="line_69">Crack in the night and crack non stop</LyricsVerse>
                  <LyricsVerse id="line_70">We don't want no coke, no heroin</LyricsVerse>
               </LyricsParagraph>  

               <LyricsParagraph>
                  <LyricsVerse id="line_71">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_72">And ecstasy will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_73">Cocaine will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_74">And ecstasy will mush your life!</LyricsVerse>
               </LyricsParagraph>     
               
               <LyricsParagraph>
                  <LyricsVerse id="line_75">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_76">And ecstasy will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_77">Cocaine will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_78">And ecstasy will mush your life!</LyricsVerse>
               </LyricsParagraph>  

               <LyricsParagraph>
                  <LyricsVerse id="line_79">Don't give me no coke, don't give me no coke</LyricsVerse>
                  <LyricsVerse id="line_80">Don't give me no coke, coke</LyricsVerse>
                  <LyricsVerse id="line_81">Don't give me no coke, don't give me no coke</LyricsVerse>
                  <LyricsVerse id="line_82">Don't give me no coke, mi do not want it</LyricsVerse>
               </LyricsParagraph>   

               <LyricsParagraph>
                  <LyricsVerse id="line_83">Don't give me no hasch, don't give me no hasch</LyricsVerse>
                  <LyricsVerse id="line_84">Don't give me no hasch, hasch</LyricsVerse>
                  <LyricsVerse id="line_85">Don't give me no hasch, don't give me no hasch</LyricsVerse>
                  <LyricsVerse id="line_86">Don't give me no hasch, mi do not want it</LyricsVerse>
               </LyricsParagraph>   

               <LyricsParagraph>
                  <LyricsVerse id="line_87">Don't give me no shit, don't give me no shit</LyricsVerse>
                  <LyricsVerse id="line_88">Don't give me no shit, shit</LyricsVerse>
                  <LyricsVerse id="line_89">Don't give me no shit, don't give me no shit</LyricsVerse>
                  <LyricsVerse id="line_90">Don't give me no shit, mi do not want it</LyricsVerse>
               </LyricsParagraph>   

               <LyricsParagraph>
                  <LyricsVerse id="line_91">Don't give me no crack, don't give me no crack</LyricsVerse>
                  <LyricsVerse id="line_92">Don't give me no crack, crack</LyricsVerse>
               </LyricsParagraph>   

            </LyricsContainer>

         </LyricsSourceContainer>
       );
   }
}

export default NoCoke_LyricsSource;
