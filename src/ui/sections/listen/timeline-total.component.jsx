import React from 'react';
import './timeline-total.styles.css';

// Abstract: represents the song's TimelineTotal
class TimelineTotal extends React.Component {
	
    render() {

        // Timeline animation
        if (this.props.currentTimeSong > 1 ) {
            var cursor = document.getElementById('TimelineTotal_current_time_line');
            cursor.style.animationPlayState = "running";
        }

        if (this.props.timerOn === false) {
            // El cursor se detiene
            var cursor  = document.getElementById('TimelineTotal_current_time_line');
            cursor.style.animationPlayState = "paused";
        }
        
        // Draw this UI elements...
        return (
            <div className='TimelineTotal_container'>
                {/* background elements (static elements) */}
                
                {/* Section A COLUMN ********************************************** */}
                <div className="TimelineTotal_section_a_column">
                    
                    {/* Guitar Section A */}
                    <div className="TimelineTotal_guitar_section_a">
                        <div className="Timeline_guitar_segment_one"></div>
                    </div>

                    {/* Piano Section A */}
                        <div className="TimelineTotal_piano_section_a">
                        <div className="Timeline_piano_segment_one"></div>
                    </div>

                    {/* Bass Section A */}
                    <div className="TimelineTotal_bass_section_a">
                            <div className="Timeline_bass_segment_one"></div>
                    </div>

                    {/* Drums Section A */}
                    <div className="TimelineTotal_drums_section_a">
                            <div className="Timeline_drums_segment_one"></div>
                    </div>

                    {/* Drums Section A */}
                    <div className="TimelineTotal_drums_section_a">
                            <div className="Timeline_drums_segment_one"></div>
                    </div>

                    {/* Drums Section A */}
                    <div className="TimelineTotal_drums_section_a">
                            <div className="Timeline_drums_segment_one"></div>
                    </div>
                    {/* Drums Section A */}
                    
                    <div className="TimelineTotal_drums_section_a">
                            <div className="Timeline_drums_segment_one"></div>
                    </div>
                </div>

                {/* Section B COLUMN ************************************* */}
                <div className="TimelineTotal_section_b_column">
                    {/* Guitar Section B */}
                    <div className="Timeline_guitar_section_b">
                            {/* <GuitarSegmentTwo onClick={this.handleClick}>
                                <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </GuitarSegmentTwo> */}
                    </div>

                    {/* Piano Section B */}
                    <div className="Timeline_piano_section_b">
                        {/* <PianoSegmentTwo onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </PianoSegmentTwo> */}
                    </div>

                    {/* Bass Section B */}
                        <div className="Timeline_bass_section_b">
                        {/* <BassSegmentTwo onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </BassSegmentTwo> */}
                    </div>

                    {/* Drums Section B */}
                        <div className="Timeline_drums_section_b">
                        {/* <DrumsSegmentTwo onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </DrumsSegmentTwo> */}
                    </div>

                </div>

                {/* Section C COLUMN ********************************************** */}
                <div className="TimelineTotal_section_c_column">
                    {/* Guitar Section C */}
                    <div className="Timeline_guitar_section_c">
                            {/* <GuitarSegmentThree onClick={this.handleClick}>
                                <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </GuitarSegmentThree> */}
                    </div>

                    {/* Piano Section C */}
                        <div className="Timeline_piano_section_c">
                        {/* <PianoSegmentThree onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </PianoSegmentThree> */}
                    </div>

                    {/* Bass Section C */}
                        <div className="Timeline_bass_section_c">
                        {/* <BassSegmentThree onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </BassSegmentThree> */}
                    </div>

                    {/* Drums Section C */}
                        <div className="Timeline_drums_section_c">
                        {/* <DrumsSegmentThree onClick={this.handleClick}>
                            <TooltipText>Este es un texto descriptivo acerca de lo que representa este segmento en la canción. 👍</TooltipText>
                        </DrumsSegmentThree> */}
                    </div>
                </div>
                
                {/* Section D COLUMN ********************************************** */}

                {/* foreground elements (dynamic elements) */}
                <div className="TimelineTotal_current_time_line"
                        id="TimelineTotal_current_time_line">
                </div>
                
            </div>
        );
    }
}

export default TimelineTotal;