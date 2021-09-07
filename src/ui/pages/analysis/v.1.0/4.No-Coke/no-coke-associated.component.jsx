import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';
import NoCoke_AssociatedItem from './no-coke-associated-item.component';

class NoCoke_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<NoCoke_AssociatedItem 
						title={"Another One Bites the Dust" + "\n" + "[Official Video]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=rY0WxgSXdEE"/>
											
					<NoCoke_AssociatedItem
						title={"Freddie Mercury" + "\n" + "[Interviews]"}
						subtitle="A compilation with the best Freddie interviews"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=_sGWDJmjjh4"/>

					<NoCoke_AssociatedItem
						title={"Another One Bites the Dust" + "\n" + "[Live]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=NVIbCvfkO3E"/>

					<NoCoke_AssociatedItem
						title={"Another One Bites the Dust" + "\n" + "[Film Clip]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=-u7V_lwKTb0&t=3s"/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default NoCoke_AssociatedSection;