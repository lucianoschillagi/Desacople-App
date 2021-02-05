import React, { Component } from 'react'
import { Container,
         ContainerCentered,
         QuoteSong,
         SongTitle,
			Composers,
			SongInfoContainer,
         SongInfo,
         FromYears
} from './cover.styles.js'

// Abstract: this piece represents 
// the 'cover section' in analysis page
class CoverSection extends Component {

	///////////////////////////////////////////////////////
	// this component use -> this.props.coverSectionData 🗄
	///////////////////////////////////////////////////////

	render() {
		return (
			<Container>
				<ContainerCentered>

					<QuoteSong>
						"{this.props.coverSectionData.song_quote}"
					</QuoteSong>

					<SongTitle>
						{this.props.coverSectionData.song_title}
					</SongTitle>

					<Composers>
						Written by {this.props.coverSectionData.song_composer}
					</Composers>

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

					<FromYears>
						<em className="z">- for {this.props.coverSectionData.song_years} years!</em>
					</FromYears>
						
				</ContainerCentered>
			</Container>
    );
  }
}

export default CoverSection




