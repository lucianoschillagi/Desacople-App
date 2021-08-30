import React, { Component } from 'react';
import { Container, ContainerCentered } from '../../../../sections/associated-material/associated-material.styles';
import Another_AssociatedItem from './another-one-bites-the-dust-associated-item.component';

class Another_AssociatedSection extends Component {

	render() {
		return (
			<Container>
				<ContainerCentered>
					<Another_AssociatedItem 
						title={"Another One Bites the Dust" + "\n" + "[Official Video]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=rY0WxgSXdEE"/>
											
					<Another_AssociatedItem
						title={"Freddie Mercury" + "\n" + "[Interviews]"}
						subtitle="A compilation with the best Freddie interviews"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=_sGWDJmjjh4"/>

					<Another_AssociatedItem
						title={"Another One Bites the Dust" + "\n" + "[Live]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=NVIbCvfkO3E"/>

					<Another_AssociatedItem
						title={"Another One Bites the Dust" + "\n" + "[Film Clip]"}
						subtitle="Taken from The Game, 1980 and Greatest Video Hits 1"
						source="YouTube"
						externalPage="https://www.youtube.com/watch?v=-u7V_lwKTb0&t=3s"/>

				</ContainerCentered>
			</Container>
		);
   }
}

export default Another_AssociatedSection;