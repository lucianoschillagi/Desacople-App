import React from 'react';
import { LyricsSourceContainer,
			LyricsTitle,
			LyricsAuthor,
			LyricsContainer,
			LyricsParagraph,
			LyricsVerse,
         ShowChords,
         Chords
       } from '../../../../sections/lyrics/lyrics-source.styles';


class NoCoke_LyricsSource extends React.Component {

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

    // convierte el valor de 'currentTimeSong' en un nro con un sólo decimal. Ej: 3.4
    var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

    switch (currentTimeSongPrecision) {

      // NOTE: Garageband -5.4sec 

      // Line 1 "Ooh, let's go!"
      case 19.9:
      var line1 = document.getElementById("line_1");
      line1.style.color = this.color;
      break;

      // Line 2 "Steve walks warily down the STREET"
      case 22.4:
      var line1 = document.getElementById("line_1");
      var line2 = document.getElementById("line_2");
      line1.style.opacity = "0.5";  
      line1.style.fontWeight = "lighter";
      line2.style.color = this.color;
      break;

      // Line 3 "With the brim pulled way down LOW"
      case 24.5:
      var line2 = document.getElementById("line_2");
      var line3 = document.getElementById("line_3");
      line2.style.opacity = "0.5";
      line2.style.fontWeight = "lighter";
      line3.style.color = this.color;
      break;
      
      // Line 4 "Ain't no sound but the sound of his FEET,"
      case 27:
      var line3 = document.getElementById("line_3");
      var line4 = document.getElementById("line_4");
      line3.style.opacity = "0.5";   
      line4.style.color = this.color;
      break;

      // Line 5 "Machine guns ready to GO"
      case 28.9:
      var line4 = document.getElementById("line_4");
      var line5 = document.getElementById("line_5");
      line4.style.opacity = "0.5";   
      line5.style.color = this.color;
      break;

      // Line 6 "Are you ready, hey, are you ready for THIS?"
      case 31:
      var line5 = document.getElementById("line_5");
      var line6 = document.getElementById("line_6");
      line5.style.opacity = "0.5";  
      line6.style.color = this.color;
      break;

      // Line 7 "Are you hanging on the edge of your SEAT?" 
      case 33.1:
      var line6 = document.getElementById("line_6");
      var line7 = document.getElementById("line_7");
      line6.style.opacity = "0.5";   
      line7.style.color = this.color;
      break;

      // Line 8 "Out of the doorway the bullets RIP" 
      case 35.7:
      var line7 = document.getElementById("line_7");
      var line8 = document.getElementById("line_8");
      line7.style.opacity = "0.5"; 
      line8.style.color = this.color;
      break;

      // Line 9 "To the sound of the BEAT" 
      case 38:
      var line8 = document.getElementById("line_8");
      var line9 = document.getElementById("line_9");
      line8.style.opacity = "0.5"; 
      line9.style.color = this.color;
      break;

      // Line 10 "Another one bites the dust" 
      case 42:
      var line9 = document.getElementById("line_9");
      var line10 = document.getElementById("line_10");
      line9.style.opacity = "0.5";  
      line10.style.color = this.color;
      break;

      // Line 11 "Another one bites the dust" 
      case 46.3:
      var line10 = document.getElementById("line_10");
      var line11 = document.getElementById("line_11");
      line10.style.opacity = "0.5"; 
      line11.style.color = this.color;
      break;

      // Line 12 "And another one gone, and another one gone"
      case 48.5:
      var line11 = document.getElementById("line_11");
      var line12 = document.getElementById("line_12");
      line11.style.opacity = "0.5"; 
      line12.style.color = this.color;
      break;

      // Line 13 "Another one bites the dust, yeah"
      case 50.8:
      var line12 = document.getElementById("line_12");
      var line13 = document.getElementById("line_13");
      line12.style.opacity = "0.5"; 
      line13.style.color = this.color;
      break;
    
      // Line 14 "Hey, I'm gonna get you too"
      case 53.1:
      var line13 = document.getElementById("line_13");
      var line14 = document.getElementById("line_14");
      line13.style.opacity = "0.5"; 
      line14.style.color = this.color;
      break;

      // Line 15 "Another one bites the dust"
      case 54.7:
      var line14 = document.getElementById("line_14");
      var line15 = document.getElementById("line_15");
      line14.style.opacity = "0.5"; 
      line15.style.color = this.color;
      break;

      // Line 16 "How do you think I'm going to get along"
      case 66.1:
      var line15 = document.getElementById("line_15");
      var line16 = document.getElementById("line_16");
      line15.style.opacity = "0.5"; 
      line16.style.color = this.color;
      break;

      // Line 17 "Without you, when you're gone"
      case 68.2:
      var line16 = document.getElementById("line_16");
      var line17 = document.getElementById("line_17");
      line16.style.opacity = "0.5"; 
      line17.style.color = this.color;
      break;

      // Line 18 "You took me for everything that I had"
      case 70.4:
      var line17 = document.getElementById("line_17");
      var line18 = document.getElementById("line_18");
      line17.style.opacity = "0.5"; 
      line18.style.color = this.color;
      break;

      // Line 19 "And kicked me out on my own"
      case 72.4:
      var line18 = document.getElementById("line_18");
      var line19 = document.getElementById("line_19");
      line18.style.opacity = "0.5"; 
      line19.style.color = this.color;
      break;

      // Line 20 "Are you happy, are you satisfied?"
      case 74.6:
      var line19 = document.getElementById("line_19");
      var line20 = document.getElementById("line_20");
      line19.style.opacity = "0.5"; 
      line20.style.color = this.color;
      break;

      // Line 21 "How long can you stand the heat?"
      case 76.7:
      var line20 = document.getElementById("line_20");
      var line21 = document.getElementById("line_21");
      line20.style.opacity = "0.5"; 
      line21.style.color = this.color;
      break;

      // Line 22 "Out of the doorway the bullets rip"
      case 79.1:
      var line21 = document.getElementById("line_21");
      var line22 = document.getElementById("line_22");
      line21.style.opacity = "0.5"; 
      line22.style.color = this.color;
      break;

      // Line 23 "To the sound of the beat"
      case 81:
      var line22 = document.getElementById("line_22");
      var line23 = document.getElementById("line_23");
      line22.style.opacity = "0.5"; 
      line23.style.color = this.color;
      break;

      // Line 24 "Look out"
      case 83:
      var line23 = document.getElementById("line_23");
      var line24 = document.getElementById("line_24");
      line23.style.opacity = "0.5"; 
      line24.style.color = this.color;
      break;

      // Line 25 "Another one bites the dust"
      case 85.7:
      var line24 = document.getElementById("line_24");
      var line25 = document.getElementById("line_25");
      line24.style.opacity = "0.5"; 
      line25.style.color = this.color;
      break;

      // Line 26 "Another one bites the dust"
      case 90:
      var line25 = document.getElementById("line_25");
      var line26 = document.getElementById("line_26");
      line25.style.opacity = "0.5"; 
      line26.style.color = this.color;
      break;

      // Line 27 "And another one gone, and another one gone"
      case 91.9:
      var line26 = document.getElementById("line_26");
      var line27 = document.getElementById("line_27");
      line26.style.opacity = "0.5"; 
      line27.style.color = this.color;
      break;    
      
      // Line 28 "Another one bites the dust"
      case 93:
      var line27 = document.getElementById("line_27");
      var line28 = document.getElementById("line_28");
      line27.style.opacity = "0.5"; 
      line28.style.color = this.color;
      break;   

      // Line 29 "Hey, I'm gonna get you, too"
      case 96.8:
      var line28 = document.getElementById("line_28");
      var line29 = document.getElementById("line_29");
      line28.style.opacity = "0.5"; 
      line29.style.color = this.color;
      break;   

      // Line 30 "Another one bites the dust"
      case 98.7:
      var line29 = document.getElementById("line_29");
      var line30 = document.getElementById("line_30");
      line29.style.opacity = "0.5"; 
      line30.style.color = this.color;
      break; 

      // Line 31 "Hey"
      case 105.1:
      var line30 = document.getElementById("line_30");
      var line31 = document.getElementById("line_31");
      line30.style.opacity = "0.5"; 
      line31.style.color = this.color;
      break;

      // Line 32 "Oh, take it"
      case 113.4:
      var line31 = document.getElementById("line_31");
      var line32 = document.getElementById("line_32");
      line31.style.opacity = "0.5"; 
      line32.style.color = this.color;
      break;

      // Line 33 "Bite the dust, hey"
      case 115.8:
      var line32 = document.getElementById("line_32");
      var line33 = document.getElementById("line_33");
      line32.style.opacity = "0.5"; 
      line33.style.color = this.color;
      break;

      // Line 34 "Another one bites the dust"
      case 139.3:
      var line33 = document.getElementById("line_33");
      var line34 = document.getElementById("line_34");
      line33.style.opacity = "0.5"; 
      line34.style.color = this.color;
      break;

      // Line 35 "Another one bites the dust, ow"
      case 140:
      var line34 = document.getElementById("line_34");
      var line35 = document.getElementById("line_35");
      line34.style.opacity = "0.5"; 
      line35.style.color = this.color;
      break;

      // Line 36 "Another one bites the dust, hey hey"
      case 142.2:
      var line35 = document.getElementById("line_35");
      var line36 = document.getElementById("line_36");
      line35.style.opacity = "0.5"; 
      line36.style.color = this.color;
      break;

      // Line 37 "Another one bites the dust, hey-eh-eh"
      case 144.4:
      var line36 = document.getElementById("line_36");
      var line37 = document.getElementById("line_37");
      line36.style.opacity = "0.5"; 
      line37.style.color = this.color;
      break;
          
      // Line 39 "There are plenty of ways you can hurt a man"
      case 157.7:
      var line38 = document.getElementById("line_38");
      var line39 = document.getElementById("line_39");
      line38.style.opacity = "0.5"; 
      line39.style.color = this.color;
      break;

      // Line 40 "And bring him to the ground"
      case 159.5:
      var line39 = document.getElementById("line_39");
      var line40 = document.getElementById("line_40");
      line39.style.opacity = "0.5"; 
      line40.style.color = this.color;
      break;

      // Line 41 "You can beat him, you can cheat him, you can treat him bad"
      case 162:
      var line40 = document.getElementById("line_40");
      var line41 = document.getElementById("line_41");
      line40.style.opacity = "0.5"; 
      line41.style.color = this.color;
      break;

      // Line 42 "And leave him when he's down, yeah"
      case 163.9:
      var line41 = document.getElementById("line_41");
      var line42 = document.getElementById("line_42");
      line41.style.opacity = "0.5"; 
      line42.style.color = this.color;
      break;

      // Line 43 "But I'm ready, yes I'm ready for you"
      case 166.2:
      var line42 = document.getElementById("line_42");
      var line43 = document.getElementById("line_43");
      line42.style.opacity = "0.5"; 
      line43.style.color = this.color;
      break;

      // Line 44 "I'm standing on my own two feet"
      case 168.3:
      var line43 = document.getElementById("line_43");
      var line44 = document.getElementById("line_44");
      line43.style.opacity = "0.5"; 
      line44.style.color = this.color;
      break;

      // Line 45 "Out of the doorway the bullets rip"
      case 170.6:
      var line44 = document.getElementById("line_44");
      var line45 = document.getElementById("line_45");
      line44.style.opacity = "0.5"; 
      line45.style.color = this.color;
      break;

      // Line 46 "Repeating the sound of the beat"
      case 172.9:
      var line45 = document.getElementById("line_45");
      var line46 = document.getElementById("line_46");
      line45.style.opacity = "0.5"; 
      line46.style.color = this.color;
      break;

      // Line 47 "Oh yeah"
      case 177.1:
      var line46 = document.getElementById("line_46");
      var line47 = document.getElementById("line_47");
      line46.style.opacity = "0.5"; 
      line47.style.color = this.color;
      break;

      // Line 48 "Another one bites the dust"
      case 181.3:
      var line47 = document.getElementById("line_47");
      var line48 = document.getElementById("line_48");
      line47.style.opacity = "0.5"; 
      line48.style.color = this.color;
      break;

      // Line 49 "Another one bites the dust"
      case 183.3:
      var line48 = document.getElementById("line_48");
      var line49 = document.getElementById("line_49");
      line48.style.opacity = "0.5"; 
      line49.style.color = this.color;
      break;

      // Line 50 "And another one gone, and another one gone"
      case 185.8:
      var line49 = document.getElementById("line_49");
      var line50 = document.getElementById("line_50");
      line49.style.opacity = "0.5"; 
      line50.style.color = this.color;
      break;

      // Line 51 "Another one bites the dust, yeah"
      case 188.1:
      var line50 = document.getElementById("line_50");
      var line51 = document.getElementById("line_51");
      line50.style.opacity = "0.5"; 
      line51.style.color = this.color;
      break;

      // Line 52 "Hey, I'm gonna get you, too"
      case 190.1:
      var line51 = document.getElementById("line_51");
      var line52 = document.getElementById("line_52");
      line51.style.opacity = "0.5"; 
      line52.style.color = this.color;
      break;

      // Line 53 "Shoot out"
      case 193.3:
      var line52 = document.getElementById("line_52");
      var line53 = document.getElementById("line_53");
      line52.style.opacity = "0.5"; 
      line53.style.color = this.color;
      break;

      // Line 54 "Ay-yeah"
      case 196.8:
      var line53 = document.getElementById("line_53");
      var line54 = document.getElementById("line_54");
      line53.style.opacity = "0.5"; 
      line54.style.color = this.color;
      break;

      // Line 55 "Alright"
      // case 200.3:
      // var line54 = document.getElementById("line_54");
      // var line55 = document.getElementById("line_55");
      // line54.style.opacity = "0.5"; 
      // line55.style.color = this.color;
      // break;

      // Line 56 (End)
      // case 203:
      //   var line55 = document.getElementById("line_55");
      //   line55.style.opacity = "0.5"; ;
      //   break;
    } 
      return ( 
         
         <LyricsSourceContainer>

            <LyricsTitle>
               No Coke
            </LyricsTitle>

            <LyricsAuthor>
               Author: Deniz Pop - Dr.Alban
            </LyricsAuthor>

            <ShowChords id="showChordsButton"
                        onClick={this.showChords}>
                           chords
            </ShowChords>

            <LyricsContainer>

               <LyricsParagraph>
                  <Chords id="chord">E</Chords>
                  <LyricsVerse id="line_1">Cause when I come I come rough</LyricsVerse>
                  <LyricsVerse id="line_2">Inna reaggae raggamuffin business</LyricsVerse>
                  <LyricsVerse id="line_3">Kom!</LyricsVerse>
                  <Chords id="chord3">E</Chords>
                  <LyricsVerse id="line_4">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_5">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_6">Hip-hop reaggae inna dance hall style</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse id="line_7">2 o'clock on a friday mornin'</LyricsVerse>
                  <LyricsVerse id="line_8">Come a gun man</LyricsVerse>
                  <LyricsVerse id="line_9">Come a knife man</LyricsVerse>
                  <LyricsVerse id="line_10">Knife of a bouncer</LyricsVerse>
                  <LyricsVerse id="line_11">Mash of the ears</LyricsVerse>
                  <LyricsVerse id="line_12">On the run come a Kings Street</LyricsVerse>
                  <LyricsVerse id="line_13">There he way arrested, and tested</LyricsVerse>
                  <LyricsVerse id="line_14">And the drugs he had on him</LyricsVerse>
                  <LyricsVerse id="line_15">He confested</LyricsVerse>
                  <LyricsVerse id="line_16">Mi callin' on the youth in his country</LyricsVerse>
                  <LyricsVerse id="line_17">Whole heap of boys</LyricsVerse>
                  <LyricsVerse id="line_18">Whole heap of girls</LyricsVerse>
                  <LyricsVerse id="line_19">Drug abuse is a dangerous thing</LyricsVerse>
                  <LyricsVerse id="line_20">Stay out of drugs and stop</LyricsVerse>
                  <LyricsVerse id="line_21">The violence</LyricsVerse>
                  <LyricsVerse id="line_22">Inna dis hard time you have</LyricsVerse>
                  <LyricsVerse id="line_23">Abuse drug</LyricsVerse>
                  <LyricsVerse id="line_24">Listen what 'ya say and hear</LyricsVerse>
                  <LyricsVerse id="line_25">My point of view</LyricsVerse>
                  <LyricsVerse id="line_26">To much drugs you can</LyricsVerse>
                  <LyricsVerse id="line_27">Go mental</LyricsVerse>
                  <LyricsVerse id="line_28">Da say Dr.</LyricsVerse>
                  <LyricsVerse id="line_29">Alban tellin' everybody</LyricsVerse>
                  <LyricsVerse id="line_30">We no want no coke, no heroin</LyricsVerse>
                  <LyricsVerse id="line_31">No hasch-hasch, no amphetamine</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse id="line_32">'Cause when I come I come rough</LyricsVerse>
                  <LyricsVerse id="line_33">Inna reaggae raggamuffin business</LyricsVerse>
                  <LyricsVerse id="line_34">Kom!</LyricsVerse>
                  <LyricsVerse id="line_35">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_36">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_37">Hip-hop reaggae inna dance hall style</LyricsVerse>
               </LyricsParagraph>

               <LyricsParagraph>
                  <LyricsVerse id="line_38">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_39">And ecstasy</LyricsVerse>
                  <LyricsVerse id="line_40">Will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_41">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_42">And ecstasy</LyricsVerse>
                  <LyricsVerse id="line_43">Will mush your life!</LyricsVerse>
               </LyricsParagraph>            
               
               <LyricsParagraph>
                  <LyricsVerse id="line_44">Drug pushing is a serious thing</LyricsVerse>
                  <LyricsVerse id="line_45">One time, two time they make a million</LyricsVerse>
                  <LyricsVerse id="line_46">Take all the money a run a foreign country</LyricsVerse>
                  <LyricsVerse id="line_47">Build a big house</LyricsVerse>
                  <LyricsVerse id="line_48">Buy a big limousine, Das why I man come</LyricsVerse>
                  <LyricsVerse id="line_49">So you for do the right thing</LyricsVerse>
                  <LyricsVerse id="line_50">Das why Jah Jah send me</LyricsVerse>
                  <LyricsVerse id="line_51">To tell them the truth</LyricsVerse>
                  <LyricsVerse id="line_52">Cause is a disgrace</LyricsVerse>
                  <LyricsVerse id="line_53">To the human race</LyricsVerse>
                  <LyricsVerse id="line_54">Some are flyin' very high</LyricsVerse>
                  <LyricsVerse id="line_55">And some are flyin' very low</LyricsVerse>
                  <LyricsVerse id="line_56">Could not differenciate</LyricsVerse>
                  <LyricsVerse id="line_57">What is right from wrong</LyricsVerse>
                  <LyricsVerse id="line_58">Want no coke, no heroin</LyricsVerse>
               </LyricsParagraph>    

               <LyricsParagraph>
                  <LyricsVerse id="line_59">'Cause when I come I come rough</LyricsVerse>
                  <LyricsVerse id="line_60">Inna reaggae raggamuffin business</LyricsVerse>
                  <LyricsVerse id="line_61">Kom!</LyricsVerse>
                  <LyricsVerse id="line_62">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_63">Hip-hop reaggae inna dance hall style</LyricsVerse>
                  <LyricsVerse id="line_64">Hip-hop reaggae inna dance hall style</LyricsVerse>

               </LyricsParagraph>  

               <LyricsParagraph>
                  <LyricsVerse id="line_65">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_66">And ecstasy</LyricsVerse>
                  <LyricsVerse id="line_67">Will mush your life!</LyricsVerse>
                  <LyricsVerse id="line_68">Cocain will blow your brain</LyricsVerse>
                  <LyricsVerse id="line_69">And ecstasy</LyricsVerse>
                  <LyricsVerse id="line_70">Will mush your life!</LyricsVerse>
               </LyricsParagraph>    
               
            </LyricsContainer>

         </LyricsSourceContainer>
       );
   }
}

export default NoCoke_LyricsSource;