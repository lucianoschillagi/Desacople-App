import React from 'react'
import { Container,
         ContainerCentered,
         SongQuote,
         SongTitle,
			SongComposer,
			SongInfoContainer,
         SongInfo,
         SongAge
} from './cover.styles.js'

// Abstract: this component represents 
// the 'cover section' in 'analysis page'
class CoverSection extends React.Component {

	render() {
		return (
			<Container>
				<ContainerCentered>

					<SongQuote>
						"{this.props.coverSectionData.song_quote}"
					</SongQuote>

					<SongTitle>
						{this.props.coverSectionData.song_title}
					</SongTitle>

					<SongComposer>
						Written by {this.props.coverSectionData.song_composer}
					</SongComposer>

					<SongInfoContainer>

						<SongInfo>
								Album: {this.props.coverSectionData.song_album}
						</SongInfo>

						<SongInfo>
								Artist: {this.props.coverSectionData.song_artist}
						</SongInfo>

						<SongInfo>
								Release Date: {this.props.coverSectionData.song_release_date}
						</SongInfo> 

						<SongInfo>
								Genre: {this.props.coverSectionData.song_genre}
						</SongInfo>

					</SongInfoContainer>

					<SongAge>
						<em className="z">- for {this.props.coverSectionData.song_years} years!</em>
					</SongAge>
						
				</ContainerCentered>
			</Container>
    );
  }
}

export default CoverSection;




